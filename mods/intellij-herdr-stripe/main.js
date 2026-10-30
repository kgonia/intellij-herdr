// The right tool window stripe, as in IntelliJ: icon buttons, their names in tooltips.
// Top: one button per side panel (Files, Changes); clicking the shown one hides the panel.
// Bottom: Settings (with the update dot) and Add machine, from the sidebar footer.

import { View, div, svg } from "gpui-kit";
import { v_flex } from "gpui-base";
import { layout, run, shared, theme, updates } from "herdr";

const PANELS = [
  { id: "files", label: "Files" },
  { id: "changes", label: "Changes" },
];

function find(node, id) {
  if (node?.id === id) return node;
  for (const child of node?.children ?? []) {
    const found = find(child, id);
    if (found) return found;
  }
  return null;
}

export default class Stripe extends View {
  render() {
    const t = theme();
    const root = layout(), panel = find(root, "panel"), body = find(root, "panel-body");
    const shown = panel && !panel.hidden ? body?.active : null;
    // The welcome screen picks which panels a person uses; the tab bar honours the same list.
    const enabled = shared("workspace.panels") ?? ["files", "changes"];

    const button = (id, icon, label, on, onClick, dot) =>
      div().id(`stripe-${id}`).relative().flex_none().size(30).flex().items_center().justify_center().rounded(6).cursor_pointer()
        .tooltip(label)
        .bg(on ? t.accent : t.chrome).text_color(on ? t.accent_foreground : t.muted)
        .when(!on, (el) => el.hover((s) => s.bg(t.hover).text_color(t.foreground)))
        .on_click(onClick)
        .child(svg(`mods/intellij-herdr-stripe/${icon}.svg`).size(20))
        .when(Boolean(dot), (el) => el.child(div().absolute().top(3).right(3).size(7).rounded_full().bg(dot)));

    const panelButton = (p) => {
      const on = shown === p.id;
      return button(p.id, p.id, p.label, on, () => {
        if (on) run("layout.hide", { id: "panel" });
        else { run("layout.select", { stack: "panel-body", child: p.id }); run("layout.show", { id: "panel" }); }
      });
    };

    return v_flex().id("stripe").size_full().items_center().py(6).gap(6).bg(t.chrome)
      .children(PANELS.filter((p) => enabled.includes(p.id)).map(panelButton))
      .child(div().flex_1())
      .child(button("settings", "settings", "Settings", false, () => run("app.settings"), updates().app.ready ? t.accent : null))
      .child(button("machine", "machine", "Add machine", false, () => run("mod.open", { name: "machine-add" })));
  }
}

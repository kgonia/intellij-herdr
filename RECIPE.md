# IntelliJ (Herdr)

Herdr's own window, recolored as JetBrains IntelliJ's New UI. **This is mainly a change of look, not a new layout.** Spaces and agents stay on the left, tabs on top and terminals in the middle, with the same mods and the same behavior as Herdr's main layout. What changes is the colors (IntelliJ's exact Dark and Light), the terminal font (JetBrains Mono 13) and square, flat panes. The layout changes in only two small ways: Files, Changes, Settings and Add machine move from the tab bar and the sidebar footer to a narrow icon stripe on the right, as in IntelliJ, and the sidebar loses its footer. The theme follows the person's appearance: Dark when the system (or Herdr's Appearance setting) is dark, Light when it's light.

![IntelliJ (Herdr)](preview.png)

## What you see

Left to right, at zoom 1. Colors are Dark / Light.

1. **Sidebar**, 268px (drag 44–480px), `chrome` `#2b2d30` / `#f7f8fa`. Herdr's own sidebar, recolored and without its footer:
   - a 46px top bar with the Herdr mark, search and the sidebar toggle,
   - the Spaces list and the Agents list below it, sharing the height equally (at least 90px each).
2. A 1px `border` line, `#393b40` / `#ebecf0`. The same line separates every region below.
3. **Work column**, top to bottom:
   - **Tab bar**, 42px, `chrome`. Herdr's pill tabs: 29px high, 7px corners, 12.8px text.
     - The shown tab is `raised` `#393b40` / `#ebecf0` with a `border` edge and `foreground` text (`#dfe1e5` / `#000000`).
     - The others are `muted` `#9da0a8` / `#6c707e`.
     - At the right: + and, on Windows and Linux, the window buttons.
     - **No Files/Changes buttons**: they moved to the stripe.
   - **Body row**:
     - **Terminals**: the shown tab's panes on `background` `#1e1f22` / `#ffffff`.
       - Square corners and no outer margin. Splits are separated by a 1px `border` line.
       - Each pane keeps Herdr's 30px header: program, folder and agent status.
       - Text is JetBrains Mono 13px in `#bcbec4` / `#080808`, with selection `#214283` / `#a6d2ff`, cursor `#ced0d6` / `#000000`, and padding `[14, 12]`.
     - **Side panel**, hidden until opened: 368px (drag 280–900px) on `chrome`, with a 6px inset around Herdr's Files or Changes card.
     - **Tool window stripe**, 40px, fixed width, `chrome`, with 30px icon buttons (6px corners, 20px JetBrains icons, 6px apart, 6px from the edges). **Icons only, no labels**, as in IntelliJ; each button's name shows as a tooltip after the pointer rests on it for half a second.
       - Top: **Files** (folder icon) and **Changes** (commit icon). The shown panel's button is `accent` `#3574f0` with a white icon.
       - Bottom: **Settings** (gear) and **Add machine** (server icon). Settings carries a 7px `accent` dot while a Herdr update is ready to install.
       - Buttons that aren't selected are `muted`; on hover they turn `hover` (`#393b40` / `#ebecf0`) with `foreground`.
   - **Status bar**, 28px: Herdr's own. It shows the machine, the branch, the agent count with "needs you", and the command palette shortcut.

The colors the panels use:

| Color | Dark | Light |
|---|---|---|
| `background` / `canvas` | `#1e1f22` | `#ffffff` |
| `chrome` / `surface` | `#2b2d30` | `#f7f8fa` |
| `popover` | `#2b2d30` | `#ffffff` |
| `raised` / `hover` / `border` | `#393b40` | `#ebecf0` |
| `selected` | `#2e436e` | `#d4e2ff` |
| `input` | `#4e5157` | `#c9ccd6` |
| `foreground` | `#dfe1e5` | `#000000` |
| `muted` | `#9da0a8` | `#6c707e` |
| `dim` | `#6f737a` | `#818594` |
| `accent` / `solid` | `#3574f0` | `#3574f0` |
| `working` | `#467ff2` | `#3574f0` |
| `blocked` | `#db5c5c` | `#db3b4b` |
| `done` | `#57965c` | `#208a3c` |
| `idle` / `unknown` | `#6f737a` | `#818594` |

The terminal colors (ANSI 0–15):

- Dark: `#000000 #f0524f #5c962c #a68a0d #3993d4 #a771bf #00a3a3 #808080 #595959 #ff4050 #4fc414 #e5bf00 #1fb0ff #ed7eed #00e5e5 #ffffff`
- Light: `#000000 #ce0505 #067d17 #b28c00 #063fdb #b309b3 #028e8e #929292 #656565 #ff1616 #16b42c #ecc32c #2d61f0 #e617e6 #15c1c1 #c9c9c9`

## How it behaves

- **Agent status** is Herdr's own, recolored:

  | Status | How it looks |
  |---|---|
  | working | A blue (`#467ff2` / `#3574f0`) spinning ring after the tab name and in the pane header; listed under "Working" in the Agents list. |
  | blocked | A red (`#db5c5c` / `#db3b4b`) dot on the tab and a red "Needs you" badge in the pane header; listed under "Needs you" in the Agents list, with a red count in the status bar. Herdr also shows a toast and plays a sound. |
  | done | A green (`#57965c` / `#208a3c`) dot on the tab and in the pane header. |
  | idle | A gray ring in the Agents list; the tab is plain. |
- **Stripe**:
  - Files opens the side panel on Files. Clicking it again closes the panel. Changes while Files is open switches the panel.
  - Only the panels picked on Herdr's welcome screen appear (both, by default).
  - Each space remembers its own panel: switching spaces shows that space's choice, or none.
  - Settings opens Herdr's settings. Add machine opens Herdr's Add machine dialog. These are the same actions as the old footer rows.
- **Light and dark** follow the system, or Herdr's Settings → Look → Appearance. Picking a theme in Settings overrides both for this layout.
- **Everything else works as in Herdr's main layout**:
  - Tabs: click selects, double-click renames, drag moves, right-click opens the tab menu, the mouse wheel steps through tabs, + opens the new-terminal/agent menu.
  - `ctrl-shift-b` hides the sidebar, `ctrl-shift-l` switches layouts.
  - Dragging the top bars moves the window.
- Dragging the boundary left of the stripe doesn't change the stripe's width; dragging the boundary left of the side panel resizes the panel.

## Built from

```
root (row; titlebar none; theme {dark: intellij-herdr-dark, light: intellij-herdr-light};
      font JetBrains Mono, font_size 13; background canvas; terminal_padding [14,12];
      divider 1px border; preview layouts/intellij-herdr.svg; traffic_lights [12,16];
      cloned_from main 0.1.9)
├─ sidebar  column 268px (min 44, max 480), background chrome, resizable false
│  ├─ brand           block 46px, window_drag   mod workspace-chrome   (shipped)
│  └─ sidebar-lists   column
│     ├─ spaces       block weight 1, min 90    mod spaces             (shipped)
│     └─ agents       block weight 1, min 90    mod agents             (shipped)
└─ work     column, resizable false
   ├─ tabs        block 42px, window_drag       mod intellij-herdr-tabs
   ├─ work-body   row, padding 0, gap 0, divider 1px border
   │  ├─ main     block, background border
   │  │           { tab: active, pane: { gap 1, radius 0, background background,
   │  │             border/focus width 0, lone true,
   │  │             header { mod pane (shipped), height 30, top, reveal always } } }
   │  ├─ panel    column 368px (min 280, max 900), hidden, background chrome, padding 6
   │  │  └─ panel-body  stack, active files
   │  │     ├─ files    mod files    (shipped)
   │  │     └─ changes  mod changes  (shipped)
   │  └─ stripe-right  block 40px (min 40, max 40), background chrome   mod intellij-herdr-stripe
   └─ status      block 28px                    mod workspace-status   (shipped)
```

- **The layout** is `herdr-app do layout.clone '{"name":"main","as":"intellij-herdr"}'`, then these edits. Everything else is `main` as shipped.
  - **Look**: root `theme`, `font`, `font_size` and `preview`.
  - **Flat panes**: `work-body` padding and gap 0 plus a divider; `main` background `border` with the pane frame's `gap 1, radius 0`, borders 0.
  - **Panel**: background `chrome` and padding 6, so the shipped Files/Changes cards keep a margin.
  - **Structure**:
    - the `sidebar-footer` block is removed,
    - `tabs` uses `intellij-herdr-tabs`,
    - the new `stripe-right` block is added.
- **`mods/intellij-herdr-tabs`** is `mod.clone tabs`. The only change: the `panelButton` helper and its two `.when(enabled.includes(...))` children are removed. `syncPanel` stays, so the per-space panel memory keeps working.
- **`mods/intellij-herdr-stripe`** is new, about 55 lines.
  - It reads `layout()` (the `panel` node's `hidden` and `panel-body`'s `active`), `shared("workspace.panels")` (default `["files", "changes"]`), `updates().app.ready` and `theme()`.
  - Commands:
    - `layout.select {stack: "panel-body", child}`, `layout.show {id: "panel"}`, `layout.hide {id: "panel"}`,
    - `app.settings`,
    - `mod.open {name: "machine-add"}`.
  - Tooltips use gpui-kit's `.tooltip(label)`.
  - It runs no programs and reads no files.
- **Shipped mods used unchanged**: `workspace-chrome` (top bar only), `spaces`, `agents`, `pane`, `files`, `changes`, `workspace-status`, plus `menu`, `new-menu`, `picker` and `machine-add` as overlays. `files` and `changes` run `git` and read files in the focused folder, as they do in Herdr's main layout.
- **Themes**: `themes/intellij-herdr-dark.json` and `themes/intellij-herdr-light.json`. Every value comes from `JetBrains/intellij-community`:
  - `platform/platform-resources/src/themes/expUI/expUI_dark.theme.json` and `expUI_light.theme.json` for the UI colors;
  - `expUI_darkScheme.xml` and `expUI_lightScheme.xml` for terminal text, caret and light selection;
  - `platform/platform-resources/src/DefaultColorSchemesManager.xml` for the Darcula and Default console ANSI colors and the dark selection, which the dark scheme inherits from Darcula.

  The mapping:

  | Herdr | Dark key → value | Light key → value |
  |---|---|---|
  | `background`, `canvas` | `EditorTabs.background` Gray1 | Gray14 |
  | terminal text (`terminal_foreground`) | `TEXT` fg `#bcbec4` | `TEXT` fg `#080808` |
  | `selection` | Darcula `SELECTION_BACKGROUND` | `SELECTION_BACKGROUND` |
  | `cursor` | `CARET_COLOR` | Default `CARET_COLOR` |
  | `chrome`, `surface` | `*.background` Gray2 | Gray13 |
  | `popover` | `Popup.background` (Gray2) | Gray14 |
  | `raised`, `hover` | `*.hoverBackground` Gray3 | `StatusBar.Widget.hoverBackground` Gray12 |
  | `border` | `*.separatorColor` Gray3 | Gray12 |
  | `selected` | `*.selectionBackground` Blue2 | Blue11 |
  | `input` | `Component.borderColor` Gray5 | Gray9 |
  | `foreground` | `*.foreground` Gray12 | Gray1 |
  | `muted` | `StatusBar.Widget.foreground` Gray9 | Gray6 |
  | `dim` | `*.infoForeground` Gray7 | Gray7 |
  | `accent`, `solid` | `Button.default.startBackground` Blue6 | Blue4 |
  | `working` | `ProgressBar.progressColor` Blue7 | Blue4 |
  | `blocked` | `Label.errorForeground` Red7 | Red4 |
  | `done` | the Run icon's stroke (`expui/run/run_dark.svg`) | `run.svg` |
  | ANSI 0–15 | Darcula `CONSOLE_*_OUTPUT` | Default `CONSOLE_*_OUTPUT` |
- **Art**: the stripe icons come unchanged from `platform/icons/src/expui/` (Apache-2.0). They're drawn with `svg()`, so they're tinted with the text color.
  - `files.svg`: `toolwindows/project@20x20.svg`
  - `changes.svg`: `toolwindows/commit@20x20.svg`
  - `settings.svg`: `general/settings@20x20.svg`
  - `machine.svg`: `toolwindows/webServer@20x20.svg`

  `layouts/intellij-herdr.svg` is the picture on the settings screen.

## Watch out

- **Copy `themes/` too.** Herdr's usual install copies only `layouts/` and `mods/`. Without `themes/intellij-herdr-*.json` the layout falls back to Herdr's default theme.
- **The two clones don't update with Herdr.** They're frozen at Herdr 0.1.9: the layout (from `main`) and `intellij-herdr-tabs` (from `tabs`). After an update, rebuild them from this recipe:
  - run `layout.clone main` and `mod.clone tabs` again,
  - repeat the edits listed in Built from.

  The tab bar has no option to hide its Files/Changes buttons, which is why it's a clone.
- **The footer is removed whole, not trimmed.** It's the shipped `workspace-chrome` mod with `{footer: true}`, drawing Settings and Add machine; removing one row would mean cloning that mod too. Both rows' actions, and the Settings update dot, are in the stripe instead.
- **`terminal_foreground` keeps terminal text apart from panel text.** The themes set `colors.terminal_foreground` so terminal text is `#bcbec4` while panel text (`foreground`) is `#dfe1e5`. Herdr's manual doesn't list that key, but Herdr's own Terminals layout uses it, and a screenshot reads `#bcbec4` in the terminal.
- **The stripe needs `min`/`max` 40.** `work-body` is a resizable row, so without them dragging the boundary left of the stripe widens it.
- **Tooltips only work on some elements.** gpui-kit takes a string, and only on a `div`, `h_flex`, `v_flex` or `Button`, so each stripe button is a plain `div`.
- **Files and Changes keep their rounded cards.** They're Herdr's shipped mods; the panel's 6px `chrome` inset gives them room. Making them flat would mean cloning them too.
- **The theme names differ from the layout's.** They're `intellij-herdr-dark` and `-light`, not `intellij-herdr`, so Settings offers them in every layout. A theme named exactly like the layout would be the layout's only theme.
- **The stripe follows Herdr's welcome choice.** It shows only the panels in Herdr's welcome choice (`workspace.panels`), as the tab bar did; Settings and Add machine always show.
- **Make the preview carefully.** On Windows, pane headers show full paths (`C:\Users\<name>\…`) and the Spaces/Agents lists show every space, so stage a demo before taking `preview.png`.

## Done when

- `herdr-app check mods/intellij-herdr-tabs` and `herdr-app check mods/intellij-herdr-stripe` pass.
- After `herdr-app do layout.switch --name intellij-herdr`, `herdr-app status` shows `errors: []`.
- In dark appearance, a screenshot (`herdr-app shot`) reads `#1e1f22` behind the terminal, `#2b2d30` in the sidebar and `#bcbec4` for terminal text.
- In light appearance, it reads `#ffffff` and `#f7f8fa`.
- The tab bar has no Files or Changes buttons, and the sidebar has no Settings/Add machine footer.
- The stripe on the right is 40px with four icons and no labels: Files and Changes at the top, Settings and Add machine at the bottom. Resting the pointer on one shows its name.
- Clicking Files opens a 368px panel showing Files, and the Files button turns `#3574f0`. Clicking it again hides the panel.
- Settings opens Herdr's settings, and Add machine opens its Add machine dialog.
- Opening Changes in one space, switching to another and back shows Changes again.
- Splitting a pane draws a 1px `border` line between the panes, with square corners and no margin around them.
- Dragging the boundary left of the stripe leaves it 40px wide.
- An agent reporting `working` shows a blue spinning ring on its tab. One reporting `blocked` shows a red dot and "Needs you".

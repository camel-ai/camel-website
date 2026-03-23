# Tech stack logos

Add SVG files here so the tech stack page can show them. Paths are served from the site root as `/tech-stack-logos/...`.

## Layout

Use one folder per section (same name as the folder):

| Folder | Section on the page |
|--------|---------------------|
| `models/` | Models |
| `storage/` | Storage |
| `data-loaders/` | Data Loaders |
| `interpreters/` | Interpreters |
| `run-time/` | Runtime |
| `retrievers/` | Retrievers |
| `mcp/` | MCP |
| `human-in-the-loop/` | Human in the Loop |
| `observe/` | Observe |

## File naming

Each file must match the item `id` in `src/components/techstack/content/<section>/index.json`, plus `.svg`.

Example: model id `openai` → `models/openai.svg`.

The **Tools** section does not use logos; toolkit names are text-only.

## Syncing `logo` flags in JSON

After you add or remove SVGs, run:

`node scripts/sync-tech-stack-logos.mjs`

That turns off `logo` (and shows labels) for any item whose `id.svg` is missing in the matching folder. The UI also falls back to text if an SVG fails to load.

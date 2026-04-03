# Changelog

## [0.8.3] - 2026-04-02

### Fixed
- **Widget interaction** — Restored missing click-to-select, drag-to-move, and resize functionality lost in module splitting — fixes [#24](https://github.com/Curbob/LobsterBoard/issues/24)
- **Widget deletion** — Fixed non-functional delete button in properties panel by adding missing `deleteWidget()` function
- **JavaScript execution** — Fixed widget scripts not running by correcting DOM element ID matching (`widget-X` vs `preview-widget-X`)
- **Edit mode controls** — Fixed "Done" button and edit mode state management after module refactoring

### Technical
- Added complete widget event system (click, mousedown, resize handles)
- Added `startDragWidget()` and `startResizeWidget()` functions with grid snapping
- Added `deleteWidget()` function with proper state cleanup
- Fixed widget script execution timing and element targeting
- Restored full editor interactivity matching pre-0.8.1 functionality

## [0.8.2] - 2026-04-02

### Fixed
- **Critical module loading** — Fixed missing `js/widgets/index.js` and `js/editor/widgets.js` entry files after v0.8.1 module splitting, resolving 404 errors that prevented editor from loading — fixes [#24](https://github.com/Curbob/LobsterBoard/issues/24)

### Technical  
- Added widget registry initialization module (`js/widgets/index.js`)
- Added editor widget library functionality (`js/editor/widgets.js`)
- Ensures clean git clone + `npm install` + `node server.cjs` works without errors

## [0.8.1] - 2026-03-29

### Fixed
- **Module organization** — Split monolithic files into focused modules for better maintainability

## [0.8.0] - 2026-03-24

### Added
- **Claude Usage widget** — Real-time Claude Code subscription monitoring with 5-hour session, 7-day weekly, Opus/Sonnet limits, and extra usage tracking — thanks @JamesTsetsekas!
- **Claude Usage standalone page** — Full-page dashboard for detailed usage analysis at `/pages/claude-usage/`

### Fixed
- **OpenClaw version detection** — Widget now correctly parses `openclaw --version` output to fix false "Update available" notifications — thanks @JamesTsetsekas!

### Technical
- Auto-refreshes expired Claude OAuth tokens via CLI
- Reads from standard `~/.claude/.credentials.json` location
- Comprehensive error handling for rate limits and authentication issues

## [0.7.0] - 2026-03-17

### Added
- **Enhanced Gemini CLI integration** — auto-detect all available Gemini CLI quota buckets (including new 3.x models) instead of hardcoded 2.x allowlist — thanks @mastash3ff!
- **Auto-refresh OAuth tokens** — Gemini CLI tokens now automatically refresh to survive multi-machine rotation, preventing authentication failures — thanks @mastash3ff!

### Changed
- **Future-proof model support** — Gemini CLI collector now automatically surfaces new quota windows when Google adds them

## [0.3.1] - 2026-02-28

### Fixed
- **Edit mode header clutter** — page navigation links now hide when entering edit mode to reduce header crowding

## [0.3.0] - 2026-02-28

### Added
- **Theme switcher** — 5 themes: Default (dark), Feminine (pastel pink/lavender), Feminine Dark, Terminal (green CRT), Paper (cream/sepia)
- **Phosphor icon system** — themed widgets use Phosphor icons; Default theme keeps emoji
- **Theme selector dropdown** in edit mode header
- Theme persists to localStorage and dashboard config
- **Themes showcase** on website and README with lightbox gallery

## [0.2.6] - 2026-02-23

### Fixed
- **Version suffix comparison** — versions like `2026.2.22-2` (npm post-release patches) now correctly match GitHub tags like `v2026.2.22`, fixing false "Update available" indicators — thanks @JamesTsetsekas!

## [0.2.5] - 2026-02-19

### Fixed
- **iCal timezone parsing** — calendar events now display at correct times regardless of timezone (TZID parameter support) — thanks @jlgrimes!

### Added
- **Clickable URLs in calendar** — Zoom/Teams links in event summaries and locations are now hyperlinks — thanks @jlgrimes!

## [0.2.4] - 2026-02-17

### Fixed
- SSRF vulnerability in RSS feed proxy (thanks @jlgrimes for the security report!)

## [0.2.3] - 2026-02-16

### Added
- **PIN-locked edit mode** — set a 4-6 digit PIN to prevent unauthorized editing (SHA-256 hashed, server-side only)
- **Server-side secrets store** — API keys, calendar URLs, and tokens stored in `secrets.json`, never sent to browser
- **Public Mode** — hides edit button and blocks config APIs; subtle 🔒 unlock button for admin access
- **Privacy warnings** on sensitive widgets (System Log, Activity List, Cron Jobs, Calendar, Todo List) — ⚠️ badge in widget panel + orange warning in properties panel
- **Community Widgets** — contribution guide, templates, and PR checklist for community widget submissions

### Fixed
- Private calendar URLs (Google Calendar, iCloud CalDAV) no longer leak in template exports
- Template export `stripSensitive()` now detects URLs with auth tokens
- Public mode toggle uses masked PIN modal instead of plain-text `prompt()`
- `closePinModal()` no longer kills pending callbacks

### Security
- `auth.json` and `secrets.json` added to `.gitignore`
- Pre-commit hook blocks private data patterns in template files

## [0.2.2] - 2026-02-16

### Fixed
- Removed private Google Calendar URL accidentally included in template config
- Fixed `stripSensitive()` to detect and blank URLs with embedded auth tokens

## [0.2.1] - 2026-02-15

### Fixed
- Minor bug fixes and stability improvements

## [0.2.0] - 2026-02-15

### Added
- **Template Gallery** — export, import, and share dashboard layouts with auto-screenshot previews
  - `js/templates.js` — new template gallery UI and export system
  - Templates API: list, get, preview, import (merge/replace), export, delete
  - `templates/` directory with bundled starter templates
  - Template modal with search, preview lightbox, and import options
- **Notes widget** — persistent rich-text notes with auto-save via `/api/notes`
- **Browse button** for directory selection in image widgets (Image, Random Image, Latest Image)
- **GitHub Stats widget rework** — profile contributions, stars, and activity with property bindings
- **LobsterBoard Release widget** — version update checker via `/api/lb-release`
- **SSE streaming** for system stats (`/api/stats/stream`)
- **Browse directories API** (`/api/browse-dirs`) for server-side directory picker
- Sidebar reorder, verified checkmarks, delete button, tooltips in editor
- html2canvas-based dashboard screenshot export
- Scrollable canvas mode

### Changed
- Stock Ticker widget — fixed `hasApiKey` check
- Builder — contenteditable keyboard fix, null-checks throughout
- License changed from MIT to BSL-1.1
- Widget count: 47 → 50

### Removed
- GPT Usage widget (standalone) — use AI Cost Tracker or Claude Usage instead

## [0.1.6] - 2025-02-14

- Initial public npm release
- 47 widgets, drag-and-drop editor, custom pages system
- SSRF protection for proxy endpoints

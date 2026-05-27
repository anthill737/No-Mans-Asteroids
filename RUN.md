# Space Game — Setup & Run

## Prerequisites

- **Node.js LTS** (v20 or v22 recommended — download from https://nodejs.org/en/download)
- npm (included with Node.js)

## Recommended Launch

Double-click `start-game.bat` from Windows Explorer.

The launcher checks for Node.js/npm, installs dependencies if `node_modules` is missing, starts the dev server, and opens `http://localhost:9999` in your default browser. Keep the console window open while playing; press Ctrl+C in that window to stop the server.

## Manual Terminal Fallback

Open PowerShell or cmd in the project folder, then install dependencies:

```
npm install
```

Start the dev server:

```
npm run dev
```

Then open `http://localhost:9999` in your browser.

## Configuration

No configuration is required beyond the bundled `vite.config.ts`. There are no environment variables to set.

Open Settings -> Ship in-game to choose free Cockpit, Wings, and Hull variants.

## Port

If port 9999 is already in use the dev server will exit with an error (it will not auto-select another port). Stop whatever is using that port and re-run.

## Verify It's Running

1. Open `http://localhost:9999` in your browser.
2. You should see the cockpit view with the game canvas — the spaceship interior framing the starfield and play area.
3. If the page is blank or shows an error, check the terminal output for compilation errors.

## Tests

```
npm test
```

## Build (production bundle)

```
npm run build
```

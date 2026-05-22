# Space Game — Setup & Run

## Prerequisites

- **Node.js LTS** (v20 or v22 recommended — download from https://nodejs.org/en/download)
- npm (included with Node.js)

## Install

Open PowerShell or cmd in the project folder, then run:

```
npm install
```

## Configuration

No configuration is required beyond the bundled `vite.config.ts`. There are no environment variables to set.

## Launch

```
npm run dev
```

The game runs at **http://localhost:9999**.

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

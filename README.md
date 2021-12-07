# cc-global-components

Vue.js components for consistent navigation and branding across Creative Commons web properties

## Status

Development: This project is currently in development.

## Overview

This project is built using [`vue-sfc-rollup`](https://www.npmjs.com/package/vue-sfc-rollup) which is is a CLI templating utility that scaffolds a minimal setup for compiling a Vue library - into a form ready to share via npm or via CDN.

The folder structure is as follows:

- `build/` : This has the rollup config for compiling files.
- `dev/`: Use for serving the components for local testing during development.
- `src`: This directory contains a sub-directory:
  - `components`: This is where our components code is found. For this project, we have three components:
  - - `cc-donate.vue`: The component for the CC Donation modal.
    - `cc-explore.vue`: The component for the Explore CC banner.
    - `cc-global-header.vue`: The component for the Global Navigation Menus
    - `cc-global-footer.vue`: The component for the Global CC footer.
    - `index.js`: Where our components are exported. Any new component must be registered in this file.

## Development

See [Contributing.md](Contributing.md).

## License

- [License](LICENSE)

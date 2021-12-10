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
    - `cc-explore.vue`: The component for the Explore CC banner.
    - `cc-global-header.vue`: The component for the Global Navigation Menus
    - `cc-global-footer.vue`: The component for the Global CC footer.
    - `index.js`: Where our components are exported. Any new component must be registered in this file.

## Components

### CC Explore

CC Global Footer requires a `donation-url` attribute which is the URL used for the Donation button.

```html
<cc-explore donation_url="http://example.com" />
```

### CC Global Header

The CC Global Header has two required attributes, `base-url` and `donation-url` , which are the URLs used for the API call and the Donation button respectively. For a development environment, the `base-url` could be `http://127.0.0.1:8000`. Note: the `base-url` value should not have a trailing slash.

```html
<cc-global-header
  base_url="http://127.0.0.1:8000"
  donation_url="http:/example.com"
/>
```

### CC Global Footer

CC Global Footer requires a `donation-url` attribute which is the URL used for the Donation button.

```html
<cc-global-footer donation_url="http://example.com" />
```

## Usage

Integrate the CC Global Components into downstream projects with the following steps.

1. Add Vue JS via CDN
2. Add the stylesheets for Fonts and Vocabulary
3. Include the CC Global Components from CDN
4. Add the desired component(s) to your template within a container `div`
5. Render the components in the template via JavaScript

Example for the `cc-explore` component:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@creativecommons/fonts@2020.9.3/css/fonts.css"
/>
<link
  rel="stylesheet"
  href="https://unpkg.com/@creativecommons/vocabulary@2020.11.3/css/vocabulary.css"
/>
<script src="https://unpkg.com/vue@next"></script>
<script src="https://unpkg.com/@creativecommons/cc-global-components/dist/cc-global.min.js"></script>

<div id="explore-cc">
  <cc-explore donation-url="http://example.com" />
</div>

<script>
  const cc_explore = Vue.createApp({});
  cc_explore.use(CcGlobal);
  cc_explore.mount("#explore-cc");
</script>
```

For the `cc-global-header` component, you will need to add Axios via CDN:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

## Development

See our [contributing guide](CONTRIBUTING.md).

## License

- [License](LICENSE)

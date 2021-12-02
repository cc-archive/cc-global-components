# Contributing

There are many ways to contribute to this project such as testing, design, and development.

## Development

This section provides information for people who are interested in contributing code.

### Setup

Fork this repository and clone it to your local development environment.
In the root folder (`cc-global-components`), run the following commands:

```npm
npm install
```

To preview the project, run

```npm
npm run serve
```

To build the project, run

```npm
npm run build
```

To build the project just for CDN use, run

```npm
npm run build:unpkg
```

### Testing Locally

To test locally how it will behave when hosted on a CDN, serve the file `dev.html` found in the root directory.
To include the components in an HTML template:

- Add Vue JS via CDN
- Add the build version of the components via a script tag (the output of `npm run build:unpkg`)
- Import each component as such and mount it on a corresponding `div` element.

Example for the `cc-explore` component:

```html
<script src="https://unpkg.com/vue@next"></script>
<script src="./dist/cc-global.min.js"></script>

<div id="explore-cc">
  <cc-explore />
</div>

<script>
  const cc_explore = Vue.createApp({});
  cc_explore.use(CcGlobal);
  cc_explore.mount("#explore-cc");
</script>
```

For the `cc-global-header` componenet, you will need to add Axios via CDN:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

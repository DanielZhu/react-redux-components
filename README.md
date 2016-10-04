# redux-components
Simple components for usage with react and redux.

### Example:
[https://rodrigonehring.github.io/react-redux-components/](https://rodrigonehring.github.io/react-redux-components/)

## Folder structure:
maybe in the future i will create a dist folder...
```
project
│   README.md
└───src
│   │   app.js
│   │   configureStore.js
│   │   index.js
│   │   reducers.js
│   │   root.js
│   │   styles.css
│   └───components
│       └───name
│           │   index.js  -> import name.js
│           │   name.js ->  stateful react
│           │   name.css -> postcss
│           │   actions.js -> all  redux actions of this component
│           │   reducer.js -> control the state
│           │   types.js -> types creator
└───tools
    │   webpack.config.dev.js
    │   webpack.config.prod.js
```


## Todo:
- [x] create a repository and a readme

- [x] initial folder structure

- [x] configure webpack, react and redux for dev mode

- [ ] commitizen

- [ ] notify component - doing!

- [ ] modal component

## Dev Mode
- git clone
- npm i
- npm start

Will up a dev server, using webpack-dev-server and express.
This server use HMR, all changes (almost all), will be live reloaded without refresh, javascript too.



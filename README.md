# Weather

## React Code Challenge

- [x] Fetch weather conditions from https://openweathermap.org/current
- [x] Display weather data in widgets
- [x] Sort widgets Asc or Desc
- [x] Light / dark mode toggle

## Arhitecture

- based on [create-react-app](https://create-react-app.dev/)
- state management [redux-toolkit](https://redux-toolkit.js.org/)
- styling [material-ui](https://mui.com/)
- mock [mswjs](https://mswjs.io/)

### Resonale behind this approach

I've choose those packages as they provide scalability. `Redux toolkit` is a very good tool to use with `typescript`, they provide type safe actions and selectors, also `redux-toolkit query` provides `caching` / `invalidation` / `fetching` and if the backend is using openapi we can generate our apis from it. `Material-ui` is a popular styling library and with v5 they decoupled their JSS, so we can use other styling engines. For mocking server request I've choose `mswjs` as is non intrusive and can be used both in testing and in development.`Create-react-app` is boilerplate that includes everything you need to get started: `linting`, `css modules`, `jest`.

Project is structured as follows:

- `index.tsx` entry point. Here should be added all Providers for the app ex: React-router
- `App.tsx` is app wrapper. Here should be high level of the app eg: all app routes
- `src/shared` is code that is shared in more than one module eg: `shared/test` which bootstrapts the whole app to be ready for testing
- `src/weather` is weather feature implementation
- `src/weather/shared` is all code that's share ore reusable in weather components. If a component / code can be shared across other feature should be promoted to `src/shared`
- `src/weather/reducers` is integration with weather api backend also contains redux logic
- `src/Weather/Weater.spec.tsx` is an example of integration test
- `*.spec.ts` - besides the above one, the others are unittest

### Getting started

1. Make sure you have yarn installed `yarn --version` recommended **>= 1.22.18**
2. Run following command `yarn`
3. Make a file `.env`, copy content from `.env.example` and update accordingly
4. Run following command `yarn start`

### How to run tests

1. Make sure you have yarn installed `yarn --version` recommended **>= 1.22.18**
2. Run following command `yarn`
3. Run following command `yarn test`

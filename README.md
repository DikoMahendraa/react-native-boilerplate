## React Native Boilerplate

An easy way to start your first project using React Native, with customizability, readability, and ease of maintenance in mind.

## Folder Structure

### **Atomic Design Pattern**

```
src
├── @types => globals types
├── assets => all routes pages
├── components => all routes pages
├──────────── atoms => unit components
├──────────── molecules => combination from some atoms
├──────────── organisms => combination from some molecules
├── constants => static variables
├── hooks => custom hooks function
├── layouts => component as a wrapper screen
├── navigation => set all routes pages navigation
├── services => integration with BE service using REST API/GraphQL
├── stores => set state management for zustand/jotai/redux
├── utils => helper functional
```

## Authors

- [@diko.dev99](https://www.github.com/dikomahendraa)

## Tech setup

[React Native SVG](https://www.npmjs.com/package/react-native-svg)
[Zustand](https://github.com/pmndrs/zustand/tree/main/docs)
[Tanstack](https://tanstack.com/query/v5/docs/framework/react/installation)
[Axios](https://github.com/axios/axios)
[Lucide Icon](https://lucide.dev/guide/packages/lucide-react-native)
[React Navigation](https://reactnavigation.org/docs/getting-started)
[Husky pre commit](https://typicode.github.io/husky/get-started.html)
[React Native Testing Library](https://callstack.github.io/react-native-testing-library/docs/start/quick-start)
[Eslint Plugin RTL](https://github.com/testing-library/eslint-plugin-testing-library)

## Run Locally

Clone the project react-native-boilerplate

```bash
  git clone https://github.com/DikoMahendraa/react-native-boilerplate.git
```

Go to the project directory

```bash
  cd seact-native-boilerplate
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Run on emulator ios

```bash
  npm run ios
```

Run on emulator android

```bash
  npm run android
```

## React Native Boilerplate

An easy way to start your first project using React Native, with customizability, readability, and ease of maintenance in mind.

## Folder Structure

### **Atomic Design Pattern**

```
src
├── @types       => Global type definitions
├── assets       => All asset files
├── components   => UI components
│   ├── atoms       => Basic unit components
│   ├── molecules   => Combinations of atoms
│   ├── organisms   => Comprehensive UI screens composed of molecules
├── constants    => Static variables
├── hooks        => Custom hook functions
├── layouts      => Wrapper components for screens
├── navigation   => Route configuration and navigation setup
├── services     => Integration with backend services using REST API/GraphQL
├── stores       => State management with Zustand
├── utils        => Helper functions
```

## Authors

- [@diko.dev99](https://www.github.com/dikomahendraa)

## Tech setup

- [React Native SVG](https://www.npmjs.com/package/react-native-svg) A library for rendering SVG images in React Native applications.
- [Zustand](https://github.com/pmndrs/zustand/tree/main/docs) A small, fast, and scalable state management library for React.
- [Tanstack](https://tanstack.com/query/v5/docs/framework/react/installation) Powerful asynchronous state management for React applications.
- [Axios](https://github.com/axios/axios) A promise-based HTTP client for making requests to APIs.
- [Lucide Icon](https://lucide.dev/guide/packages/lucide-react-native) A library for using customizable icons in React Native applications.
- [React Navigation](https://reactnavigation.org/docs/getting-started) A routing and navigation library for React Native applications.
- [Zod](https://zod.dev/?id=installation) A TypeScript-first schema declaration and validation library.
- [React Hooks Form](https://react-hook-form.com/get-started#ReactNative) A library for building performant, flexible, and extensible forms with easy-to-use validation.
- [Schema Validation - Resolver](https://react-hook-form.com/get-started#SchemaValidation) Resolver - A resolver for integrating schema validation libraries like Zod with React Hook Form.
- [Husky pre commit](https://typicode.github.io/husky/get-started.html) A tool for managing Git hooks, such as pre-commit hooks.
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/docs/start/quick-start) A library for testing React Native components and applications.
- [Eslint Plugin RTL](https://github.com/testing-library/eslint-plugin-testing-library) ESLint plugin to follow best practices and catch mistakes with Testing Library.
- [Local Storage - MMKV](https://github.com/mrousavy/react-native-mmkv) A fast, efficient, and small storage solution for React Native.

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

Install on ios env

```bash
  cd ios && pod install
```

```bash
  cd ...
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

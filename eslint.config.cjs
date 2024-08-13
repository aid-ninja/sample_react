module.exports = {
  root: true, // Indicates that this is the root configuration file
  env: {
    browser: true, // Define global variables for browser environments
    es2021: true, // Enable ES2021 features
  },
  extends: [
    'eslint:recommended', // Use ESLint’s recommended rules
    'plugin:react/recommended', // Use recommended rules from the React plugin
    'plugin:react-hooks/recommended', // Use recommended rules for React Hooks
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Enable JSX syntax
    },
    ecmaVersion: 12, // Use ECMAScript 2021 syntax
    sourceType: 'module', // Allow the use of import/export statements
  },
  plugins: [
    'react', // Enable React plugin
    'react-hooks', // Enable React Hooks plugin
  ],
  rules: {
    'react/prop-types': 'off', // Disable prop-types rule if you're using TypeScript or another method for type-checking
    'react/react-in-jsx-scope': 'off', // Disable rule requiring React to be in scope when using JSX
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the version of React
    },
  },
};

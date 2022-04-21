module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": 0,
    "react/jsx-filename-extension": 0,
    quotes: 0,
    "linebreak-style": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-props-no-spreading": 0,
    "react/function-component-definition": 0,
    "react/jsx-fragments": 0,
    "react/react-in-jsx-scope": 0,
    "default-param-last": 0,
  },
};

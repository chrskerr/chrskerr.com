module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": [ "error", "tab" ],
    "linebreak-style": [ "error", "unix" ],
    "quotes": [ "error", "double" ],
    "semi": [ "error", "always" ],
    "array-bracket-spacing": [ "error", "always", { "objectsInArrays": false, "arraysInArrays": false }],
    "object-curly-spacing": [ "error", "always", { "objectsInObjects": false, "arraysInObjects": false }],
    "space-in-parens": ["error", "always", { "exceptions": ["{}", "()", "[]"] }],
    "computed-property-spacing": [ "error", "always" ],
    "comma-dangle": [ "error", "always-multiline" ],
    "prefer-const": "error",
    "prefer-spread": "error",
    "func-call-spacing": [ "error", "never" ],
    "no-loop-func": "error"
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

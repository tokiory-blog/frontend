module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:nuxt/recommended"
  ],
  globals: {
    nuxt: true
  },
  overrides: [],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "vue",
    "@typescript-eslint"
  ],
  ignorePatterns: [
    "dist"
  ],
  rules: {
    "linebreak-style": [
      "error",
      "unix"
    ],
    "no-undef": [
      "off"
    ],
    quotes: [
      "error",
      "double"
    ],
    semi: [
      "error",
      "always"
    ],
    "quote-props": [
      "error",
      "as-needed",
    ],
    "vue/max-attributes-per-line": ["error", {
      singleline: {
        max: 1
      },
      multiline: {
        max: 1
      }
    }],
    "vue/multi-word-component-names": [
      "off",
    ]
  }
};

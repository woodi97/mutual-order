module.exports = {
  plugins: ["react", "react-hooks", "simple-import-sort", "sonarjs"],
  extends: ["plugin:react/recommended", "next", "turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "no-console": "warn",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")]
    }
  }
};

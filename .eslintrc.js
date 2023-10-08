module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next",
    "next/core-web-vitals",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/ban-types": "off",
  },
  ignorePatterns: ["node_modules", ".next", "out", "*.js"],
};

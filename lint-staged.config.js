module.exports = {
  "src/**/*.{js,jsx,ts,tsx,json}": [
    "eslint --fix --max-warnings 0",
    "prettier --write",
  ],
  "src/**/*.{ts,tsx}": () => "tsc --noEmit",
};

module.exports = {
  extends: ["@lad-tech/eslint-config"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "linebreak-style": ["error", "windows"],
  },
};

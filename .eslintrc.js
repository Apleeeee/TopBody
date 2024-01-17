module.exports = {
  extends: ["@lad-tech/eslint-config"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "linebreak-style": ["error", "windows"],
  },
};

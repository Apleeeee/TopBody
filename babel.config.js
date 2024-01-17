module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    plugins: [
      [
        'module-resolver',
        {
          "root": ["./src"],
          "extensions": [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".json"
          ],
          "alias": {
            "shared": "./src/shared",
            "entities": "./src/entities",
            "features": "./src/features",
            "widgets": "./src/widgets",
            "pages": "./src/pages",
            "processes": "./src/processes",
            "app": "./src/app",
          }
        },
      ],
    ]
  }
}

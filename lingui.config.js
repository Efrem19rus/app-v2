module.exports = {
  catalogs: [
    {
      path: "<rootDir>/src/translations/locales/{locale}/messages",
      include: ["<rootDir>/src/"],
      exclude: ["**/node_modules/**"],
    },
  ],
  compileNamespace: "cjs",
  fallbackLocales: {
    default: "en-US",
  },
  format: "po",
  locales: ["en", "sr", "es", "pseudo"],
  orderBy: "messageId",
  pseudoLocale: "pseudo",
  rootDir: ".",
  runtimeConfigModule: ["@lingui/core", "i18n"],
  sourceLocale: "en-US",
};

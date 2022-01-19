module.exports = {
  locales: ["en", "es", "pseudo"],
  pseudoLocale: "pseudo",
  sourceLocale: "en",
  fallbackLocales: {
    default: "en",
  },
  catalogs: [
    {
      path: "<rootDir>/src/translations/locales/{locale}/messages",
      include: ["<rootDir>/src/"],
    },
  ],
  format: "po",
  formatOptions: {
    lineNumbers: false,
  },
  orderBy: "messageId",
  rootDir: ".",
  runtimeConfigModule: ["@lingui/core", "i18n"],
};

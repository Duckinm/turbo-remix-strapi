module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  sitemap: {
    enabled: true,
    config: {
      autoGenerate: true,
      allowedFields: ["id", "uid"],
      excludedTypes: [],
    },
  },
  navigation: {
    enabled: true,
  },
  "rest-cache": {
    config: {
      provider: {
        name: "memory",
        options: {
          max: 32767,
          maxAge: 3600,
        },
      },
      strategy: {
        contentTypes: [
          // list of Content-Types UID to cache
          "api::global.global",
          "api::page.page",
          "api::dynamic-richtext.dynamic-richtext",
          "plugin::navigation.navigation",
          "plugin::navigation.navigation-item",
          "plugin::navigation.navigations-items-related",
        ],
      },
    },
  },
});

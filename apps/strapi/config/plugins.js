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
  redis: {
    config: {
      connections: {
        default: {
          connection: {
            host: "127.0.0.1",
            port: 6379,
            db: 0,
          },
          settings: {
            debug: false,
          },
        },
      },
    },
  },
  "rest-cache": {
    config: {
      provider: {
        name: "redis",
        options: {
          max: 32767,
          connection: "default",
        },
      },
      strategy: {
        debug: true,
        enableEtag: true,
        enableXCacheHeaders: true,
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

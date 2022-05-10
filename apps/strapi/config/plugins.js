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

  redis: {
    config: {
      connections: {
        default: {
          connection: {
            host: env("REDIS_host", "127.0.0.1"),
            port: env.int("REDIS_PORT", 6379),
          },
          settings: {
            debug: true,
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
        ],
      },
    },
  },
});

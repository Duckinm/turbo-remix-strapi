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
        debug: true,
        enableXCacheHeaders: true,
        enableEtag: true,
        contentTypes: [
          // list of Content-Types UID to cache
          //  "api::category.category",
          //  "api::article.article",
          // "api::global.global",
          // "api::homepage.homepage",
        ],
      },
    },
  },
});

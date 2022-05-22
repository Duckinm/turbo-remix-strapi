module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  menus: {
    enabled: true,
    config: {
      maxDepth: 3,
    },
  },
  sitemap: {
    enabled: true,
    config: {
      autoGenerate: true,
      allowedFields: ["id", "uid"],
      excludedTypes: [],
    },
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 15,
      amountLimit: 100,
      apolloServer: {
        tracing: true,
      },
    },
  },
});

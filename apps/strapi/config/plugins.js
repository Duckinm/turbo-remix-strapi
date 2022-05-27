module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  upload: {
    config: {
      provider: "strapi-provider-upload-cloudflare",
      providerOptions: {
        accountId: env("STRAPI_UPLOAD_CLOUDFLARE_ACCOUNT_ID"),
        apiKey: env("STRAPI_UPLOAD_CLOUDFLARE_API_KEY"),
      },
    },
  },
});

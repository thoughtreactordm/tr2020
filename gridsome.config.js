module.exports = {
  siteName: "Thought Reactor",
  siteUrl: "https://thought-reactor.net",
  plugins: [
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-47036341-4"
      }
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000 // default
      }
    },
    {
      use: "gridsome-plugin-tailwindcss"
    }
  ]
};

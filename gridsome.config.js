module.exports = {
  siteName: "Thought Reactor",
  siteUrl: "https://thought-reactor.net",
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: [
        // ...global plugins
      ],
    },
  },
  plugins: [
    {
      use: "gridsome-plugin-netlify-cms",
      options: {
        publicPath: "/admin",
      },
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-47036341-4",
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000, // default
      },
    },
    {
      use: "gridsome-plugin-tailwindcss",
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "posts/**/*.md",
        typeName: "Post",
        remark: {
          plugins: [
            // ...local plugins
          ],
        },
      },
    },
  ],
};

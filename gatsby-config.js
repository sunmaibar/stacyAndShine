require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
// const queries = require("./src/constants/algolia")
module.exports = {
  siteMetadata: {
    title: `從心生活坊`,
    description: `從心工作坊，心靈空間，心靈啟發，親子活動學習，瑜珈教室，芳香山林森息精油，空間利用，教室利用，希塔療癒，定期舉辦不同課程，新北市三重區重新路四段242號。 `,
    author: `@jimmy_liao`,
    keywords: `精油,芳療,瑜珈,希塔療癒,空間場地,三重重新路四段,親子學習,共學,讀書會,心靈成長,stacyandshine,從心生活坊`,
    titleTemplate: `%s | 心靈成長空間`,
    siteUrl: `https://www.stacyandshine.com/`,
    url: `https://www.stacyandshine.com/`,
    image: `mainBcg.png`,
    twitterUsername: `@john_doe`,
    favicon: `./static/favicon.ico`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.stacyandshine.com',
        sitemap: 'https://www.stacyandshine.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-social-cards`,
    `gatsby-plugin-preload-fonts`,

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-160345609-2',

        head: true,

        anonymize: true,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Roboto`,
    //         variants: [`400`, `500`, `700`],
    //       },
    //       {
    //         family: `Open Sans`,
    //       },
    //       {
    //         family: `Caveat`,
    //       },
    //     ],
    //     display: 'swap',
    //   },
    // },

    // {
    //   resolve: `gatsby-plugin-webfonts`,
    //   options: {
    //     fonts: {
    //       google: [
    //         {
    //           family: `Roboto`,
    //           variants: [`400`, `500`, `700`],
    //         },
    //         {
    //           family: `Open Sans`,
    //         },
    //         {
    //           family: `Caveat`,
    //         },
    //       ],
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `500`, `700`],
          },
          {
            family: `Open Sans`,
          },
          {
            family: `Caveat`,
          },
        ],
        display: 'swap',
      },
    },

    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `Projects`,
            mapping: { image: `fileNode` },
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `Customers`,
            mapping: { image: `fileNode` },
          },
        ],
      },
    },
  ],
}

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})
// const queries = require("./src/constants/algolia")
module.exports = {
  siteMetadata: {
    title: `從心生活坊`,
    description: `新北市三重區重新路四段242號，從心工作坊，心靈空間，心靈啟發，親子活動學習，瑜珈教室，芳香山林森息精油，空間利用，教室利用，希塔療癒，定期舉辦不同課程。 `,
    author: `@jimmy_liao`,
    titleTemplate: `%s | 心靈成長空間`,
    url: `https://www.stacyandshine.com`,
    image: `mainBcg.png`,
    twitterUsername: `@john_doe`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `500`, `700`]
          },
          {
            family: `Open Sans`
          },
          {
            family: `Caveat`
          }
        ]
      }
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
            mapping: { image: `fileNode` }
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `Customers`,
            mapping: { image: `fileNode` }
          }
        ]
      }
    }
  ]
}

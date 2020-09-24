import React from "react"
import { graphql } from "gatsby"
import { Layout, Hero, About, Projects, Survey, Slider, GridProjects } from "../components"
import SEO from "../components/seo"
const HomePage = ({ data }) => {
  const {
    allAirtable: { nodes: projects }
  } = data
  return (
    <Layout>
      <SEO title="從心坊間" description="心靈啟發，瑜珈伸展，讀書會，空間出租，愛分享" />
      <Hero projects={projects} />
      <About />
      <Projects title="最新活動" projects={projects} />
      <Survey />
      <Slider />
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "Projects" } }, sort: { fields: data___date, order: DESC }, limit: 3) {
      nodes {
        id
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default HomePage

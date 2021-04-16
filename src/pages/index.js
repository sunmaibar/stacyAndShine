import React from 'react'
import { graphql } from 'gatsby'
import {
  Layout,
  Hero,
  About,
  Projects,
  Survey,
  Slider,
  GridProjects,
} from '../components'
import SEO from '../components/seo'
const HomePage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
  } = data
  return (
    <Layout>
      <SEO
        title='從心生活坊'
        description='新北市三重區空間出租，適合辦生日party
租借場地慶生，抓週各種活動
瑜伽（寶寶，親子，大人），精油芳療
希塔開課
療癒
天使解讀
塔羅
命理紫微
親子座談會
品酒會
水晶解讀，脈輪開通'
      />
      <Hero projects={projects} />
      <About />
      <Projects title='最新活動' projects={projects} />
      <Survey />
      <Slider />
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      sort: { fields: data___date, order: DESC }
      limit: 3
    ) {
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

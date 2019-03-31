import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioPage = ({location}) => (
  <StaticQuery
    query={graphql`
      query PortfolioItemQuery {
        allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
          edges {
            node {
              excerpt
              id
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                path
                image
              }
            }
          }
        }
      }      
    `}
    render={data => (
      <>
        <Layout>
          <SEO title="Portfolio Item" keywords={[`gatsby`, `application`, `react`]} />
          {location.state.path}
          {
            data.allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id}>
                <h1>{node.frontmatter.title}</h1>
                {location.state.path}
              </div>
            )).filter(item => {
              return item.props.children[1] !== location.state.path;
            })
          }
        </Layout>
      </>
    )}
  />
)

export default PortfolioPage

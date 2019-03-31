import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query PortfolioQuery {
        allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
          edges {
            node {
              excerpt(pruneLength: 250)
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
          <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />
          <section className="portfolio-section section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-sm-4">
                  <div className="heading">
                    <h3><b>Portfolio</b></h3>
                    <h6 className="font-lite-black"><b>MY WORK</b></h6>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="portfolioContainer">
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <div className="p-item web-design" key={node.id}>
                  <Link to="/portfolio/" state={{ path: node.frontmatter.path }}>
                    <img src={node.frontmatter.image} alt="" />
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </Layout>
      </>
    )}
  />
)

export default IndexPage

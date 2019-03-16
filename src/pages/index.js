import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <StaticQuery
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
              <div className="p-item web-design">
                <a href="{data.markdownRemark.frontmatter.image}" data-fluidbox>
                  <img src="{data.markdownRemark.frontmatter.image}" alt="" />
                </a>
              </div>
            </div>
          </section>
          <Link to="/page-2/">Go to page 2</Link>
        </Layout>
      </>
    )}
  />
)

export default IndexPage

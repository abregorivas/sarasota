import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Family from "../components/Family/Family"
import Mission from "../components/Mission/Mission"
import Visit from "../components/Visit/Visit"

const IndexPage = () => (
  <Layout>
    <SEO title="Sarasota Christian Fellowship" />
    <Family />
    <Mission />
    <Visit />
  </Layout>
)

export default IndexPage

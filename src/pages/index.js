import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Family from "../components/Family/Family"
import Mission from "../components/Mission/Mission"

const IndexPage = () => (
  <Layout>
    <SEO title="Sarasota Christian Fellowship" />
    <Family />
    <Mission />
  </Layout>
)

export default IndexPage

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Family from "../components/Family/Family"
import Mission from "../components/Mission/Mission"
import Visit from "../components/Visit/Visit"
import Internship from "../components/Internship/Internship"
import Contact from "../components/Contact/Contact"
import Sermon from "../components/Sermons/Sermons"
import Hero from "../components/Hero/Hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Sarasota Christian Fellowship" />
    <Hero />
    <Family />
    <Mission />
    <Visit />
    <Sermon />
    <Internship />
    <Contact />
  </Layout>
)

export default IndexPage

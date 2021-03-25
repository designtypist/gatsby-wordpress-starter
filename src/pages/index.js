import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
//import SEO from "../components/seo"

export default function Home({ data }) {
  return (
    <Layout>
      <h1>DesignTypist Portfolio</h1>
      <h4>Happily Building for a Heathier Future</h4>
    </Layout>
  )
}

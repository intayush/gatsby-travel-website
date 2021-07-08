import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>VMH</title>
    </Helmet>
    <Layout>
      <Seo title="Home" />
    </Layout>
  </>
)

export default IndexPage

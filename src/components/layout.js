import React from "react"
import { Helmet } from "react-helmet"
import { GlobalStyle } from "../components/styles/GlobalStyles"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>VMH</title>
      </Helmet>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout

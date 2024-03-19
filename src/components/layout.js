import React, { useState } from "react"
import "@fontsource/sacramento"
import "@fontsource/enriqueta"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../components/styles/GlobalStyles"
import { lightTheme, darkTheme } from "../components/styles/theme"
import Header from "./header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>VMH</title>
      </Helmet>
      <GlobalStyle />
      <Header currentTheme={theme} />
      {children}
      <Footer themeChangeHandler={toggleTheme} />
    </ThemeProvider>
  )
}

export default Layout

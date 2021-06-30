import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 10px;
  height: 8px;
}

::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #edf2f7;
}

::-webkit-scrollbar-thumb {
  background: #C6C6C6;
  border-radius: 100vh;
  border: 1px solid #edf2f7;
}

::-webkit-scrollbar-thumb:hover {
  background: #bdbdbd;
}

.carousel .thumb img {
    width: 100% !important;
    height: 100% !important;
}

.carousel .slide img {
    min-width: 100vw;
    min-height: 100vh;  /* change this to whatever you want */
}
`

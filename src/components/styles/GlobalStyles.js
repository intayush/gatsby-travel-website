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
    overflow-x: hidden;
}

body{
  background: ${({ theme }) => theme.background.primary}
}


/*Helper classes*/
#testimonials{
  overflow: hidden;
}

/*style for intersenction ref element*/
.intersection {
  width: 100vw;
  height: 5vh;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/*Plane loader style */
.svg-calLoader {
  width: 160px; height: 160px;
 transform-origin: 115px 115px;
 animation: 1.4s linear infinite loader-spin;
}

.cal-loader__plane { fill: #FFA500; }
.cal-loader__path { stroke: #FFFFFF; animation: 1.4s ease-in-out infinite loader-path; }

@keyframes loader-spin {
 to{
   transform: rotate(360deg);
 }
}
@keyframes loader-path {
 0%{
   stroke-dasharray:  0, 580, 0, 0, 0, 0, 0, 0, 0;
 }
 50%{
   stroke-dasharray: 0, 450, 10, 30, 10, 30, 10, 30, 10;
 }
 100%{
   stroke-dasharray: 0, 580, 0, 0, 0, 0, 0, 0, 0;
 }
}


/*scrollbar style*/
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
`

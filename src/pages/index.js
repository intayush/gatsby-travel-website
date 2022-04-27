import React, { useRef, useEffect } from "react"
import Loadable from "react-loadable"
import styled from "styled-components"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import Section from "../components/generic/Section"
import Button from "../components/generic/Button"
import useInView from "../hooks/useInView"

const Loading = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`
const LoadableNationalTrips = Loadable({
  loader: () => import("../components/sections/TrendingDestiations"),
  loading: Loading,
})

const LoadableInterNationalTrips = Loadable({
  loader: () => import("../components/sections/InternationalTrips"),
  loading: Loading,
})

const LoadableTestimonials = Loadable({
  loader: () => import("../components/Testimonials"),
  loading: Loading,
})

const LoadableEmailSection = Loadable({
  loader: () => import("../components/Email"),
  loading: Loading,
})

const IndexPage = () => {
  const internationalTripsRef = useRef(null)
  const testimonialsRef = useRef(null)
  const emailSectionRef = useRef(null)
  const isInternationalTripsAboutToBeVisible = useInView(internationalTripsRef)
  const isTestimonialsAboutToBeVisible = useInView(testimonialsRef)
  //const isEmailSectionAboutToBeVisible = useInView(emailSectionRef)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get("submit")) {
      toast(
        "Your response has been recorded our team will reach out to you shortly",
        {
          type: "success",
        }
      )
    }
  }, [])

  return (
    <Layout>
      <Seo title="Home" />
      <ToastContainer position="top-right" />
      <Content>
        <Button
          onClick={() => {
            window.location.href = "#hero"
          }}
          round="true"
          css={`
            position: fixed;
            bottom: 3vh;
            right: 2vw;
            z-index: 50;
          `}
        >
          Scroll To Top
        </Button>
        <Section id="hero">
          <Hero />
        </Section>
        <Section id="trips">
          <LoadableNationalTrips />
        </Section>
        <div ref={internationalTripsRef} className="intersection">
          {/* {!isInternationalTripsAboutToBeVisible && (
            <svg
              className="svg-calLoader"
              xmlns="http://www.w3.org/2000/svg"
              width="230"
              height="230"
            >
              <path
                className="cal-loader__path"
                d="M86.429 40c63.616-20.04 101.511 25.08 107.265 61.93 6.487 41.54-18.593 76.99-50.6 87.643-59.46 19.791-101.262-23.577-107.142-62.616C29.398 83.441 59.945 48.343 86.43 40z"
                fill="none"
                stroke="#0099cc"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="10 10 10 10 10 10 10 432"
                strokeDashoffset="77"
              />
              <path
                className="cal-loader__plane"
                d="M141.493 37.93c-1.087-.927-2.942-2.002-4.32-2.501-2.259-.824-3.252-.955-9.293-1.172-4.017-.146-5.197-.23-5.47-.37-.766-.407-1.526-1.448-7.114-9.773-4.8-7.145-5.344-7.914-6.327-8.976-1.214-1.306-1.396-1.378-3.79-1.473-1.036-.04-2-.043-2.153-.002-.353.1-.87.586-1 .952-.139.399-.076.71.431 2.22.241.72 1.029 3.386 1.742 5.918 1.644 5.844 2.378 8.343 2.863 9.705.206.601.33 1.1.275 1.125-.24.097-10.56 1.066-11.014 1.032a3.532 3.532 0 0 1-1.002-.276l-.487-.246-2.044-2.613c-2.234-2.87-2.228-2.864-3.35-3.309-.717-.287-2.82-.386-3.276-.163-.457.237-.727.644-.737 1.152-.018.39.167.805 1.916 4.373 1.06 2.166 1.964 4.083 1.998 4.27.04.179.004.521-.076.75-.093.228-1.109 2.064-2.269 4.088-1.921 3.34-2.11 3.711-2.123 4.107-.008.25.061.557.168.725.328.512.72.644 1.966.676 1.32.029 2.352-.236 3.05-.762.222-.171 1.275-1.313 2.412-2.611 1.918-2.185 2.048-2.32 2.45-2.505.241-.111.601-.232.82-.271.267-.058 2.213.201 5.912.8 3.036.48 5.525.894 5.518.914 0 .026-.121.306-.27.638-.54 1.198-1.515 3.842-3.35 9.021-1.029 2.913-2.107 5.897-2.4 6.62-.703 1.748-.725 1.833-.594 2.286.137.46.45.833.872 1.012.41.177 3.823.24 4.37.085.852-.25 1.44-.688 2.312-1.724 1.166-1.39 3.169-3.948 6.771-8.661 5.8-7.583 6.561-8.49 7.387-8.702.233-.065 2.828-.056 5.784.011 5.827.138 6.64.09 8.62-.5 2.24-.67 4.035-1.65 5.517-3.016 1.136-1.054 1.135-1.014.207-1.962-.357-.38-.767-.777-.902-.893z"
                fill="#000033"
              />
            </svg>
          )} */}
        </div>
        <Section id="carousel">
          <LoadableInterNationalTrips />
        </Section>
        <div ref={emailSectionRef} className="intersection">
          {/* {!isEmailSectionAboutToBeVisible && (
            <svg
              className="svg-calLoader"
              xmlns="http://www.w3.org/2000/svg"
              width="230"
              height="230"
            >
              <path
                className="cal-loader__path"
                d="M86.429 40c63.616-20.04 101.511 25.08 107.265 61.93 6.487 41.54-18.593 76.99-50.6 87.643-59.46 19.791-101.262-23.577-107.142-62.616C29.398 83.441 59.945 48.343 86.43 40z"
                fill="none"
                stroke="#0099cc"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="10 10 10 10 10 10 10 432"
                strokeDashoffset="77"
              />
              <path
                className="cal-loader__plane"
                d="M141.493 37.93c-1.087-.927-2.942-2.002-4.32-2.501-2.259-.824-3.252-.955-9.293-1.172-4.017-.146-5.197-.23-5.47-.37-.766-.407-1.526-1.448-7.114-9.773-4.8-7.145-5.344-7.914-6.327-8.976-1.214-1.306-1.396-1.378-3.79-1.473-1.036-.04-2-.043-2.153-.002-.353.1-.87.586-1 .952-.139.399-.076.71.431 2.22.241.72 1.029 3.386 1.742 5.918 1.644 5.844 2.378 8.343 2.863 9.705.206.601.33 1.1.275 1.125-.24.097-10.56 1.066-11.014 1.032a3.532 3.532 0 0 1-1.002-.276l-.487-.246-2.044-2.613c-2.234-2.87-2.228-2.864-3.35-3.309-.717-.287-2.82-.386-3.276-.163-.457.237-.727.644-.737 1.152-.018.39.167.805 1.916 4.373 1.06 2.166 1.964 4.083 1.998 4.27.04.179.004.521-.076.75-.093.228-1.109 2.064-2.269 4.088-1.921 3.34-2.11 3.711-2.123 4.107-.008.25.061.557.168.725.328.512.72.644 1.966.676 1.32.029 2.352-.236 3.05-.762.222-.171 1.275-1.313 2.412-2.611 1.918-2.185 2.048-2.32 2.45-2.505.241-.111.601-.232.82-.271.267-.058 2.213.201 5.912.8 3.036.48 5.525.894 5.518.914 0 .026-.121.306-.27.638-.54 1.198-1.515 3.842-3.35 9.021-1.029 2.913-2.107 5.897-2.4 6.62-.703 1.748-.725 1.833-.594 2.286.137.46.45.833.872 1.012.41.177 3.823.24 4.37.085.852-.25 1.44-.688 2.312-1.724 1.166-1.39 3.169-3.948 6.771-8.661 5.8-7.583 6.561-8.49 7.387-8.702.233-.065 2.828-.056 5.784.011 5.827.138 6.64.09 8.62-.5 2.24-.67 4.035-1.65 5.517-3.016 1.136-1.054 1.135-1.014.207-1.962-.357-.38-.767-.777-.902-.893z"
                fill="#000033"
              />
            </svg>
          )} */}
        </div>
        <Section id="emailSection">
          <LoadableEmailSection />
        </Section>
        <div ref={testimonialsRef} className="intersection">
          {!isTestimonialsAboutToBeVisible && (
            <svg
              className="svg-calLoader"
              xmlns="http://www.w3.org/2000/svg"
              width="230"
              height="230"
            >
              <path
                className="cal-loader__path"
                d="M86.429 40c63.616-20.04 101.511 25.08 107.265 61.93 6.487 41.54-18.593 76.99-50.6 87.643-59.46 19.791-101.262-23.577-107.142-62.616C29.398 83.441 59.945 48.343 86.43 40z"
                fill="none"
                stroke="#0099cc"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="10 10 10 10 10 10 10 432"
                strokeDashoffset="77"
              />
              <path
                className="cal-loader__plane"
                d="M141.493 37.93c-1.087-.927-2.942-2.002-4.32-2.501-2.259-.824-3.252-.955-9.293-1.172-4.017-.146-5.197-.23-5.47-.37-.766-.407-1.526-1.448-7.114-9.773-4.8-7.145-5.344-7.914-6.327-8.976-1.214-1.306-1.396-1.378-3.79-1.473-1.036-.04-2-.043-2.153-.002-.353.1-.87.586-1 .952-.139.399-.076.71.431 2.22.241.72 1.029 3.386 1.742 5.918 1.644 5.844 2.378 8.343 2.863 9.705.206.601.33 1.1.275 1.125-.24.097-10.56 1.066-11.014 1.032a3.532 3.532 0 0 1-1.002-.276l-.487-.246-2.044-2.613c-2.234-2.87-2.228-2.864-3.35-3.309-.717-.287-2.82-.386-3.276-.163-.457.237-.727.644-.737 1.152-.018.39.167.805 1.916 4.373 1.06 2.166 1.964 4.083 1.998 4.27.04.179.004.521-.076.75-.093.228-1.109 2.064-2.269 4.088-1.921 3.34-2.11 3.711-2.123 4.107-.008.25.061.557.168.725.328.512.72.644 1.966.676 1.32.029 2.352-.236 3.05-.762.222-.171 1.275-1.313 2.412-2.611 1.918-2.185 2.048-2.32 2.45-2.505.241-.111.601-.232.82-.271.267-.058 2.213.201 5.912.8 3.036.48 5.525.894 5.518.914 0 .026-.121.306-.27.638-.54 1.198-1.515 3.842-3.35 9.021-1.029 2.913-2.107 5.897-2.4 6.62-.703 1.748-.725 1.833-.594 2.286.137.46.45.833.872 1.012.41.177 3.823.24 4.37.085.852-.25 1.44-.688 2.312-1.724 1.166-1.39 3.169-3.948 6.771-8.661 5.8-7.583 6.561-8.49 7.387-8.702.233-.065 2.828-.056 5.784.011 5.827.138 6.64.09 8.62-.5 2.24-.67 4.035-1.65 5.517-3.016 1.136-1.054 1.135-1.014.207-1.962-.357-.38-.767-.777-.902-.893z"
                fill="#000033"
              />
            </svg>
          )}
        </div>
        <Section id="testimonials">
          {isTestimonialsAboutToBeVisible && <LoadableTestimonials />}
        </Section>
        <Section id="footer"></Section>
      </Content>
    </Layout>
  )
}

const Content = styled.div``

export default IndexPage

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Gallery from "../Gallery"

const TrendingDestinations = () => {
  const data = useStaticQuery(graphql`
    query TripsQuery {
      allTripsJson {
        edges {
          node {
            name
            route
            alt
            img {
              childrenImageSharp {
                # gatsbyImageData(
                #   placeholder: BLURRED
                #   layout: FULL_WIDTH
                #   quality: 85
                # )
                gatsbyImageData(height: 500, placeholder: BLURRED, quality: 90)
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Gallery
      title="Trending National Destinations"
      data={data.allTripsJson.edges}
    />
  )
}

export default TrendingDestinations

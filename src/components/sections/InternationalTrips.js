import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Gallery from "../Gallery"

const InternationalTrips = () => {
  const data = useStaticQuery(graphql`
    query InternationalTripsQuery {
      allInternationalTripsJson {
        edges {
          node {
            name
            alt
            img {
              childrenImageSharp {
                # gatsbyImageData(
                #   placeholder: BLURRED
                #   layout: CONSTRAINED
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
      title="International Trips"
      data={data.allInternationalTripsJson.edges}
    />
  )
}

export default InternationalTrips

const path = require("path")
const data = require("./src/data/destinations.json")

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allDestinationsJson {
        edges {
          node {
            route
          }
        }
      }
    }
  `)
  data.allDestinationsJson.edges.forEach(edge => {
    const slug = edge.node.route
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/pages/trip.js`),
      context: { slug: slug },
    })
  })
}

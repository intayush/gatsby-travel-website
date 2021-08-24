exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allDestinationsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.allDestinationsJson.edges.forEach(edge => {
    const slug = edge.node.slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/pages/trip.js`),
      context: { slug: slug },
    })
  })
}

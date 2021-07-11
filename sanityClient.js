const sanityClient = require('@sanity/client')

module.exports = sanityClient({
  projectId: '6u1qepom', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: false,
})
require('dotenv').config({
  path: `.env`,
})

const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const axios = require('axios')

// Replace ACCESS_TOKEN with your Instagram token
const IG_API_URI = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${
  process.env.IG_ACCESS_TOKEN
}`

const FB_API_URI = `https://graph.facebook.com/v3.2/138617142845339/posts?fields=full_picture,permalink_url,updated_time,message,type&limit=10&access_token=${
  process.env.FB_ACCESS_TOKEN
}`

const _retrieveFacebook = async ({ actions, store, cache, createNodeId }) => {
  const { createNode, createNodeField } = actions

  // Fetch data
  const { data } = await axios.get(FB_API_URI)

  // use for loop for async/await support
  for (const post of data.data) {
    let fileNode
    try {
      fileNode = await createRemoteFileNode({
        url: post.full_picture,
        cache,
        store,
        createNode,
        createNodeId,
        ext: '.jpg',
      })
      await createNodeField({
        node: fileNode,
        name: 'FacebookImage',
        value: 'true',
      })
      await createNodeField({
        node: fileNode,
        name: 'SocialMedia',
        value: 'true',
      })
      await createNodeField({
        node: fileNode,
        name: 'link',
        value: post.permalink_url,
      })
      await createNodeField({
        node: fileNode,
        name: 'type',
        value: post.type,
      })
      await createNodeField({
        node: fileNode,
        name: 'created',
        value: post.updated_time,
      })
      await createNodeField({
        node: fileNode,
        name: 'caption',
        value: post.message,
      })
    } catch (error) {
      console.warn('Error creating facebook node', error)
    }
  }
}

const _retrieveInstagram = async ({ actions, store, cache, createNodeId }) => {
  const { createNode, createNodeField } = actions

  // Fetch data
  const { data } = await axios.get(IG_API_URI)

  // use for loop for async/await support
  for (const image of data.data) {
    let fileNode
    try {
      fileNode = await createRemoteFileNode({
        url: image.images.standard_resolution.url,
        cache,
        store,
        createNode,
        createNodeId,
        ext: '.jpg',
      })
      await createNodeField({
        node: fileNode,
        name: 'InstagramImage',
        value: 'true',
      })
      await createNodeField({
        node: fileNode,
        name: 'SocialMedia',
        value: 'true',
      })
      await createNodeField({
        node: fileNode,
        name: 'link',
        value: image.link,
      })
      await createNodeField({
        node: fileNode,
        name: 'created',
        value: image.created_time,
      })
      await createNodeField({
        node: fileNode,
        name: 'type',
        value: 'post',
      })
      await createNodeField({
        node: fileNode,
        name: 'caption',
        value: image.caption.text,
      })
      await createNodeField({
        node: fileNode,
        name: 'likes',
        value: image.likes.count,
      })
    } catch (error) {
      console.warn('error creating node', error)
    }
  }
}

exports.sourceNodes = async ({ actions, store, cache, createNodeId }) => {
  _retrieveInstagram({ actions, store, cache, createNodeId })
  _retrieveFacebook({ actions, store, cache, createNodeId })
}

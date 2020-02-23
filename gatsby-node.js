const path = require("path")

const createPostPage = (post, createPage) => {
    const {relativeDirectory} = post

    createPage({
        path: `/blog/${relativeDirectory}`,
        component: path.resolve("./src/templates/post.js"),
        context: {slug: relativeDirectory},
    })
}

const createPages = async ({graphql, actions}) => {
    const {createPage} = actions

    const response = await graphql(`
        {
            allFile(filter: {sourceInstanceName: {eq: "posts"}}) {
                nodes {
                    relativeDirectory
                }
            }
        }
    `)

    const posts = response.data.allFile.nodes
    posts.map(post => createPostPage(post, createPage))
}

module.exports = {
    createPages,
}

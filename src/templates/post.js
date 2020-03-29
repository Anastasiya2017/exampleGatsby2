import React from "react"
import Img from "gatsby-image"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import Post from "../styles/Post"
import {SEO} from "../components/SEO"
import PostBody from "../styles/PostBody"
import Container from "../styles/Container"
import PostMeta from "../components/Posts/PostMeta"

const Image = styled(Img)`
    display: block;
    width: 100%;
    max-height: 50vh;
    object-fit: cover;
    border-radius: 0.25rem;
`

const PostTemplate = ({data}) => {
    const post = data.markdownRemark
    const {html, frontmatter} = post
    const {title} = frontmatter
    const {fluid} = frontmatter.image.childImageSharp
    const image = frontmatter.image.publicURL

    return (
        <Container>
            <SEO title={title} image={image} />

            <Post>
                <Image fluid={fluid} />
                <PostMeta post={post} />
                <PostBody dangerouslySetInnerHTML={{__html: html}} />
            </Post>
        </Container>
    )
}

PostTemplate.propTypes = {
    data: PropTypes.object.isRequired,
}

const query = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                slug
                title
                date(formatString: "MMMM D, YYYY")
                tags
                image {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 700) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

export default PostTemplate
export {query}

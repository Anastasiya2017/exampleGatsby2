import React from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import SEO from "@bradgarropy/gatsby-plugin-seo"
import Tag from "../styles/Tag"
import Container from "../styles/Container"
import Posts from "../components/Posts/Posts"

const StyledTagTemplate = styled.div`
    display: grid;
    gap: 2rem;
`

const TagTitle = styled.h1`
    display: grid;
    align-items: end;
    grid-template-columns: repeat(2, auto);
    justify-content: start;
    column-gap: 0.6rem;
`

const TagTemplate = ({data, pageContext}) => {
    const {tag} = pageContext
    const posts = data.allMdx.nodes

    return (
        <Container centered>
            <SEO title={`Tag | ${tag}`} />

            <StyledTagTemplate>
                <TagTitle>
                    <span>Tag |</span>
                    <Tag to={`/tags/${tag}`} size="L">
                        {tag}
                    </Tag>
                </TagTitle>
                <Posts posts={posts} />
            </StyledTagTemplate>
        </Container>
    )
}

TagTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    pageContext: PropTypes.object.isRequired,
}

const query = graphql`
    query($tag: [String]!) {
        allMdx(
            filter: {frontmatter: {tags: {in: $tag}}}
            sort: {fields: frontmatter___date, order: DESC}
        ) {
            nodes {
                frontmatter {
                    slug
                    title
                    date(formatString: "MMMM D, YYYY")
                    tags
                    image {
                        childImageSharp {
                            fluid(maxWidth: 700) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    }
`

export default TagTemplate
export {query}

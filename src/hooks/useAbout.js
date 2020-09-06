import {useStaticQuery, graphql} from "gatsby"

const useAbout = () => {
    const query = graphql`
        {
            allMdx(
                filter: {fileAbsolutePath: {regex: "/content/pages/about/"}}
                sort: {fields: fileAbsolutePath, order: ASC}
            ) {
                nodes {
                    body
                    frontmatter {
                        title
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

    const data = useStaticQuery(query)
    const about = data.allMdx.nodes

    return about
}

export default useAbout

import {useStaticQuery, graphql} from "gatsby"

const useStore = () => {
    const query = graphql`
        {
            mdx(fileAbsolutePath: {regex: "/content/pages/store/"}) {
                body
                frontmatter {
                    image {
                        childImageSharp {
                            fluid(maxWidth: 600) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    `

    const data = useStaticQuery(query)
    const store = data.mdx

    return store
}

export default useStore

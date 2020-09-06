import {useStaticQuery, graphql} from "gatsby"

const useTags = ({limit = 0} = {}) => {
    const query = graphql`
        {
            allMdx(
                filter: {fileAbsolutePath: {regex: "/content/posts/"}}
                sort: {fields: frontmatter___date, order: DESC}
            ) {
                group(field: frontmatter___tags) {
                    fieldValue
                }
            }
        }
    `

    const data = useStaticQuery(query)

    let tags = data.allMdx.group.map(member => member.fieldValue)

    if (limit) {
        tags = tags.slice(0, limit)
    }

    return tags
}

export default useTags

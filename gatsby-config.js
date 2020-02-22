require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        siteUrl: "https://dailytexascountry.com",
        title: "DTXC",
        description: "🤠 daily texas country",
        keywords: ["gatsby", "react", "scss", "eslint"],
        email: "bradgarropy@gmail.com",
        twitter: "dailytxcountry",
        youtube: "UCpbIlFaiv-3188nAWtgL0Iw",
        instagram: "dailytexascountry",
    },
    plugins: [
        {
            resolve: "gatsby-plugin-react-helmet",
        },
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: process.env.TRACKING_ID,
                head: true,
                anonymize: true,
                respectDNT: false,
            },
        },
        {
            resolve: "gatsby-plugin-google-fonts",
            options: {
                fonts: ["roboto"],
            },
        },
        {
            resolve: "gatsby-plugin-styled-components",
        },
        {
            resolve: "gatsby-plugin-layout",
            options: {
                component: require.resolve("./src/components/Layout.js"),
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /svg/,
                },
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "posts",
                path: "content/posts",
            },
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 700,
                        },
                    },
                    {
                        resolve: "gatsby-remark-autolink-headers",
                        options: {
                            maintainCase: false,
                            removeAccents: true,
                        },
                    },
                    {
                        resolve: "gatsby-remark-embedder",
                    },
                    {
                        resolve: "gatsby-remark-external-links",
                        options: {
                            rel: "noopener noreferrer",
                        },
                    },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-twitter",
        },
        {
            resolve: "gatsby-plugin-instagram-embed",
        },
        {
            resolve: "gatsby-plugin-sharp",
        },
        {
            resolve: "gatsby-transformer-sharp",
        },
    ],
}

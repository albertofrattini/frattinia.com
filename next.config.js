const readingTime = require('reading-time')
const mdxPrism = require('mdx-prism')
const withMdxEnhanced = require('next-mdx-enhanced')

module.exports = withMdxEnhanced({
    layoutPath: 'templates',
    defaultLayout: true,
    remarkPlugins: [require('remark-code-titles')],
    // rehypePlugins: [mdxPrism],
    extendFrontMatter: {
        process: (mdxContent) => ({
            wordCount: mdxContent.split(/\s+/gu).length,
            readingTime: readingTime(mdxContent),
        }),
    },
})({
    webpack: (config, { isServer }) => {
        if (isServer) {
            require('./scripts/generate-sitemap')
        }

        return config
    },
    images: {
        domains: ['i.scdn.co'],
    },
})

module.exports = {
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-transformer-json',
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
              path: `${__dirname}/src/configuration/site.json`,
              name: 'config'
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
              path: `${__dirname}/src/content`,
              name: 'content'
            },
        },
        {
            resolve: 'gatsby-plugin-typography',
            options: {
              pathToConfigModule: 'src/utils/typography.js',
            },
        },
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`,
            },
        }
    ]
}
module.exports = {
    plugins: [
        'gatsby-transformer-json',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
              path: `${__dirname}/src/configuration/site.json`,
              name: 'config'
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
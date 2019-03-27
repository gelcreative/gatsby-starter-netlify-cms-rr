module.exports = {
  siteMetadata: {
    title: 'RetireRite Financial Strategies Inc.',
    description: 'We provide transparency, value & the highest quality customer service while working with you to build a comprehensive financial plan. We serve clients in Simcoe County and the GTA.',
    keywords: 'financial advisor,certified financial planner,mutual funds,segregated funds,life insurance,group benefits,employee benefits,group retirement,retirement savings,retirement income,critical illness insurance,disability insurance,mortgage,RRSP,TFSA,RESP,RRIF ,LIRA,LIF,Pension,Sunlife,Manulife,Great West Life,Estate Planning,Tax Planning,Business Insurance',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/employees`,
        name: 'employees',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            }
          }
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-16552311-32`,
      },
    },
    {
      resolve:'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true,            // Activates purging in npm run develop
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-leaflet',
    {
      resolve: `remove-empty-fields`,
      options: {
        fieldsToRemove: [
          'image',
        ],
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}

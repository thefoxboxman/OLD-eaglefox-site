//disable dotenv 
//require("dotenv").config({
//	path: `.env.${process.env.NODE_ENV}`,
//})

module.exports = {
  siteMetadata: {
    title: `Eaglefox`,
    description: `Web marketing consultants`,
    author: `john de costa`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages`,
			},
		},
	
    `gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-remark`,
		/* removed contentful access tokens related to gatsby-cafe project
    {
      resolve: `gatsby-source-contentful`,
      options: {
				spaceId: process.env.SPACE_ID,
         Learn about environment variables: https://gatsby.app/env-vars
				accessToken: process.env.ACCESS_TOKEN,
      },
    },*/
		/* disable gatsby-plugin-manifest
		{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },*/
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}

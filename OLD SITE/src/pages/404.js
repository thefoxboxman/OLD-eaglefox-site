import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils/'
import notFoundImg from '../images/bcg/404Bcg.jpg'


const NotFoundPage = () => (
  <Layout>
    <SEO title="Page Not Found" />
		<PageHeader img={notFoundImg} min-height= "100vh">
			<Banner title='404 Not Found' subtitle='You just hit a route that does not exist... the sadness.' />
		</PageHeader>
    
  </Layout>
)

export default NotFoundPage


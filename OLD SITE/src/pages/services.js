import React from 'react'


import {ServicesList} from '../components/ServicesPageComponents/ServicesList'
import { PageHeader, Banner } from '../utils/'
import servicesImg from '../images/bcg/servicesBcg.jpg'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ServicesPage = () => (
	<Layout>
		<SEO title="Services"  />
		<PageHeader img={servicesImg}>
			<Banner title='services' subtitle='getting it done' />
		</PageHeader>
		<ServicesList />
		
	</Layout>
)

export default ServicesPage
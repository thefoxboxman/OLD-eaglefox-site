import React from 'react'


import AboutSkillsText from '../components/AboutPageComponents/AboutSkillsText'
import { PageHeader, Banner } from '../utils'
import aboutSkillsImg from '../images/bcg/aboutskillsBcg.jpg'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {InternalLink} from '../utils'
const AboutSkillsPage = () => (
	<Layout>
		<SEO title="Skills"  />
		<PageHeader img={aboutSkillsImg}>
			<Banner title='my skills' subtitle='the good oil' />
		</PageHeader>
		<AboutSkillsText />
		<InternalLink linkTo='/about/' linkText='back to about'/>

	</Layout>
)

export default AboutSkillsPage

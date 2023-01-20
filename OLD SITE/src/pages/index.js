import React from 'react'

import { Link } from 'gatsby'

import { HomeHeader, Banner, SectionButton } from '../utils'

import homeImg from '../images/bcg/homeBcg.jpg'
import QuickInfo from '../components/HomePageComponents/QuickInfo'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Blurb from '../components/HomePageComponents/Blurb.js'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <HomeHeader img={homeImg}>
      <Banner
        title="Everything Web"
        subtitle="Helping Your business go from good... to GREAT!"
      >
        <Link to="/services/" style={{ textDecoration: 'none' }}>
          <SectionButton style={{ margin: '2rem auto' }}>
            See Our Services
          </SectionButton>
        </Link>
      </Banner>
    </HomeHeader>
    <Blurb />
    <QuickInfo />
  </Layout>
)

export default IndexPage

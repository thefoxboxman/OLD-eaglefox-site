import React from 'react'

import { PortfolioList } from '../components/PortfolioPageComponents/PortfolioList'
import { PageHeader, Banner } from '../utils/'
import PortfolioImg from '../images/bcg/portfolioBcg.jpg'

import Layout from '../components/layout'
import SEO from '../components/seo'

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <PageHeader img={PortfolioImg}>
      <Banner title="Portfolio" subtitle="doing something great!" />
    </PageHeader>
    <PortfolioList />
  </Layout>
)

export default PortfolioPage

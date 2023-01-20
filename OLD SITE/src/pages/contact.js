import React from 'react'
import styled from 'styled-components'
import { PageHeader, Banner } from '../utils/'
import contactImg from '../images/bcg/contactBcg.jpg'
import { styles } from '../utils'
import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact"  />
    <PageHeader img={contactImg}>
      <Banner title="contact us" subtitle="we are here for you" />
    </PageHeader>
    <ContactWrapper>
      <div className="name">
        <h2>John De Costa</h2>
      </div>
      <div className="title">Web Wrangler</div>
      <div className="phone">
        <h3> +61 0418 753 527</h3>
      </div>
      <div className="email">
        <h3>john@eaglefox.net</h3>
      </div>
    </ContactWrapper>
  </Layout>
)

export default ContactPage

const ContactWrapper = styled.div`
  text-align: center;
  .name {
    padding: 2rem 0 0.5rem 0;
  }
  .title {
    ${styles.textSlanted};
    letter-spacing: 0.2rem;
    color: ${styles.colors.mainYellow};
  }
  .phone {
    padding: 1rem 0 0.5rem 0;
  }
  .email {
    padding: 0.5rem 0 2rem 0;
  }
`

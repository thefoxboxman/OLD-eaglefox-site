import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { styles } from '../../utils'
import { Section, Title, SectionButton } from '../../utils'

export default class Blurb extends Component {
  render() {
    return (
      <Section>
        <Title message="time is money" title="Blazing Fast Websites" />
        <BlurbWrapper>
          <p className="text">
            We build blazingly fast, effective websites. The key function of a
            your website is to convert website visitors into genuine customers.
            That’s what we do best. A website is the foundation of your online
            presence and one of the most valuable assets your business has; it’s
            certainly the most valuable digital asset.{' '}
          </p>

          <p className="text">
            Compelling content and targeted keywords will maximize your site's
            search engine optimization (SEO). We offer a range of services, but
            our core business is the design, build and maintenance of websites.
          </p>
          <p className="text">
            Together we can create your brand in your own digital space. An
            online presence that can grow along with your business. Your
            business is unique and needs to stand out above your competitors.
          </p>

          <p className="text">
            Your website should not only look great, it needs to get results. We
            will work together to deliver your project on time and on budget.{' '}
          </p>

          <h2>There's a New Techological Frontier... JAMstack.</h2>
          <p className="text">
            JAMstack techologies we can deliver websites so fast and at so
            low capital investment that you can indulge and test your every
            business idea.
						Static site generators like "Gatsby" or "Hugo" build web pages that will load in under three seconds. Host your website on services like "Netlify.com" and you will have access to a fast content delivery network (CDN) that is secure and costs just a few dollars per month. Set up online payment with services like "Stripe.com" in just minutes. Add a Content Management Service (CMS) like "Sanity.io" so you edit your website content 24/7.
          </p>
          <Link to="/services/" style={{ textDecoration: 'none' }}>
            <SectionButton style={{ margin: '2rem auto' }}>
              services
            </SectionButton>
          </Link>
        </BlurbWrapper>
      </Section>
    )
  }
}
const BlurbWrapper = styled.div`
  width: 90vw;
  margin: 2rem auto;
  line-height: 1.75rem;
  letter-spacing: 0.1rem;
  color: ${styles.colors.mainGrey};
  word-spacing: 0.1rem;
  @media (min-width: 768px) {
    width: 70vw;
  }
  @media (min-width: 992px) {
    width: 60vw;
  }

	.text{
		padding-top: 1rem;
	}

	h2{
		padding-top: 1rem;
	}
`

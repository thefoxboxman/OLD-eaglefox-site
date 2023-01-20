import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { Section, styles, Title } from '../../utils'
import { ReadMoreButton } from '../../utils/ReadMoreButton'

export function ServicesList() {
  return (
    <ServicesSection>
      <Title message="make your choice" title="services menu"></Title>
      <Section>
        <ServicesListWrapper>
          <div className="item">
            <h2>Shopify</h2>
            <p>
              In the age of COVID-19 offer your clients the ease and convenience
              of shopping online in your own online store. Shopify is the
              battle-tested solution. We can help you get our online store up
              and running in less than a day normally.
            </p>
            <div className="linkButton">
              <Link to="/about/" style={{ textDecoration: 'none' }}>
                <ReadMoreButton style={{ margin: '2rem auto' }}>
                  about
                </ReadMoreButton>
              </Link>
            </div>
          </div>

          <div className="item">
            <h2>Website Design & Build</h2>
            <p>
              Make a great first impression with a hand-crafted website that
              reflects your professionalism and is built to work for your small
              business.
            </p>
            <div className="linkButton">
              <Link to="/about/" style={{ textDecoration: 'none' }}>
                <ReadMoreButton style={{ margin: '2rem auto' }}>
                  about
                </ReadMoreButton>
              </Link>
            </div>
          </div>

          <div className="item">
            <h2>e-Commerce</h2>
            <p>
              Setup your website to accept payments directly from your clients.
              Adding e-Commerce functionality to your site is fast and
              inexpensive.
            </p>
            <div className="linkButton">
              <Link to="/about/" style={{ textDecoration: 'none' }}>
                <ReadMoreButton style={{ margin: '2rem auto' }}>
                  about
                </ReadMoreButton>
              </Link>
            </div>
          </div>
          <div className="item">
            <h2>SEO</h2>
            <p>
              Get found on Google, Yahoo! and Bing. We follow SEO best
              practices, ensuring you have the best chance of attracting more
              customers.
            </p>
            <div className="linkButton">
              <Link to="/about/" style={{ textDecoration: 'none' }}>
                <ReadMoreButton style={{ margin: '2rem auto' }}>
                  about
                </ReadMoreButton>
              </Link>
            </div>
          </div>
          <div className="item">
            <h2>Website Maintenance</h2>
            <p>
              There comes a time when a business outgrows their website or the
              website's platform reaches the end of its life cycle. We will
              assemble a dedicated project team to rebuild or revamp your
              platform.
            </p>
            <div className="linkButton">
              <Link to="/about/" style={{ textDecoration: 'none' }}>
                <ReadMoreButton style={{ margin: '2rem auto' }}>
                  about
                </ReadMoreButton>
              </Link>
            </div>
          </div>
          <div className="item">
            <h2>WordPress Sites</h2>
            <p>Your WordPress website setup and maintained.</p>
            <div className="linkButton">
              <Link to="/about/" style={{ textDecoration: 'none' }}>
                <ReadMoreButton />
              </Link>
            </div>
          </div>
        </ServicesListWrapper>
      </Section>
    </ServicesSection>
  )
}
const ServicesSection = styled(Section)`
  background: ${styles.colors.lightGrey};
  min-width: 100vw;
`
const ServicesListWrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;

  .item {
    background-color: white;
    border: 2px solid #000;
    border-radius: 5px;
    box-shadow: 5px 10px 8px #888888;
  }

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
  @media (min-width: 992px) {
    grid-gap: 3rem;
  }
  h2 {
    color: ${styles.colors.mainYellow};
    text-align: center;
    letter-spacing: 0.1rem;
  }
  p {
    letter-spacing: 0.1rem;
    line-height: 1.4rem;
    padding: 1px 5px 1px 10px;
  }

  .linkButton {
    display: flex;
    justify-content: space-around;
    margin: 1rem;
  }
`

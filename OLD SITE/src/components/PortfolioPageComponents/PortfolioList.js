import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { Section, styles, Title } from '../../utils'
import { ReadMoreButton } from '../../utils/ReadMoreButton'
import aquilacove from '../../images/Portfolio/aquilacoveWebPage.jpg'
import aCoveBuiltWith from '../../images/Portfolio/AquilacoveBuiltWith.jpg'
import photoADay from '../../images/Portfolio/PhotoADay.jpg'
import JAPaDayBuiltWith from '../../images/Portfolio/JenellePADBuiltWith.jpg'
import sarinaHandyman from '../../images/Portfolio/SarinaHandyman.jpg'
import HandymanBuiltWith from '../../images/Portfolio/HandymanBuiltWith.jpg'

export function PortfolioList() {
  return (
    <PortfolioSection>
      <Title message="take a look at" title="Our Work"></Title>
      <Section>
        <PortfolioListWrapper>
          <div className="item">
            <a
              href="https://jenelle-photo-a-day.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={photoADay}
                alt="Image of photo a day for a year Web Page"
                width="100%"
              />
            </a>
            <h2>
              <a
                href="https://jenelle-photo-a-day.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Jenelle Photo A Day
              </a>
            </h2>
            <p>
              This is site was commissioned by a photographer who was
              undertaking a project to take a photo a day during 2019. The site
              needed to allow the user to independently post her photos and
              other information direct to the website. A Sanity.io headless
              Content Management Service (CMS) was used to achieve this goal.
              The site is hosted on Netlify (free tier). Each time the user
              added her photos to the CMS the site would automatically update.
              This is a great advantage of the JAMstack approach to web
              development. The technology used to build the site is listed
              below.
            </p>
            <img
              src={JAPaDayBuiltWith}
              alt="Technology used to built Aquila Cove site"
              width="100%"
            />
          </div>

          <div className="item">
            <a
              href="https://www.aquilacove.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={aquilacove}
                alt="Image of Aquila Cove Web Page"
                width="100%"
              />
            </a>
            <h2>
              <a
                href="https://www.aquilacove.com/"
                target="_blank"
                rel="noreferrer"
              >
                Aquila Cove
              </a>
            </h2>
            <p>
              A landing page built for an owner to showcase property in north
              Queensland that are marketing privately. The brief called for a
              site that had text scrolling over images was referenced by the
              text. The techology used to build the site is listed below.
            </p>
            <img
              src={aCoveBuiltWith}
              alt="Technology used to built Aquila Cove site"
              width="100%"
            />
          </div>

          <div className="item">
            <a href="https://mayerfleur.com/" target="_blank" rel="noreferrer">
              <img
                src={sarinaHandyman}
                alt="Image of Sarina Handyman Web Page"
                width="100%"
              />
            </a>
            <h2>
              <a
                href="https://mayerfleur.com/"
                target="_blank"
                rel="noreferrer"
              >
                Sarina Handyman
              </a>
            </h2>
            <p>
              The client brief for a Wordpress site but was not to use an
              existing Theme. We build a clean uncluttered site using the
              Wordpress backend (CMS). Currently the site has no TLS certificate
              as the site is being transitioned to a Gastby based site which
              will continue to use the Wordpress CMS. The techology used to
              build the current site is listed below.
            </p>
            <img
              src={HandymanBuiltWith}
              alt="Technology used to built Sarina Handyman site"
              width="100%"
            />
          </div>
        </PortfolioListWrapper>
      </Section>
    </PortfolioSection>
  )
}
const PortfolioSection = styled(Section)`
  background: ${styles.colors.lightGrey};
  min-width: 100vw;
`
const PortfolioListWrapper = styled.div`
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

  a:link {
    text-decoration: none;
    color: ${styles.colors.mainYellow};
    ${styles.transition({})};
    &:hover {
      background: ${styles.colors.mainWhite};
      color: ${styles.colors.mainBlack};
      cursor: pointer;
    }
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

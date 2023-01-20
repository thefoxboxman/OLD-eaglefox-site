import React, { Component } from 'react'
import styled from 'styled-components'


import { styles } from '../../utils'
import { Section, Title, InternalLink } from '../../utils'

export default class AboutText extends Component {
  render() {
    return (
      <Section>
        <Title message="let me tell you about" title="how we roll" />
        <AboutTextWrapper>
          <p>
            <span className="subheader">One on One Service: </span>
            Personal one on one service.
          </p>
          <p>
            <span className="subheader">Free Upfront Consultation: </span> We
            want to really understand your needs and your environment before we
            begin to offer a solution.
          </p>
          <p>
            <span className="subheader">Agile Development: </span>
            We provide incremental component delivery. Everyday you can see and
            review your project as it is developed item by item.
          </p>
          <p>
            <span className="subheader">Written Agreements: </span>Before we
            start we have a written understanding between us that clearly sets
            out each of our responsibilities.
          </p>
          <p>
            <span className="subheader">100% Delighted Guarantee: </span> You pay
            nothing until you are totally satisfied with the result.
          </p>
					<p>
						
					</p>
          <InternalLink linkTo="/contact/" linkText="contact us now" />
        </AboutTextWrapper>
      </Section>
    )
  }
}
const AboutTextWrapper = styled.div`
  width: 90vw;
  margin: 2rem auto;
  line-height: 1.5rem;
  color: ${styles.colors.mainGrey};
  font-size: 1.05rem;
  letter-spacing: 0.05rem;
  word-spacing: 0.1rem;
  @media (min-width: 768px) {
    width: 70vw;
  }
  @media (min-width: 992px) {
    width: 60vw;
  }
  .subheader {
    font-weight: 600;
  }
  p {
    padding-top: 2rem;
  }
`

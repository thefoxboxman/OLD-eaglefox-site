import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

import {styles} from '../../utils'
import {Section, Title, SectionButton} from '../../utils'



export default class QuickInfo extends Component {
	render() {
		return <Section>
        <Title message="let us tell you" title="our mission" />
        <QuickInfoWrapper>
					<p className="text">
				To serve our customers by delivering technically sound and affordable business solutions while ensuring exceptional customer service and support throughout the process.
				To become a prime performer in the global marketplace by providing highly innovative web designing, web development and internet marketing services that will drive our clients' business towards growth. Worldwide reputation is the dream of every company and we want to achieve it through our work.
					</p>
					<Link to="/about/" style={{textDecoration:'none'}}>
					<SectionButton style={{margin:'2rem auto'}}>about</SectionButton>
					</Link>
        </QuickInfoWrapper>
      </Section>
		
		
	}
}
const QuickInfoWrapper = styled.div`
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
`
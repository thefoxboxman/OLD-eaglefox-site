import React from 'react'
import styled from 'styled-components'
import {styles} from '../utils'

export default function Banner({title,subtitle,children}) {
	return ( <BannerWrapper>
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subtitle} </h3>
      {children}
    </BannerWrapper>
	)
}
const BannerWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  .title {
    color: ${styles.colors.mainWhite};
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
  }
  .subtitle {
    color: ${styles.colors.mainWhite};
		font-weight: 300;
    font-size: 1.0rem;
    
    letter-spacing: 0.15rem;
  }
	@media (min-width: 450px){
		.title {
			font-size: 2.5rem;
			letter-spacing: 0.45rem;
		}
		.subtitle {
			font-size: 1.3rem;
letter-spacing: 0.2rem;
		}
	}
`
Banner.defaultProps = {
	title: 'default title',
	subtitle: 'default subtitle',
}
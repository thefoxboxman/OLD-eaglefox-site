import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {SectionButton} from '../utils'

export function InternalLink({linkTo, linkText}) {
  return (
    <InternalLinkWrapper>
			
      <Link to={linkTo} style={{ textDecoration: 'none' }}>
					<SectionButton style={{ margin: '0.5rem auto' }}>
						{linkText}
            </SectionButton>
      </Link>
			
    </InternalLinkWrapper>
  )
}

InternalLink.defaultProps = {
	linkTo: '/about/',
	linkText: 'Go Home',
}
const InternalLinkWrapper = styled.div`
`
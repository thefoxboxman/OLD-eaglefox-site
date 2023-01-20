import React from 'react'
import styled from 'styled-components'
import { FaPhone } from 'react-icons/fa'

import { styles } from '../utils'


export function CallButton() {
	return (
		<CallButtonWrapper itemscope itemtype="http://schema.org/LocalBusiness">
			
			<span itemprop="telephone"><a href="tel:+61418753527">
				<FaPhone /> 	0418-753-527</a></span>
		</CallButtonWrapper>
	)
}

const CallButtonWrapper = styled.div`
	display: block;

background: transparent;
padding: 0.4rem 1rem;
text-transform: capitalize;
font-size: 0.8rem;

font-weight: 900px;
${styles.border({ color: `${styles.colors.mainYellow}` })};
border-radius: 10px;
margin-bottom: 0rem;
margin-left: 1rem;
${styles.transition({})};
&:hover{
	background:${styles.colors.mainYellow};
	color:${styles.colors.mainWhite};
	${styles.border({ color: `${styles.colors.mainYellow}` })};
	cursor: pointer;
}
a{
	text-decoration: none;
	font-size: 1rem;
	color:${styles.colors.mainBlack};
}
`


import React from 'react'
import styled from 'styled-components'


import { styles } from '../utils'


export function ReadMoreButton() {
	return (
		<CallButtonWrapper >
			Read More...
		</CallButtonWrapper>
	)
}

const CallButtonWrapper = styled.div`
	

max-width: 10rem;

padding: 0.6rem 3rem;
text-transform: capitalize;
font-size: 1rem;
text-align: center;
letter-spacing: 0.1rem;
color:${styles.colors.mainWhite};
background:${styles.colors.mainYellow};
${styles.border({ color: `${styles.colors.mainBlack}` })};
border-radius: 5px;
cursor: pointer;

${styles.transition({})};
&:hover{
	background:${styles.colors.lightGrey};
	color:${styles.colors.mainYellow};
	${styles.border({ color: `${styles.colors.mainBlack}` })};
	
}
a{
	text-decoration: none;
	
}
`


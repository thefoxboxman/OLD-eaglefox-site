import styled from 'styled-components'

import {styles} from '../utils'

const BannerButton = styled.button`
display: block;
color:${styles.colors.mainWhite};
background: transparent;
padding: 0.5rem 1rem;
text-transform: uppercase;
font-size: .8rem;
letter-spacing: 0.2rem;
font-weight: 700px;
${styles.border({color:`${styles.colors.mainWhite}`})};
border-radius: 10px;
margin-bottom: 1rem;
${styles.transition({})};
&:hover{
	background:${styles.colors.mainWhite};
	color:${styles.colors.mainBlack};
	cursor: pointer;
}

@media (min-width: 450px){
		.title {
			font-size: 1.5rem;
			letter-spacing: 0.5rem;
		}
}
`
const SectionButton = styled(BannerButton)`
background: ${styles.colors.mainYellow};
  color: ${styles.colors.mainBlack};
	${styles.border({ color: `${styles.colors.mainBlack}` })};
	border-radius: 10px;
  &:hover {
    background: ${styles.colors.mainBlack};
    color: ${styles.colors.mainYellow};
  }
`
const FooterButton = styled.button`
display: block;
color:${styles.colors.mainWhite};
background: transparent;
padding: 0.5rem 1rem;
text-transform: capitalize;
font-size: 1rem;
letter-spacing: 0.2rem;
font-weight: 700px;
${styles.border({ color: `${styles.colors.mainWhite}` })};
border-radius: 10px;
margin-bottom: 1rem;
${styles.transition({})};
&:hover{
	background:${styles.colors.mainBlack};
	color:${styles.colors.mainYellow};
	${styles.border({ color: `${styles.colors.mainYellow}` })};
	cursor: pointer;
}
`


export {BannerButton, SectionButton, FooterButton}
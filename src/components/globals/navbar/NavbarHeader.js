import React, { Component } from 'react'
import {Link} from 'gatsby'


import {FaAlignRight} from 'react-icons/fa'
import styled from 'styled-components'
import { styles } from '../../../utils'
import { CallButton } from '../../../utils'
import logo from '../../../images/EaglefoxLogoText.jpg'

export default class NavbarHeader extends Component {
	render() {
		const {handleNavbar} = this.props
		return (
			<HeaderWrapper>
				<Link to="/" >
				<img className="brand" src={logo} alt="company name logo" height="40" />
				</Link>
				< CallButton />  
			<FaAlignRight className="toggle-icon" onClick={()=> {handleNavbar()}}></FaAlignRight>
			</HeaderWrapper>
		)
	}
}

const HeaderWrapper = styled.div `
padding: 0.4rem 1rem;
display: flex;
align-items: center;
justify-content: space-between;
.toggle-icon{
	font-size: 1.75rem;
	color: ${styles.colors.mainYellow};
	cursor: pointer;
}
@media (min-width: 768px){
	.toggle-icon {
		display: none;
	}
}

.brand{
	margin-top:8px;
}

`

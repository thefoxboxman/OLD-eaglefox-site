import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

import FooterLinks from './FooterLinks'
import { styles } from '../../../utils'
import { FooterButton } from '../../../utils/Button'
import { FooterCallButton } from '../../../utils'

export default class Footer extends Component {
	state = {
		icons: [
			{
				id: 1,
				icon: <FaFacebook className="icon facebook-icon" />,
				path: `https://www.facebook.com`,
			},
			{
				id: 2,
				icon: <FaTwitter className="icon twitter-icon" />,
				path: `https://www.twitter.com`,
			},
			{
				id: 3,
				icon: <FaInstagram className="icon instagram-icon" />,
				path: `https://www.instagram.com`,
			},
		],
	}

	render() {
		return (
      <FooterWrapper>
        {/* disable title				
<div className='title'>title something</div>
*/}
        <FooterCallButton />
        <Link to="/contact/" style={{ textDecoration: 'none' }}>
          <FooterButton style={{ margin: '2rem auto' }}>
            free consultation
          </FooterButton>
        </Link>

        <div className="footerLinks">
          <FooterLinks />
        </div>
        {/* disable social icons
<div className="icons">
					{this.state.icons.map(item => (<a href={item.path} key={item.id} target="_blank" rel="noopener noreferrer">{item.icon} </a>))}
		</div> */}
        <p className="copyright">
          copyright &copy; 1999-2019 Eaglefox Pty Ltd ABN: 51086009028
        </p>
        <a rel="me" href="https://mastodon.social/@johndecosta">
          Mastodon
        </a>
      </FooterWrapper>
    )
	}
}
const FooterWrapper = styled.footer`
  padding: 2rem;
  background: ${styles.colors.mainBlack};
  .icons {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .icon {
    color: ${styles.colors.mainWhite};
    font-size: 1.3rem;
    ${styles.transition({})};
    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }
  .copyright {
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
		margin: 1rem 0;
		font-size: 0.7rem
  }

  .title {
    width: 10rem;
    color: ${styles.colors.mainYellow};
    text-transform: uppercase;
    text-align: center;
    padding: 0.3rem 1rem;
    margin: 0 auto 1rem auto;
    font-size: 1rem;
		${styles.border({ color: `${styles.colors.mainYellow}` })};
		
  }
	
	.callButton {
		max-width: 5rem;
color: ${styles.colors.mainWhite};
	}
  
`

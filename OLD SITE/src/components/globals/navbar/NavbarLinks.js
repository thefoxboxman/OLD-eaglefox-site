import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { styles } from '../../../utils'

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: '/',
        name: 'home',
      },
      {
        id: 1,
        path: '/services/',
        name: 'services',
      },
      {
        id: 2,
        path: '/skills/',
        name: 'skills',
      },
      {
        id: 3,
        path: '/portfolio/',
        name: 'our work',
      },
      {
        id: 4,
        path: '/about/',
        name: 'about',
      },
      {
        id: 5,
        path: '/contact/',
        name: 'contact',
      },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {' '}
        {this.state.links.map((item) => {
          return (
            <li key={item.id}>
              <Link to={item.path} className="nav-link">
                {' '}
                {item.name}{' '}
              </Link>
            </li>
          )
        })}{' '}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    margin: 0 0.1rem;
    color: ${styles.colors.mainBlack};
    font-weight: 700;
    text-transform: capitalize;
    border-radius: 5px;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  height: ${(props) => (props.open ? '150px' : '0px')};
  overflow: hidden;
  ${styles.transObject({ time: '0.5s' })};
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      background: ${styles.colors.mainGrey};
      padding: 0.5rem 1rem 0.5rem 1rem;
      margin-top: 5px;
    }
  }
`

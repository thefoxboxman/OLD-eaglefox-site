import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'

import Navbar from './globals/navbar/Navbar'
import Footer from './globals/footer/Footer'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <MyGlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  )
}

const MyGlobalStyle = createGlobalStyle`
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: Arial, Helvetica, sans-serif;
	color: black;
	background: white;
}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

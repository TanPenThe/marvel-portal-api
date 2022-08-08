import React from 'react'
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = props => {
  return (
    <div>
      <Header
        title="Marvel Portal"
      />
      <Nav />

      {/* An <Outlet> should be used in parent route elements to render their child route elements.
      This allows nested UI to show up when child routes are rendered.  */}
      <Outlet />
      <Footer />
    </div>
  )
}

Layout.propTypes = {}

export default Layout
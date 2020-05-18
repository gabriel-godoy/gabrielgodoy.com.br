import React from 'react'
import PropTypes from 'prop-types'
import Sidebar from '../Sidebar/Sidebar'
import MenuBar from '../MenuBar/MenuBar'

import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutWrapper}>
      <Sidebar />

      <main className={styles.layoutMain}>{children}</main>

      <MenuBar />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

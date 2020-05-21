import React from 'react'
import PropTypes from 'prop-types'
import Sidebar from '../Sidebar/Sidebar'
import MenuBar from '../MenuBar/MenuBar'
import { TransitionPortal } from 'gatsby-plugin-transition-link'
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutWrapper}>
      <TransitionPortal level="top">
        <Sidebar />
      </TransitionPortal>

      <main className={styles.layoutMain}>{children}</main>

      <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

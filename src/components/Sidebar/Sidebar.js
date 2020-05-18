import React from 'react'
import Profile from '../Profile/Profile'
import SocialLinks from '../SocialLinks/SocialLinks'
import MenuLinks from '../MenuLinks/MenuLinks'

import styles from './Sidebar.module.scss'

const Sidebar = () => {
  return (
    <aside className={styles.sidebarWrapper}>
      <Profile />
      <SocialLinks />
      <MenuLinks />
    </aside>
  )
}

export default Sidebar

import React from 'react'
import links from './content'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import getThemeColor from './../../utils/getThemeColor'

import styles from './MenuLinks.module.scss'

const MenuLinks = () => (
  <nav className={styles.menuLinksWrapper}>
    <ul className={styles.menuLinksList}>
      {links.map((link, index) => (
        <li className={styles.menuLinksItem} key={index}>
          <AniLink
            bg={getThemeColor()}
            cover
            direction="left"
            duration={0.6}
            to={link.url}
            activeClassName={styles.menuLinksItemActive}
            className={styles.menuLinksLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            {link.label}
          </AniLink>
        </li>
      ))}
    </ul>
  </nav>
)

export default MenuLinks

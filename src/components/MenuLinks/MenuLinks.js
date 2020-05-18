import React from 'react'
import links from './content'
import { Link } from 'gatsby'

import styles from './MenuLinks.module.scss'

const MenuLinks = () => (
  <nav className={styles.menuLinksWrapper}>
    <ul className={styles.menuLinksList}>
      {links.map((link, index) => (
        <li className={styles.menuLinksItem} key={index}>
          <Link
            to={link.url}
            activeClassName={styles.menuLinksItemActive}
            className={styles.menuLinksLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default MenuLinks

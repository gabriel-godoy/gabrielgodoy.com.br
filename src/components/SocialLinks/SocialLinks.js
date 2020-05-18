import React from 'react'
import Icons from './icons'
import links from './content'

import styles from './SocialLinks.module.scss'

const SocialLinks = () => {
  return (
    <nav className={styles.socialLinksWrapper}>
      <ul className={styles.socialLinksList}>
        {links.map((link, index) => {
          const Icon = Icons[link.label]

          return (
            <li className={styles.socialLinksItem} key={index}>
              <a
                href={link.url}
                className={styles.socialLinksLink}
                title={link.label}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon size="22" />
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default SocialLinks

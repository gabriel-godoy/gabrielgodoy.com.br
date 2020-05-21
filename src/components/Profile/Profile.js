import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import getThemeColor from './../../utils/getThemeColor'
import Avatar from '../Avatar/Avatar'

import styles from './Profile.module.scss'

const Profile = () => {
  // Destructuring do objeto que chega do useStaticQuery
  const {
    site: {
      siteMetadata: { author, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          position
          description
          author
        }
      }
    }
  `)

  return (
    <section className={styles.profileWrapper}>
      <AniLink
        bg={getThemeColor()}
        cover
        direction="left"
        duration={0.6}
        className={styles.profileLink}
        to="/"
      >
        <Avatar />
        <h1 className={styles.profileAuthor}>
          {author}
          <small className={styles.profilePosition}>{position}</small>
        </h1>
      </AniLink>
      <p className={styles.profileDescription}>{description}</p>
    </section>
  )
}

export default Profile

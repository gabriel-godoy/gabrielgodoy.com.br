import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
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
      <Link className={styles.profileLink} to="/">
        <Avatar />
        <h1 className={styles.profileAuthor}>{author}</h1>
        <h2 className={styles.profilePosition}>{position}</h2>
      </Link>
      <p className={styles.profileDescription}>{description}</p>
    </section>
  )
}

export default Profile

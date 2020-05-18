import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styles from './Avatar.module.scss'

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-photo.jpg" }) {
          childImageSharp {
            # Pode ser fixed ou fluid (fluid é sem tamanho fixo)
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <Img
      className={styles.profileImage}
      fixed={avatarImage.childImageSharp.fixed}
    />
  )
}

export default Avatar

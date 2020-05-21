import React from 'react'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import getThemeColor from './../../utils/getThemeColor'

import styles from './RecommendedPosts.module.scss'

const RecommendedPosts = ({ next, previous }) => (
  <section className={styles.recommendedWrapper}>
    {previous && (
      <AniLink
        bg={getThemeColor()}
        cover
        direction="right"
        duration={0.6}
        to={previous.fields.slug}
        className={`${styles.recommendedLink} ${styles.previous}`}
      >
        {previous.frontmatter.title}
      </AniLink>
    )}

    {next && (
      <AniLink
        bg={getThemeColor()}
        cover
        direction="right"
        duration={0.6}
        to={next.fields.slug}
        className={`${styles.recommendedLink} ${styles.next}`}
      >
        {next.frontmatter.title}
      </AniLink>
    )}
  </section>
)

RecommendedPosts.propTypes = {
  next: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  }),
  previous: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPosts

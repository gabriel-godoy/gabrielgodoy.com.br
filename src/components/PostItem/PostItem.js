import React from 'react'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import getThemeColor from './../../utils/getThemeColor'

import styles from './PostItem.module.scss'

const PostItem = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
}) => {
  return (
    <AniLink
    bg={getThemeColor()}
      cover
      direction="right"
      duration={0.6}
      to={slug}
      className={styles.postItemLink}
    >
      <section className={styles.postItemWrapper}>
        <div className={styles.postItemTag} style={{ background }}>
          {category}
        </div>
        <div className={styles.postItemInfo}>
          <time className={styles.postItemDate}>
            {date} • {timeToRead} min de leitura
          </time>
          <h1 className={styles.postItemTitle}>{title}</h1>
          <p className={styles.postItemDescription}>{description}</p>
        </div>
      </section>
    </AniLink>
  )
}

PostItem.defaultProps = {
  background: '#1fa1f2',
}

PostItem.propTypes = {
  background: PropTypes.string,
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem

import React from 'react'
import propTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import getThemeColor from './../../utils/getThemeColor'

import styles from './Pagination.module.scss'

const Pagination = ({
  isFirstPage,
  isLastPage,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <section className={styles.paginationWrapper}>
    {!isFirstPage && (
      <AniLink
        bg={getThemeColor()}
        cover
        direction="left"
        duration={0.6}
        to={prevPage}
      >
        ← página anterior
      </AniLink>
    )}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLastPage && (
      <AniLink
        bg={getThemeColor()}
        cover
        direction="right"
        duration={0.6}
        to={nextPage}
      >
        proxima página →
      </AniLink>
    )}
  </section>
)

Pagination.propTypes = {
  isFirstPage: propTypes.bool.isRequired,
  isLastPage: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination

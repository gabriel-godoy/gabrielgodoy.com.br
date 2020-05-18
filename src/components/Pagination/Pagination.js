import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'gatsby'

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
    {!isFirstPage && <Link to={prevPage}>← página anterior</Link>}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLastPage && <Link to={nextPage}>proxima página →</Link>}
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

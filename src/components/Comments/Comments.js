import React from 'react'
import PropTypes from 'prop-types'
import ReactDisqusComments from 'react-disqus-comments'

import styles from './Comments.module.scss'

const Comments = ({ url, title }) => {
  const completeUrl = `https://gabrielgodoy.com.br${url}`

  return (
    <section className={styles.commentsWrapper}>
      <h2 className={styles.commentsTitle}>Comentários</h2>

      <ReactDisqusComments
        shortname="gabrielgodoy"
        identifier={completeUrl}
        title="Example Thread"
        url="http://www.example.com/example-thread"
      />
    </section>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments

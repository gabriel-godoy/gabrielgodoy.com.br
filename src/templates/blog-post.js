import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'

import styles from '../components/Post/Post.module.scss'

const BlogPost = props => {
  const post = props.data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />

      <header className={styles.postHeader}>
        <p className={styles.postDate}>
          {post.frontmatter.date} • {post.timeToRead} min de leitura
        </p>
        <h1 className={styles.postTitle}>{post.frontmatter.title}</h1>
        <h2 className={styles.postDescription}>
          {post.frontmatter.description}
        </h2>
      </header>
      <section className={styles.mainContent}>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      html
      timeToRead
    }
  }
`

export default BlogPost

import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import Search from '../components/Search/Search'

const SearchPage = () => (
  <Layout>
    <SEO title="Search" />
    <Search />
  </Layout>
)

export default SearchPage

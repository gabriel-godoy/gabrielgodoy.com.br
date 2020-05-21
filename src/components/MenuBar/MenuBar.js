import React, { useState, useEffect } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import getThemeColor from './../../utils/getThemeColor'

import { Home } from '@styled-icons/boxicons-solid/Home'
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2'
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt'
import { Lightbulb } from '@styled-icons/typicons/Lightbulb'
import { Grid } from '@styled-icons/boxicons-solid/Grid'
import { ThList as List } from '@styled-icons/typicons/ThList'

import styles from './MenuBar.module.scss'

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === 'dark'
  const isListMode = display === 'list'

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return (
    <aside className={styles.menuBarWrapper}>
      <div className={styles.menuBarGroup}>
        <AniLink
          bg={getThemeColor()}
          cover
          direction="right"
          duration={0.6}
          to="/"
          title="Voltar para home"
          className={styles.menuBarLink}
          activeClassName={styles.menuBarLinkActive}
        >
          <span className={styles.menuBarItem}>
            <Home />
          </span>
        </AniLink>
        <AniLink
          bg={getThemeColor()}
          cover
          direction="right"
          duration={0.6}
          to="/search/"
          title="Pesquisar"
          className={styles.menuBarLink}
          activeClassName={styles.menuBarLinkActive}
        >
          <span className={styles.menuBarItem}>
            <Search />
          </span>
        </AniLink>
      </div>

      <div className={styles.menuBarGroup}>
        <span
          className={`${styles.menuBarItem} ${styles[theme]}`}
          title="Mudar o tema"
          role="button"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
          }}
          onKeyDown={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
          }}
        >
          <Lightbulb />
        </span>
        <span
          className={styles.menuBarItem}
          title="Mudar visualização"
          role="button"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? 'grid' : 'list')
          }}
          onKeyDown={() => {
            window.__setPreferredDisplay(isListMode ? 'grid' : 'list')
          }}
        >
          {isListMode ? <Grid /> : <List />}
        </span>
        <span className={styles.menuBarItem} title="Ir para o topo">
          <Arrow />
        </span>
      </div>
    </aside>
  )
}

export default MenuBar

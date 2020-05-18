import React from 'react'
import { Link } from 'gatsby'

import { Home } from '@styled-icons/boxicons-solid/Home'
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2'
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt'
import { Lightbulb } from '@styled-icons/typicons/Lightbulb'
import { Grid } from '@styled-icons/boxicons-solid/Grid'

import styles from './MenuBar.module.scss'

const MenuBar = () => (
  <aside className={styles.menuBarWrapper}>
    <div className={styles.menuBarGroup}>
      <Link
        to="/"
        title="Voltar para home"
        className={styles.menuBarLink}
        activeClassName={styles.menuBarLinkActive}
      >
        <span className={styles.menuBarItem}>
          <Home />
        </span>
      </Link>
      <Link
        to="/search/"
        title="Pesquisar"
        className={styles.menuBarLink}
        activeClassName={styles.menuBarLinkActive}
      >
        <span className={styles.menuBarItem}>
          <Search />
        </span>
      </Link>
    </div>

    <div className={styles.menuBarGroup}>
      <span className={styles.menuBarItem} title="Mudar o tema">
        <Lightbulb />
      </span>
      <span className={styles.menuBarItem} title="Mudar visualização">
        <Grid />
      </span>
      <span className={styles.menuBarItem} title="Ir para o topo">
        <Arrow />
      </span>
    </div>
  </aside>
)

export default MenuBar

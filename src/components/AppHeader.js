import React from 'react'
import Button from './Button'
import styles from '../styles/modules/app.module.css';

function AppHeader() {
  return (
    <div className={styles.appHeader}>
       
        <Button>
            Click Me
        </Button>
    </div>
  )
}

export default AppHeader



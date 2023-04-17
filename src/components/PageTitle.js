
import React from 'react'
import styles from '../styles/modules/title.module.css';

export default function PageTitle({children, ...rest}) {
  return (
    <p className={styles.title}>
      {children}
    </p>
  )
}


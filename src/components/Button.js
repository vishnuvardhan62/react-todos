
import React from 'react'
import styles from '../styles/modules/button.module.css';
import { getClasses } from '../utils/getClasses';

const buttonType = {
    primary: 'primary',
    secondrary: 'secondary',
}
function Button({children, variant = 'secondary'}) {
  return (
    <button className={getClasses([styles.button, styles[`button--${buttonType}`]])} type='button'>
      {children}
    </button>
  )
}

export default Button

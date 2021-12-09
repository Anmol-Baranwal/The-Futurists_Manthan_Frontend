import React from 'react'

import error from './404-error.svg'
import styles from './NotFound.module.css'

function NotFound() {
  return (
    <div className={styles.container}>
      <img src={error} alt='error 404' className={styles['logo']} />
      <h1>Page Not Found</h1>
    </div>
  )
}

export default NotFound

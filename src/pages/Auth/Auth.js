import React from 'react'

import Login from './Login/Login'
import Signup from './Signup/Signup'

import styles from './Auth.module.css'

function Auth(props) {
  return (
    <div className={styles.auth}>
      <div className={styles.authRight}></div>
      <div className={styles.authRight}>
        {props.signup ? (
          <Signup changeLoggedIn={props.changeLoggedIn} />
        ) : (
          <Login changeLoggedIn={props.changeLoggedIn} />
        )}
      </div>
    </div>
  )
}

export default Auth

import React, { useState } from 'react'

import { Eye, EyeOff } from 'react-feather'

import styles from './InputControl.module.css'

const InputControl = ({ password, label, error, ...props }) => {
  const [visible, setVisible] = useState(password ? false : true)

  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.inputContainer}>
        <input
          className='basic-input'
          type={visible ? 'text' : 'password'}
          {...props}
        />
        {password && (
          <div className={styles.eye} onClick={() => setVisible(!visible)}>
            {visible ? <Eye /> : <EyeOff />}
          </div>
        )}
      </div>
      {error ? <p className={styles.errorMsg}>{error}</p> : ''}
    </div>
  )
}

export default InputControl

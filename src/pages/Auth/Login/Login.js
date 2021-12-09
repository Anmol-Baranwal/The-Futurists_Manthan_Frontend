import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

import Button from '../../../components/Button/Button'
import InputControl from '../../../components/InputControl/InputControl'
import signIn from '../../../sign_in.svg'

import styles from '../Auth.module.css'

function Login(props) {
  let navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [loginButtonDisabled, setLoginButtonDisabled] = useState(false)

  //data fetching
  const authenticate = () => {
    fetch('https://manthan-futuristic.herokuapp.com/auth/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoginButtonDisabled(false)

        if (!res.status) {
          setErrorMessage(res.message)
        } else {
          if (props.changeLoggedIn) {
            props.changeLoggedIn(true)
          }
          const user = {
            token: res.data?.authToken,
            firstName: res.data?.firstName,
            lastName: res.data?.lastName,
            email: res.data?.email,
          }
          localStorage.setItem('user', JSON.stringify(user))
          navigate('/dashboard')
        }
      })
      .catch((err) => {
        setErrorMessage('Error connecting to server')
        setLoginButtonDisabled(false)
      })
  }

  const validateForm = () => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const errors = {}
    if (email.trim() === '') {
      errors.email = 'Enter Email'
    } else if (!emailRegex.test(String(email).toLowerCase())) {
      errors.email = 'Invalid Email'
    }

    if (!password) {
      errors.password = 'Enter Password'
    } else if (password.length < 6)
      errors.password = 'Password must be of 6 characters'

    if (Object.keys(errors).length > 0) {
      setErrors(errors)
      return false
    } else {
      return true
    }
  }

  const submission = (e) => {
    e.preventDefault()
    const emailValue = email
    const passwordValue = password

    if (!emailValue || !passwordValue) {
      setErrorMessage('Enter Credentials')
      return
    }
    setErrorMessage('')
    if (!validateForm()) return
    setLoginButtonDisabled(true)
    authenticate()
  }

  return (
    <section className={styles['login']}>
      <img src={signIn} alt='sign-in' className={styles['logo']} />
      <div className={styles['signin-form']}>
        <h1 className={styles['signin-form_head']}>Log in</h1>
        <h3 className={styles['signin-form_sub-head']}>
          <FaSearch /> Finder
        </h3>
        <form
          onSubmit={(e) => {
            submission(e)
          }}
        >
          <div className={styles.formFeilds}>
            <InputControl
              label='Email'
              onChange={(e) => {
                const value = e.target.value
                setEmail(value)
              }}
              placeholder='abc@xyz.com'
              error={errors.email}
            />
            <InputControl
              label='Password'
              password
              onChange={(e) => {
                const value = e.target.value
                setPassword(value)
              }}
              placeholder='w23@e3r#rf'
              error={errors.password}
            />
            {errorMessage && (
              <small className='error-msg'>{errorMessage}</small>
            )}

            <div style={{ display: 'flex', placeContent: 'center' }}>
              <Button disabled={loginButtonDisabled} type='submit'>
                Log in
              </Button>
            </div>
          </div>
        </form>
        <br />
        <p className={styles['signin_footer-text']}>
          New here? &nbsp;
          <Link to='/signup'>
            <span className={styles['signin_special-text']}>Sign up</span>
          </Link>
        </p>
      </div>
    </section>
  )
}

export default Login

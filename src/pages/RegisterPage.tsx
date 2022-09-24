import React from 'react'
import RegisterForm from '../components/RegisterForm'

const RegisterPage = () => {

  return (
    <RegisterForm onRegister={console.log}/>
  )
}

export default RegisterPage
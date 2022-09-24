import axios from 'axios'
import React from 'react'
import RegisterForm from '../components/RegisterForm'
import { RegisterFormProps } from '../components/RegisterForm/RegisterForm.types'

const RegisterPage = () => {
    
  const handleRegister: RegisterFormProps['onRegister'] = (values) => {
    axios.post('http://localhost:80/auth/register',values)
  }

  return <RegisterForm onRegister={handleRegister} />
}

export default RegisterPage

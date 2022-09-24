import axios from 'axios'
import React, { FC } from 'react'
import { useNavigate } from 'react-router'
import LoginForm from '../components/LoginForm'
import { LoginFormProps } from '../components/LoginForm/LoginForm.types'

export type LoginPageProps = {
  onSuccess: (token: string) => void
  
}
const LoginPage: FC<LoginPageProps> = (props) => {
  const navigate = useNavigate()
  const handleLogin: LoginFormProps['onLogin'] = (values) => {
    axios.post('http://localhost:80/auth/login', values).then(({ data }) => {
      props.onSuccess?.(data.token)
      navigate("/")
    })
  }
  return <LoginForm onLogin={handleLogin} />
}

export default LoginPage

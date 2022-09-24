import React, { FC, useState } from 'react'
import Card from '../Card'
import Input from '../Input'
import { Styled } from './LoginForm.styled'
import { LoginFormProps } from './LoginForm.types'

const LoginForm: FC<LoginFormProps> = (props) => {
  const [formValues, setFormValues] = useState<any>({
    username: 'default username',
    password: 'default password',
  })

  return (
    <Styled>
      <Card title="Login">
        <Input
          value={formValues.username}
          icon="U"
          type="text"
          placeholder="Enter your email"
          style={{ marginBottom: '10px' }}
        />
        <Input
          value={formValues.password}
          icon="P"
          type="password"
          placeholder="Enter your password"
        />
        <input type="checkbox" placeholder="Enter your password" />
        <a href="#">Forgot password</a>
        <button>Login now</button>
        <p>
          Don't have an account <a href="#">Sign up!</a>
        </p>
      </Card>
    </Styled>
  )
}

export default LoginForm

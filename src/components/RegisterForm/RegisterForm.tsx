import React, { FC, useState } from 'react'
import Button from '../Button'
import Card from '../Card'
import Checkbox from '../Checkbox'
import Input from '../Input'
import { Styled } from './RegisterForm.styled'
import { RegisterFormProps } from './RegisterForm.types'

const RegisterForm: FC<RegisterFormProps> = (props) => {
  const [formValues, setFormValues] = useState<any>({
  })

  return (
    <Styled>
      <Card title="Register">
        <Input
          value={formValues.username}
          icon="person"
          type="text"
          placeholder="Enter your name"
          style={{ marginBottom: '15px' }}
        />
        <Input
          value={formValues.email}
          icon="mail"
          type="text"
          placeholder="Enter your email"
          style={{ marginBottom: '15px' }}
        />
        <Input
          value={formValues.password}
          icon="key"
          type="password"
          placeholder="Create a password"
          style={{ marginBottom: '15px' }}
        />
        
        <Input
          value={formValues.password}
          icon="key"
          type="password"
          placeholder="Confirm the password"
          style={{ marginBottom: '15px' }}
        />
        <div className="remember-forgot">
          <Checkbox label="I accept all terms & conditions" />
          
        </div>

        <Button>Register now</Button>
        <p className='register-links'>
          Already have an account <a href="#" className='link'>Sign in!</a>
        </p>
      </Card>
    </Styled>
  )
}

export default RegisterForm

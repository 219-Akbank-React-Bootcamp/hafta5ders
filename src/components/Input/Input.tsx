import React, { FC, useState } from 'react'
import { Styled } from './Input.styled'
import { InputProps } from './Input.types'

const Input: FC<InputProps> = (props) => {
  const [isSecret, setIsSecret] = useState<boolean>(props.type === 'password')

  const calculateType = () => {
    if (props.type === 'text') return 'text'
    if (props.type === 'password' && isSecret) return 'password'
    if (props.type === 'password' && !isSecret) return 'text'
    return props.type
  }

  const handleClickEye = () => {
    setIsSecret((prev) => !prev)
  }

  return (
    <Styled style={props.style}>
      {props.icon ? <div className="icon">{props.icon}</div> : null}
      <input type={calculateType()} value={props.value} />
      {props.type === 'password' ? (
        <button onClick={handleClickEye} className="eye">
          E
        </button>
      ) : null}
    </Styled>
  )
}

export default Input

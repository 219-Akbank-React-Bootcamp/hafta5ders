import React, { FC } from 'react'
import Button from '../components/Button'

export type TodoAppProps = {
  onLogout: () => void
}
const TodoApp: FC<TodoAppProps> = (props) => {
  const handleLogout = () => {
    props.onLogout?.()
  }
  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default TodoApp

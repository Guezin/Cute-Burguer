import React, { useRef, useEffect } from 'react'
import { useField } from '@unform/core'

import { Container } from './styles'

interface InputProps {
  label: string
  name: string
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, registerField, defaultValue } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Container>
      <label htmlFor={name}>{label}</label>

      <input id={name} ref={inputRef} {...rest} />
    </Container>
  )
}

export default Input

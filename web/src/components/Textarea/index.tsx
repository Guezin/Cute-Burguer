import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

import { Container } from './styles'

interface ITextarea {
  name: string
  label: string
  maxCharacter: string
}

const Textarea: React.FC<ITextarea> = ({
  name,
  label,
  maxCharacter,
  ...rest
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const { fieldName, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Container>
      <label htmlFor={name}>
        {label} <span>Máximo de {maxCharacter} caracteres</span>
      </label>

      <textarea
        id={name}
        ref={textAreaRef}
        maxLength={Number(maxCharacter)}
        {...rest}
      />
    </Container>
  )
}

export default Textarea

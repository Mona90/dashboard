import React from 'react'
import { FormInput } from './style'


export default function CustomInput({label, inputEl, required, className}) {
  return (
    <FormInput className={className} label={label} required={required}>
      {inputEl}
    </FormInput>
  )
}

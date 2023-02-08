import { memo } from 'react';
import { Controller } from 'react-hook-form';
import { Input as AntInput } from 'antd';
import { FormInput } from './Style';

const Input = ({
  label,
  className,
  isFormControl = true,
  control,
  name,
  rules = {}
}) => {
  return isFormControl ? (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur } }) => (
        <FormInput
          className={className}
          label={label}
        >
          <AntInput onChange={onChange} onBlur={onBlur} />
        </FormInput>
      )}
    />
  ) : (
    <FormInput
      className={className}
      label={label}
    >
      <AntInput />
    </FormInput>
  )
}

export default memo(Input)
import React from 'react'
import { ModalStyles } from './style';

export default function CustomModal(props) {
    const {children, isModalOpen, setIsModalOpen, title} = props
  const handleCancel = () => {
        setIsModalOpen(false);
  };
  return (
    <ModalStyles
      title={title}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      width='90%'
    >
      {children}
    </ModalStyles>
  )
}

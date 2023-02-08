import { Button, Dropdown, Space } from 'antd'
import React from 'react'
import { BiCaretDown } from 'react-icons/bi'
import { MdDeleteOutline, MdOutlineRemoveRedEye } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'
import DocumentModal from './service/DocumentModal'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ExaminationModal from './service/ExaminationModal'

function ActionDropdown({ id, handleDelete, setIsModalOpen }) {
  const [openDocumentModal, setOpenDocumentModal] = useState(false);
  const [openExaminationModal, setOpenExaminationModal] = useState(false);
  const {t} = useTranslation();
  const showModal = () => {
    setOpenDocumentModal(true);
  };

  const items = [
    {
      label: <Space size='small' onClick={() => handleDelete(id)}>
        <MdDeleteOutline className='text-red-500 text-lg cursor-pointer' />
        <span>Delete</span>
      </Space>,
      key: '1',
    },
    {
      label: <Space size='small' onClick={() => setIsModalOpen(true)}>
        <FaEdit className="text-main-600 text-lg cursor-pointer" />
        <span>Edit</span>
      </Space>,
      key: '2',
    },
    {
      label: <Space size='small'>
        <MdOutlineRemoveRedEye className="text-black text-lg cursor-pointer" />
        <span>View</span>
      </Space>,
      key: '3'
    },
    {
      label: <Button
        className='bg-warning border-0 text-black hover:!text-black hover:opacity-90'
        onClick={() => showModal(true)}>Service</Button>,
      key: '4',
    },
    {
      label: <Button
        className='bg-main-500 border-0 w-full text-white hover:!text-white hover:opacity-90'
        onClick={() => setOpenExaminationModal(true)}>{t('layout.examination.examination')}</Button>,
      key: '5',
    },
  ];
  return (
    <>
      <Dropdown menu={{ items }} trigger={['click']}>
        <button type='button'>
          <Space size={4}>
            <span className='text-black-500 text-sm font-medium'>
              <BiCaretDown className='text-black text-lg ' />
            </span>
          </Space>
        </button>
      </Dropdown>
      <DocumentModal openDocumentModal={openDocumentModal} setOpenDocumentModal={setOpenDocumentModal} />
      {/* <MedicalModal openMedicalModal={openMedicalModal} setOpenMedicalModal={setOpenMedicalModal} /> */}
      <ExaminationModal openExaminationModal={openExaminationModal} setOpenExaminationModal={setOpenExaminationModal} />
    </>
  )
}

export default ActionDropdown
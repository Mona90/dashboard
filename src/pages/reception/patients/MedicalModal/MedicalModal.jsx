import { Modal, Tabs } from 'antd';
import React from 'react'
import CustomModal from '../../../../components/shared/customModal/CustomModal';
import MedicalService from './tabs/medicalService/MedialService';
import Operations from './tabs/Operations';
const items =[
  {
    label : 'Document',
    key: '1',
    children: 'test',
  },
  {
    label: 'Medical Service',
    key: '2',
    children: <MedicalService/>,
  },
  {
    label: 'operations',
    key: '3',
    children: <Operations/>,
  }
]
function MedicalModal({openMedicalModal, setOpenMedicalModal}) {

  return (
    <CustomModal isModalOpen={openMedicalModal} setIsModalOpen={setOpenMedicalModal}>
          <Tabs defaultActiveKey="2" items={items}/>
    </CustomModal>
  )
}

export default MedicalModal
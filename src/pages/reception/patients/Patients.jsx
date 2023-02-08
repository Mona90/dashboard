import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';

import Table from '../../../components/shared/table/Table';
import Create from "./actions/Create";
import ActionDropdown from "./ActionDropdown";

import { getPatients } from "../../../store/reception/patientsSlice";

import { PatientContainer } from './Style';


const Patients = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const patients = useSelector(state => state.patients);

  const [showCreatePatient, setShowCreatePatient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(null);

  const [page, setPage] = useState(1);
  const [size] = useState(15);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getPatients());
  }, [dispatch]);

  const defaultColumns = [
    {
      title: '#',
      dataIndex: 'id',
      width: 60,
    },
    {
      title: t('layout.reception.name'),
      dataIndex: 'ar_name',
      width: 'fit-content',
      editable: true,
    },
    {
      title: t('layout.reception.age'),
      dataIndex: 'age',
    },
    {
      title: t('layout.reception.gender'),
      dataIndex: 'gender',
    }, {
      title: t('layout.reception.phone'),
      dataIndex: 'phone',
    },
    {
      title: t('layout.reception.address'),
      dataIndex: 'address',
    },
    {
      title: t('layout.reception.nationality'),
      dataIndex: 'nationality',
    },
    {
      title: t('layout.reception.code'),
      dataIndex: 'code',
    }, {
      title: t('layout.reception.last_visit'),
      dataIndex: 'last_visit',
    },
    {
      title: t('layout.reception.insurance'),
      dataIndex: 'insurance',
    },
    {
      title: t('layout.reception.actions'),
      dataIndex: 'actions',
      render: (_, record) => (
        <ActionDropdown id={record.id} setIsModalOpen={setIsModalOpen} />
      ),
    },
  ];

  return (
    <PatientContainer>
      <div className='grid grid-cols-5 items-center'>
        <Button
          // variant="contained"
          className='addBtn col-start-1 col-end-2 w-fit'
          onClick={() => setShowCreatePatient(true)}
          size="large"
        >
          {t('layout.reception.add_patient')}
        </Button>

        {/* <Form.Item className='searchInput col-end-6 col-span-2' label={t("layout.reception.search_by")}>
          <Search onChange={(e) => setSearch(e.target.value)} className='' size='large' suffix={<IoIosSearch style={{ fontSize: 18, color: '#1890ff' }} />} />
        </Form.Item> */}
      </div>

      <Table
        columns={defaultColumns}
        dataSource={patients.data}
        page={page}
        size={size}
        total={patients.itemsCount}
        loading={patients.isLoading}
      />

      {showCreatePatient && <Create onClose={() => setShowCreatePatient(null)} />}
    </PatientContainer>
  )
}

export default Patients
import {
  Button,
  DatePicker,
  Divider,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
  Upload,
  TreeSelect
} from 'antd'
import { t } from 'i18next';
import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import CustomInput from '../../../../components/shared/customInput/CustomInput';
import { PatientModal } from '../Style';

import {
  MdAddCircle, MdDeleteOutline
} from 'react-icons/md'

import CInput from '../../../../components/shared/form/input/Input';

import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
const { TextArea } = Input;

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
  },
];


const CreateModal = ({ onClose }) => {
  const patients = useSelector(state => state.patients);

  const [patientImage, setPatientImage] = useState('No file chosen')
  const [row, setRow] = useState([{ key: 1 }])
  const [value, setValue] = useState();

  const { control, handleSubmit } = useForm();

  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  const addRow = () => {
    setRow([...row, { key: row.length + 1 }])
  }
  const removeRow = (index) => {
    const _data = [...row];
    _data.splice(index, 1);
    setRow(_data);
  };
  return (
    <PatientModal
      title="Add Patient"
      open={true}
      onCancel={onClose}
      footer={[
        <>
          <Button size='large' type="primary" danger className='bg-red' onClick={onClose}>Cancel</Button>
          <Button
            size='large' className='bg-success text-white hover:!text-white'
          >
            Create
          </Button>
        </>
      ]}
      width='90%'
    >
      <Form layout="vertical">
        <div className='grid grid-cols-4 gap-x-4 gap-y-6'>
          <CInput
            label="name"
            name="name"
            control={control}
          />
          <CustomInput label="Name" inputEl={<Input className='input' size='large' />} required={true} />
          <CustomInput label={t("Father Name")} inputEl={<Input className='input' size='large' />} required={true} />
          <CustomInput label={t("Grand Father Name")} inputEl={<Input className='input' size='large' />} required={true} />
          <CustomInput label={t("Sure Name")} inputEl={<Input className='input' size='large' />} required={true} />
          <CustomInput label={t("Date Of Birth")} inputEl={<DatePicker className='input w-full' size='large' />} required={true} />
          <div className='flex gap-x-4'>
            <CustomInput label={t("Age")} inputEl={<InputNumber className='input w-full' size='large' />} />
            <CustomInput label={t("gender")}
              className="select"
              inputEl={<Select
                defaultValue="male"
                className='capitalize input'
                style={{ width: '100%' }}
                size='large'
                suffixIcon={<BiChevronDown className="text-gary-200 text-xl" />}
                // onChange={handleChange}
                options={[
                  {
                    value: 'male',
                    label: 'Male',
                  },
                  {
                    value: 'female',
                    label: 'Female',
                  },
                ]}
              />} />
          </div>
          <CustomInput label={t("Phone")} inputEl={<Input className='input' size='large' />} required={true} />
          <CustomInput label={t("what's app")} inputEl={<Input className='input' size='large' />} required={false} />
          <CustomInput label={t("Governorate")} inputEl={<Input className='input' size='large' />} required={true} />
          <CustomInput label={t("Address")} inputEl={<Input className='input' size='large' />} required={false} />
          <CustomInput label={t("Nationality")} inputEl={<Input className='input' size='large' />} required={false} />
          <CustomInput label={t("Email")} inputEl={<Input className='input' type='email' size='large' />} required={false} />
        </div>
        <Divider />
        <div className='grid grid-cols-4 gap-x-4 gap-y-6'>
          <CustomInput label={t("Social Status")}
            className="select"
            inputEl={<Select
              className='capitalize input'
              style={{ width: '100%' }}
              suffixIcon={<BiChevronDown className="text-gary-200 text-xl" />}
              size='large'
              // onChange={handleChange}
              options={[
                {
                  value: 'single',
                  label: 'Single',
                },
                {
                  value: 'married',
                  label: 'Married',
                },
                {
                  value: 'divorced',
                  label: 'Divorced',
                },
              ]}
            />} />
          <CustomInput label={t("Job Title")} inputEl={<Input className='input' size='large' />} />
          <CustomInput label={t("NationalID")} inputEl={<Input className='input' size='large' />} />
          <CustomInput label={t("Passport")} inputEl={<Input className='input' size='large' />} />
          <CustomInput label={t("Website")} inputEl={<Input className='input' size='large' />} />
          <CustomInput label={t("Social Media")}
            className="select"
            inputEl={<Select
              // defaultValue="male"
              className='capitalize input'
              style={{ width: '100%' }}
              suffixIcon={<BiChevronDown className="text-gary-200 text-xl" />}
              size='large'
              // onChange={handleChange}
              options={[
                {
                  value: 'facebook',
                  label: 'Facebook',
                },
                {
                  value: 'tv',
                  label: 'TV',
                },
                {
                  value: 'patient',
                  label: 'Patient',
                },
                {
                  value: 'advertise',
                  label: 'Advertise',
                },
                {
                  value: 'employees',
                  label: 'Employees',
                },
              ]}
            />}
            required={false}
          />
          <CustomInput label={t("Patient Image")}
            inputEl={<Input
              className='input'
              readOnly
              size='large'
              addonAfter={<Upload showUploadList={false} onChange={(file) => setPatientImage(file.name)}
              >
                Browse
              </Upload>} />}
            required={false}
          />
          <CustomInput label={t("attach file")}
            inputEl={<Input readOnly size='large' addonAfter={<Upload showUploadList={false}>Browse</Upload>} />} />

        </div>
        <Divider />
        {row.map(r =>
          <div className='grid grid-cols-4 gap-x-4 gap-y-6 mb-4' key={r.key} >
            <CustomInput label="الجهة"
              className='select'
              inputEl={<TreeSelect
                className='input'
                size="large"
                value={value}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={treeData}
                placeholder="Please select"
                treeDefaultExpandAll
                onChange={onChange}
              />}
              required={false} />
            <CustomInput label="رقم الكارت" inputEl={<Input size="large" />} required={true} />
            <CustomInput
              label="تاريخ الانتهاء"
              className="select"
              inputEl={<DatePicker
                className='input w-full'
                size='large' />}
              required={true}
            />
            <CustomInput
              label={t("Note")}
              inputEl={<TextArea className='input' placeholder="leave a message here..." size='small' allowClear />}
              required={false}
            />
          </div>
        )}
        <Space>
          <Space className="cursor-pointer" onClick={() => addRow()}><MdAddCircle className='text-xl' /><span>add</span></Space>
          {row.length !== 1 ?
            <Space className="cursor-pointer" onClick={() => removeRow(row.length - 1)}>
              <MdDeleteOutline className='text-red-500 text-xl' />
              <span>Delete</span>
            </Space>
            : null}
        </Space>
      </Form>
    </PatientModal>
  )
}

export default CreateModal

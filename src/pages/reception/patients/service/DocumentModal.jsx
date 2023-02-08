import {
  Button,
  DatePicker,
  Form,
  Select,
  TimePicker,
  Input,
  Divider,
  Modal,
  Tabs,
  Checkbox,
  Space
} from 'antd'
import React from 'react'
import { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import CustomInput from '../../../../components/shared/customInput/CustomInput';
import PatientInfo from '../components/PatientInfo';
import { MdAddCircle, MdDeleteOutline } from 'react-icons/md'
import CustomTable from '../../../../components/shared/table/Table';

dayjs.extend(customParseFormat);
// const selectData = [
//     {
//         mainLabel: 'type'
//     },
//     {
//         mainLabel: 'clinic'
//     },
//     {
//         mainLabel: 'doctor'
//     },
//     {
//         mainLabel: 'nursing'
//     }
// ]
const paymentData = [
  {
    mainLabel: 'Invoice Status',
    input: Select,
  },
  {
    mainLabel: 'Discount',
    input: Select,
    width: 50
  },
  {
    mainLabel: 'Value',
    input: Input,
  },
  {
    mainLabel: 'discount dependency',
    input: Select,
  },
  {
    mainLabel: 'fixed tax',
    input: Select,
  },
  {
    mainLabel: 'extra tax',
    input: Select,
  },
  {
    mainLabel: 'Safe Account',
    input: Select,
  },
  {
    mainLabel: 'Payment type',
    input: Select,
  },
]
function DocumentModal({ openDocumentModal, setOpenDocumentModal }) {
  const [rows, setRows] = useState([{ key: 1 }])
  const [dataSource, setDataSource] = useState([])
  const [showTime, setShowTime] = useState(false)

  const handleOk = () => {
    setOpenDocumentModal(false);
  };
  const handleCancel = () => {
    setOpenDocumentModal(false);
  };
  const addRow = () => {
    setRows([...rows, { key: rows.length + 1 }])
  }
  const removeRow = (id) => {
    const ndata = rows.filter(r => id !== r.key)
    setRows(ndata)
  };

  const columns = [
    {
      title: 'م',
      dataIndex: 'key',
      width: 60,
    },
    {
      title: 'الميعاد',
      dataIndex: 'time',
      width: 'fit-content',
      editable: true,
    },
    {
      title: 'نوع الكشف',
      dataIndex: 'operationType',
    },
    {
      title: 'اسم الكشف',
      dataIndex: 'operationName',
    }, {
      title: 'القسم',
      dataIndex: 'section',
    },
    {
      title: 'الطبيب',
      dataIndex: 'doctor',
    }, {
      title: 'الكود',
      dataIndex: 'code',
    },
    {
      title: 'السعر',
      dataIndex: 'price',

    },
    {
      title: 'التخدير',
      dataIndex: 'narcosis',

    },
    {
      title: 'المجموع',
      dataIndex: 'total',

    },
    {
      title: 'الاضافة / الضريبة +',
      dataIndex: 'taxes',
      width: 'fit-content',

    },
    {
      title: 'الاجمالى',
      dataIndex: 'totalAfterTaxes',

    },
    {
      title: 'خصم التأمين -%',
      dataIndex: 'insuranceDiscount',

    },
    {
      title: 'المبلغ',
      dataIndex: 'amountAfetrDiscount',

    },
    {
      title: 'المطلوب',
      dataIndex: 'payment',

    },
  ];
  return (
    <Modal
      title="Medical"
      open={openDocumentModal}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <>
          <Button size='large' type="primary" className='bg-main-500' onClick={() => setOpenDocumentModal(false)}>Save</Button>
          {/* <Button size='large' className='bg-success text-white hover:!text-white' >Pay&Print</Button> */}
        </>
      ]}
      width='90%'
    >
      <Tabs
        defaultActiveKey="1"
        // onChange={onChange}
        items={[
          {
            label: `document`,
            key: '1',
            // children: <DocumentModal/>,
          },
          {
            label: `Medical Service`,
            key: '2',
            children: `Content of Tab Pane 2`,
          },
          {
            label: `Operations`,
            key: '3',
            children: `Content of Tab Pane 3`,
          },
          {
            label: `Consumables / supplies`,
            key: '4',
            children: '...'
          },
          {
            label: `Pharmacy`,
            key: '5',
            children: '...'
          },
          {
            label: `Lab`,
            key: '6',
            children: '...'
          },
          {
            label: `rays`,
            key: '7',
            children: '...'
          },
          {
            label: `deposit`,
            key: '8',
            children: '...'
          },
          {
            label: `invoice`,
            key: '9',
            children: '...'
          },
        ]}
      />
      <PatientInfo />
      <Form layout="vertical" className='space-y-4'>
        {rows.map(row =>
          <div className='grid grid-cols-4 gap-3 items-end' key={row.key}>
            <CustomInput
              label='نوع الحالة'
              inputEl={<Select
                placeholder="Select"
                className='capitalize input'
                style={{ width: '100%' }}
                size='medium'
                suffixIcon={<BiChevronDown className="text-gary-200 text-xl" />}
                // onChange={handleChange}
                options={[
                  {
                    value: 'value1',
                    label: 'value1',
                  },
                  {
                    value: 'value2',
                    label: 'value2',
                  },
                ]}
              />}
              required={true}
            />
            <CustomInput
              label=' جهة التحويل'
              inputEl={<Select
                className='capitalize input'
                style={{ width: '100%' }}
                size='medium'
                suffixIcon={<BiChevronDown className="text-gary-200 text-xl" />}
                // onChange={handleChange}
                options={[
                  {
                    value: 'value1',
                    label: 'value1',
                  },
                  {
                    value: 'value2',
                    label: 'value2',
                  },
                ]}
              />}
              required={true}
            />

            <CustomInput
              label='تاريخ الانتهاء'
              inputEl={<DatePicker className='w-full' size='medium' />}
              required={false} />
            {row.key !== 1 ?
              <Button
                size='medium'
                className='deleteBtn text-white flex items-center gap-x-1'
                onClick={() => removeRow(row.key)}
              >
                <MdDeleteOutline className='text-xl' />
                Delete
              </Button>
              : null}
          </div>
        )}
        <Space className="cursor-pointer" onClick={() => addRow()}><MdAddCircle className='text-xl' /><span>add</span></Space>
        <div className='grid grid-cols-4 gap-3'>
          <CustomInput
            label='القسم الطبي'
            inputEl={<Select
              className='capitalize input'
              style={{ width: '100%' }}
              size='medium'
              suffixIcon={<BiChevronDown className="text-gary-200 text-xl" />}
              // onChange={handleChange}
              options={[
                {
                  value: 'value1',
                  label: 'value1',
                },
                {
                  value: 'value2',
                  label: 'value2',
                },
              ]}
            />}
            required={true}
          />

          <CustomInput
            label='التخصص'
            inputEl={<Select
              className='capitalize input'
              style={{ width: '100%' }}
              size='medium'
              suffixIcon={<BiChevronDown className="text-gary-200 text-xl" />}
              // onChange={handleChange}
              options={[
                {
                  value: 'value1',
                  label: 'value1',
                },
                {
                  value: 'value2',
                  label: 'value2',
                },
              ]}
            />}
            required={true}
          />

          <CustomInput
            label='الطبيب'
            inputEl={<Select
              className='capitalize input'
              style={{ width: '100%' }}
              size='medium'
              suffixIcon={<BiChevronDown className="text-gary-200 text-xl" />}
              // onChange={handleChange}
              options={[
                {
                  value: 'value1',
                  label: 'value1',
                },
                {
                  value: 'value2',
                  label: 'value2',
                },
              ]}
            />}
            required={true}
          />

          <CustomInput
            label='التمريض'
            inputEl={<Select
              className='capitalize input'
              style={{ width: '100%' }}
              size='medium'
              suffixIcon={<BiChevronDown className="text-gary-200 text-xl" />}
              // onChange={handleChange}
              options={[
                {
                  value: 'value1',
                  label: 'value1',
                },
                {
                  value: 'value2',
                  label: 'value2',
                },
              ]}
            />}
            required={false} />

          <CustomInput
            label='التمريض 2'
            inputEl={<Select
              className='capitalize input'
              style={{ width: '100%' }}
              size='medium'
              suffixIcon={<BiChevronDown className="text-gary-200 text-xl" />}
              // onChange={handleChange}
              options={[
                {
                  value: 'value1',
                  label: 'value1',
                },
                {
                  value: 'value2',
                  label: 'value2',
                },
              ]}
            />}
            required={false} />
        </div>
        <div className='grid grid-cols-4 items-end gap-x-4 gap-y-6 mb-8'>
          <CustomInput
            label="نوع الكشف"
            inputEl={<Select
              className='capitalize input'
              style={{ width: '100%' }}
              size='medium'
              suffixIcon={<BiChevronDown className="text-gary-200 text-xl" />}
              // onChange={handleChange}
              options={[
                {
                  value: 'value1',
                  label: 'value1',
                },
                {
                  value: 'value2',
                  label: 'value2',
                },
              ]}
            />}
            required={true} />
          <CustomInput
            label='اسم الكشف'
            inputEl={<Select
              className='capitalize input'
              style={{ width: '100%' }}
              size='medium'
              suffixIcon={<BiChevronDown className="text-gary-200 text-xl" />}
              // onChange={handleChange}
              options={[
                {
                  value: 'value1',
                  label: 'value1',
                },
                {
                  value: 'value2',
                  label: 'value2',
                },
              ]}
            />}
            required={true} />

          <Checkbox >موافقة</Checkbox>


        </div>
        <Button size='medium' className='searchBtn' >Search</Button>
      </Form>
      <div className='flex justify-between items-center mb-4'>
        <Checkbox onChange={() => setShowTime(!showTime)}>كشف اليوم؟</Checkbox>
        <Space size='large' >
          <p className='text-main[400]'>Medical examination : <span>7</span></p>
          <p className='text-red-500'> Following : <span>3</span></p>
          <p className='text-green'>available : <span>2</span></p>
        </Space>
      </div>
      {showTime && <TimePicker defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />}
      <div className='grid grid-cols-4 gap-4 mb-4'>
        <CustomInput label='حالة الفاتورة'
          inputEl={<Select
            className='capitalize '
            size='medium'
            suffixIcon={<BiChevronDown className="text-gary-200 text-xl" />}
            // onChange={handleChange}
            options={[
              {
                value: 'value1',
                label: 'value1',
              },
              {
                value: 'value2',
                label: 'value2',
              },
            ]}
          />}
          required={true}
        />
        <CustomInput label='قائمة الاسعار'
          inputEl={<Select
            className='capitalize'
            size='medium'
            suffixIcon={<BiChevronDown className="text-gary-200 text-xl" />}
            // onChange={handleChange}
            options={[
              {
                value: 'value1',
                label: 'value1',
              },
              {
                value: 'value2',
                label: 'value2',
              },
            ]}
          />}
          required={true}
        />
        <CustomInput label='رقم التذكرة' inputEl={<Input size="medium" />} required={false} />
        <CustomInput label='تاريخ الاضافة' inputEl={<DatePicker size="medium" />} required={true} />
      </div>
      <CustomTable dataSource={dataSource} columns={columns} />
      <Divider />
      <Form layout='vertical'>
        <div className='flex gap-4 items-center flex-wrap'>
          {paymentData.map(el =>
            <Form.Item label={el.mainLabel} className="capitalize mb-0" required>
              <el.input
                // defaultValue="lucy"
                width={el.width && el.width}
                clearIcon={<BiChevronDown className="text-gary-200" />}
                style={{ width: 200 }}
                options={[
                  {
                    value: 'lucy',
                    label: 'Lucy',
                  },
                  {
                    value: 'lucy',
                    label: 'Lucy',
                  },
                ]}
              />
            </Form.Item>
          )}
        </div>
      </Form>
    </Modal>
  )
}

export default DocumentModal
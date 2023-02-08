import React from 'react'
import { Form, Input, Select, TimePicker, Card } from 'antd'
import CustomInput from '../../../components/shared/customInput/CustomInput'
import { HiChevronDown } from 'react-icons/hi'
import { IoIosSearch } from 'react-icons/io'
import { useState } from 'react'
import Table from '../../../components/shared/table/Table'
import ActionDropdown from './ActionDropdown'

const Search = Input
const selectInput = [
  {
    label: 'service natural',
    key: '1'
  },
  {
    label: 'medical section',
    key: '2',
  },
  {
    label: 'major',
    key: '3',
  },
  {
    label: 'type',
    key: '4',
  },
  {
    label: 'service',
    key: '5',
  },
  {
    label: 'doctor',
    key: '6'
  }
]

export default function Appointments() {
  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      name: '',
      age: '',
      gender: '',
      phone: '',
      address: '',
      nationality: '',
      code: '',
      last_visit: '',
      insurance: '',
    }
  ]);
  const columns = [
    // {
    //     title: 'No',
    //     dataIndex: 'key',
    //     width:60,
    // },
    {
      title: 'name',
      dataIndex: 'name',
      width: 'fit-content',
      editable: true,
    },
    {
      title: 'age',
      dataIndex: 'age',
    },
    {
      title: 'gender',
      dataIndex: 'gender',
    }, {
      title: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'address',
      dataIndex: 'address',
    },
    {
      title: 'nationality',
      dataIndex: 'nationality',
    },
    {
      title: 'code',
      dataIndex: 'code',
    }, {
      title: 'last visit',
      dataIndex: 'last_visit',
    },
    {
      title: 'insurance',
      dataIndex: 'insurance',

    },
    {
      title: 'actions',
      dataIndex: 'actions',
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <ActionDropdown id={record.key} handleDelete={handleDelete} />
        ) : null,
    },
  ];
  const handleDelete = (key) => {

    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };
  return (
    <Card className='space-y-4'>
      <div className="grid grid-cols-3 items-center" >
        <CustomInput label='Following List - Operstion List' inputEl={<Select
          // defaultValue="male"
          className='capitalize col-start-1 col-end-3'
          suffixIcon={<HiChevronDown className="text-gary-200 text-xl" />}
          size='medium'
          // onChange={handleChange}
          options={[
            {
              value: 'value1',
              label: 'value 1',
            },
            {
              value: 'value2',
              label: 'value 2',
            },

          ]}
        />} />
        <CustomInput
          label='Search'
          className='capitalize col-end-4 col-span-1'
          inputEl={<Search placeholder="search..." size='medium' suffix={<IoIosSearch style={{ fontSize: 18, color: '#1890ff' }} />} />}
        />


      </div>
      <Form layout='vartical'>
        <div className='grid grid-cols-4 gap-4'>
          {selectInput.map(input =>
            <CustomInput label={input.label} inputEl={<Select
              // defaultValue="male"
              className='capitalize col-start-1 col-end-3'
              suffixIcon={<HiChevronDown className="text-gary-200 text-xl" />}
              size='medium'
              // onChange={handleChange}
              options={[
                {
                  value: 'value1',
                  label: 'value 1',
                },
                {
                  value: 'value2',
                  label: 'value 2',
                },

              ]}
            />} />
          )}
        </div>
      </Form>
      <div>
        <h4 className='mb-2 capitalize'>The Appointments</h4>
        <CustomInput label="" inputEl={<TimePicker.RangePicker size='medium' />} />
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </Card>
  )
}

import { Button, DatePicker, Form, Checkbox, Modal, Select, Divider, Table } from 'antd';
import React, { useState } from 'react'
import {BiChevronDown} from 'react-icons/bi'
import CustomInput from '../../../../components/shared/customInput/CustomInput';
import { useTranslation } from 'react-i18next';

function ExaminationModal({openExaminationModal, setOpenExaminationModal}) {
  const {t} = useTranslation()
  const [show, setShow] = useState(false)
  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      serviceTime: 'Edward King 0',
      serviceType: '32',
      serviceName: 'London, Park Lane no. 0',
      section: '256632',
      doctor: '',
      code: '',
      price: '',
      number: '',
      total: '',
      taxes: '',
      totalAfterTaxes: '',
      insuranceDiscount: '',
      amountAfetrDiscount: '',
      payment: '',
    }
  ]);
  const columns = [
    {
        title: 'م',
        dataIndex: 'key',
        width:60,
    },
    {
      title: 'وقت الخدمة',
      dataIndex: 'serviceTime',
      width: 'fit-content',
      editable: true,
    },
    {
      title: 'نوع الخدمة',
      dataIndex: 'serviceType',
    },
    {
      title: 'اسم الخدمة',
      dataIndex: 'serviceName',
    },{
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
      title: 'العدد',
      dataIndex: 'number',

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

    // {
    //   title: 'actions',
    //   dataIndex: 'actions',
      // render: (_, record) =>
      //   dataSource.length >= 1 ? (
      //     <ActionDropdown key={record.key} handleDelete={handleDelete} setIsModalOpen={setIsModalOpen}/>
      //   ) : null,
    // },
  ];
    const handleCancel = () => {
        setOpenExaminationModal(false);
      };
      const handleChange = (value)=>{

        console.log('value', value)
        if(value === "value2"){
          setShow(true)
        }else{
          setShow(false)
        }
      }
  return (
    <Modal
        title={t('layout.examination.examination')}
        open={openExaminationModal}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width='90%'
        >
        <ul className='flex items-center justify-between bg-black py-2 px-3'>
            <li className='text-gray-300 text-md'>patient Name: <span className='text-main-yellow-600 font-bold text-sm'>Ahmed Mahmoud</span></li>
            <li className='text-gray-300 text-md'>Age: <span className='text-main-yellow-600 font-bold text-sm'>55</span></li>
            <li className='text-gray-300 text-md'>Gender: <span className='text-main-yellow-600 font-bold text-sm'>Male</span></li>
            <li className='text-gray-300 text-md'>Tel: <span className='text-main-yellow-600 font-bold text-sm'>012345678901</span></li>
            <li className='text-gray-300 text-md'>Address: <span className='text-main-yellow-600 font-bold text-sm'>Cairo, Egypt</span></li>
            <li className='text-gray-300 text-md'>Nationality: <span className='text-main-yellow-600 font-bold text-sm'>Egyptian</span></li>
            <li className='text-gray-300 text-md'>Code: <span className='text-main-yellow-600 font-bold text-sm'>11121459785</span></li>

            <li className='text-gray-300 text-md'>last visit: <span className='text-main-yellow-600 font-bold text-sm'>12-12-2020</span></li>
        </ul>
        {/* <Tabs
          defaultActiveKey="1"
          // onChange={onChange}
           items={[
            {
              label: `Medical Service`,
              key: '1',
              children: <MedicalService/>,
            },
            {
              label: `Entry/residence`,
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
        /> */}
        
        <Form layout="vertical">
          <div className='grid grid-cols-4 gap-x-4 gap-y-6 mt-8'>
            <CustomInput 
            label='نوع الحالة' 
            inputEl={ <Select
                placeholder="Select"
                className='capitalize input'
                style={{ width: '100%' }}
                size='large'
                suffixIcon={<BiChevronDown className="text-gary-200 text-xl"/>}
                onChange={handleChange}
                options={[
                    {
                    value: 'value1',
                    label: 'مباشر',
                    },
                    {
                    value: 'value2',
                    label: 'تحويل',
                    },
                    {
                    value: 'value3',
                    label: 'تأمين',
                    },
                    {
                    value: 'value4',
                    label: 'طوارق',
                    },
                ]}
            />}/>
            {show &&  
            <CustomInput 
              label=' جهة التحويل' 
              inputEl={ <Select
                    className='capitalize input'
                  style={{ width: '100%' }}
                  size='large'
                  suffixIcon={<BiChevronDown className="text-gary-200 text-xl"/>}
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
              />}/>
              }
           
            
              <CustomInput 
              label='تاريخ الانتهاء' 
              inputEl={ <DatePicker className='w-full' size='large' />
            }/>
            
              <CustomInput 
              label='القسم الطبي' 
              inputEl={ <Select
                    className='capitalize input'
                  style={{ width: '100%' }}
                  size='large'
                  suffixIcon={<BiChevronDown className="text-gary-200 text-xl"/>}
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
              />}/>
            
              <CustomInput 
              label='التخصص' 
              inputEl={ <Select
                    className='capitalize input'
                  style={{ width: '100%' }}
                  size='large'
                  suffixIcon={<BiChevronDown className="text-gary-200 text-xl"/>}
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
              />}/>
            
              <CustomInput 
              label='الطبيب' 
              inputEl={ <Select
                    className='capitalize input'
                  style={{ width: '100%' }}
                  size='large'
                  suffixIcon={<BiChevronDown className="text-gary-200 text-xl"/>}
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
              />}/>
            
              <CustomInput 
              label='التمريض' 
              inputEl={ <Select
                    className='capitalize input'
                  style={{ width: '100%' }}
                  size='large'
                  suffixIcon={<BiChevronDown className="text-gary-200 text-xl"/>}
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
              />}/>
            
              <CustomInput 
              label='التمريض 2' 
              inputEl={ <Select
                    className='capitalize input'
                  style={{ width: '100%' }}
                  size='large'
                  suffixIcon={<BiChevronDown className="text-gary-200 text-xl"/>}
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
              />}/>
          </div>
          <Divider/>
          <div className='grid grid-cols-4 gap-x-4 gap-y-6 mb-8'>
            <CustomInput 
              label='اسم الحالة' 
              inputEl={ <Select
                    className='capitalize input'
                  style={{ width: '100%' }}
                  size='large'
                  suffixIcon={<BiChevronDown className="text-gary-200 text-xl"/>}
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
              />}/>
              <CustomInput 
              label='نوع الخدمة' 
              inputEl={ <Select
                    className='capitalize input'
                  style={{ width: '100%' }}
                  size='large'
                  suffixIcon={<BiChevronDown className="text-gary-200 text-xl"/>}
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
              />}/>
            
              <Checkbox >موافقة</Checkbox>
            
            
          </div>
         <Button size='large' >Search</Button>
        </Form>
        <Table
            className='text-center patientTable'
            bordered
            dataSource={dataSource}
            columns={columns}
            scroll={{ x: 1200 }}
        />
    </Modal>
  )
}

export default ExaminationModal
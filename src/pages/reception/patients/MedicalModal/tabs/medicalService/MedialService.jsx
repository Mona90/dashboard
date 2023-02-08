import { Button, DatePicker, Form, Checkbox, Select, Divider, Input, Space } from 'antd';
import React, { useState } from 'react'
import CustomInput from '../../../../../../components/shared/customInput/CustomInput'
import {BiChevronDown} from 'react-icons/bi'
import CustomTable from '../../../../../../components/shared/table/Table';
import {MdAddCircle, MdDeleteOutline} from 'react-icons/md'
import { Content } from './style';
import PatientInfo from '../../../components/PatientInfo';

function MedicalService() {
    const [rows, setRows] = useState([{key: 1}])
    const [dataSource, setDataSource] = useState([
        {
        key: '1',
        serviceTime: '',
        serviceType: '',
        serviceName: '',
        section: '',
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
     const addRow = () => {
       setRows([...rows, {key: rows.length + 1}])
    }
    const removeRow = (id) => {
        // const _data = [...rows];
        // _data.splice(index, 1);
        // setRows(_data);
        const ndata = rows.filter(r=> id !== r.key)
        setRows(ndata)
    };
  return (
    <Content>
        <PatientInfo/>
        <Form layout="vertical" className='space-y-4'>
            {rows.map(row=>
                <div className='grid grid-cols-4 gap-3 items-end' key={row.key}>
                    <CustomInput 
                    label='نوع الحالة' 
                    inputEl={ <Select
                        placeholder="Select"
                        className='capitalize input'
                        style={{ width: '100%' }}
                        size='medium'
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
                    />}
                    required={true}
                    />
                    <CustomInput 
                    label=' جهة التحويل' 
                    inputEl={ <Select
                        className='capitalize input'
                        style={{ width: '100%' }}
                        size='medium'
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
                    />}
                    required={true}
                    />
                
                    <CustomInput 
                    label='تاريخ الانتهاء'
                    inputEl={ <DatePicker className='w-full' size='medium' />}
                    required={false}/>
                    {row.key !== 1 ? 
                        <Button 
                            size='medium' 
                            className='deleteBtn text-white flex items-center gap-x-1' 
                            onClick={()=>removeRow(row.key)}
                        >
                            <MdDeleteOutline className='text-xl'/>
                            Delete
                        </Button>
                    : null}
                </div>
            )}
            <Space className="cursor-pointer" onClick={()=>addRow()}><MdAddCircle className='text-xl'/><span>add</span></Space>
            <div className='grid grid-cols-4 gap-3'>
                <CustomInput 
                label='القسم الطبي' 
                inputEl={ <Select
                    className='capitalize input'
                    style={{ width: '100%' }}
                    size='medium'
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
                />}
                required={true}
                />
            
                <CustomInput 
                label='التخصص' 
                inputEl={ <Select
                    className='capitalize input'
                    style={{ width: '100%' }}
                    size='medium'
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
                />}
                required={true}
                />
            
                <CustomInput 
                label='الطبيب' 
                inputEl={ <Select
                    className='capitalize input'
                    style={{ width: '100%' }}
                    size='medium'
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
                />}
                required={true}
                />
            
                <CustomInput 
                label='التمريض' 
                inputEl={ <Select
                    className='capitalize input'
                    style={{ width: '100%' }}
                    size='medium'
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
                />}
                required={false}/>
            
                <CustomInput 
                label='التمريض 2' 
                inputEl={ <Select
                    className='capitalize input'
                    style={{ width: '100%' }}
                    size='medium'
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
                />}
                required={false}/>
            </div>
            <div className='grid grid-cols-4 items-end gap-x-4 gap-y-6 mb-8'>
                <CustomInput 
                label="نوع الخدمة" 
                inputEl={ <Select
                    className='capitalize input'
                    style={{ width: '100%' }}
                    size='medium'
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
                />}
                required={true}/>
                <CustomInput 
                label='اسم الخدمة' 
                inputEl={ <Select
                    className='capitalize input'
                    style={{ width: '100%' }}
                    size='medium'
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
                />}
                required={true}/>
            
                <Checkbox >موافقة</Checkbox>
            
            
            </div>
            <Button size='medium' className='searchBtn' >Search</Button>
        </Form>
        <Divider/>
        <div className='grid grid-cols-4 gap-4 mb-4'>
            <CustomInput label='حالة الفاتورة' 
                inputEl={<Select
                    className='capitalize '
                    size='medium'
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
                />}
                required={true}
                />
            <CustomInput label='قائمة الاسعار' 
                inputEl={<Select
                    className='capitalize'
                    size='medium'
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
                />}
                required={true}
            />
            <CustomInput label='رقم التذكرة' inputEl={<Input size="medium"/>} required={false}/>
            <CustomInput label='تاريخ الاضافة' inputEl={<DatePicker size="medium" />} required={true}/>
        </div>
        <CustomTable dataSource={dataSource} columns={columns}/>
    </Content>
  )
}

export default MedicalService
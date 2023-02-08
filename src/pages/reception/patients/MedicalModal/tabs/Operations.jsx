import { Button, Checkbox, DatePicker, Divider, Form, Select, TimePicker, Space, Input } from 'antd'
import React, { useState } from 'react'
import PatientInfo from '../../components/PatientInfo'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import CustomInput from '../../../../../components/shared/customInput/CustomInput';
import {BiChevronDown} from 'react-icons/bi'
import {MdAddCircle, MdDeleteOutline} from 'react-icons/md'
import CustomTable from '../../../../../components/shared/table/Table';
dayjs.extend(customParseFormat);

function Operations() {
    const [rows, setRows] = useState([{key: 1}])
    const [showTime, setShowTime]= useState(false)
    const [dataSource, setDataSource] = useState([
        {
        key: '1',
        time: '',
        operationType: '',
        operationName: '',
        section: '',
        doctor: '',
        code: '',
        price: '',
        narcosis: '',
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
        title: 'الميعاد',
        dataIndex: 'time',
        width: 'fit-content',
        editable: true,
        },
        {
        title: 'نوع العملية',
        dataIndex: 'operationType',
        },
        {
        title: 'اسم العملية',
        dataIndex: 'operationName',
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
    const addRow = () => {
       setRows([...rows, {key: rows.length + 1}])
    }
    const removeRow = (id) => {
        const ndata = rows.filter(r=> id !== r.key)
        setRows(ndata)
    };
  return (
    <div>
        <PatientInfo/>
        <Form layout="vertical" className='space-y-4'>
            {rows.map(row=>
                <div className='grid grid-cols-4 gap-4 items-end' key={row.key}>
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
            <div className='grid grid-cols-4 gap-4'>
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
                label='اسم اللستة' 
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
                required={false}
                />
            
                <CustomInput 
                label='نوع العملية' 
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
                label='اسم العملية' 
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
            </div>
            <div className='grid grid-cols-4 items-end gap-x-4 gap-y-6 mb-8'>
                <CustomInput 
                label="الطبيب" 
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
                label='2 التمريض' 
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
                <Checkbox >التخدير</Checkbox>
            
            
            </div>
            <Button size='medium' className='searchBtn' >Search</Button>
        </Form>
        <Divider/>
        <div className='flex justify-between items-center mb-4'>
            <Checkbox onChange={()=> setShowTime(!showTime)}>Operations for today?</Checkbox>
            <Space size='large' >
                <p className='text-red-500'> operations : <span>7</span></p>
                <p className='text-green'>available : <span>2</span></p>
            </Space>
        </div>
        {showTime && <TimePicker defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />} 
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

    </div>
  )
}

export default Operations
import { Button, Dropdown, Space } from 'antd';
import React from 'react'
import { BiCaretDown} from 'react-icons/bi'
import { MdDeleteOutline, MdOutlineRemoveRedEye } from 'react-icons/md'
import {FaEdit} from 'react-icons/fa'

export default function ActionDropdown(id, handleDelete) {
    const items = [
    {
    label: <Button 
            className='bg-warning border-0 text-black hover:!text-black hover:opacity-90 w-full'
            >Enter</Button>,
    key: '1',
    },
    {
    label: <Button 
    className='bg-main-500 border-0 text-white hover:!text-white hover:opacity-90'
    >Services</Button>,
    key: '2',
    },
    {
    label: <Space size='small'>
                <MdOutlineRemoveRedEye className="text-black text-lg cursor-pointer"/>
                <span>View</span>
            </Space>,
    key: '3'
    },
    {
    label: <Space size='small'>
                <FaEdit className="text-main-600 text-lg cursor-pointer"/>
                <span>Edit</span>
            </Space>,
    key: '4',
    },
    {
    label: <Space size='small' onClick={() => handleDelete(id)}>
                <MdDeleteOutline className='text-red-500 text-lg cursor-pointer'/>
                <span>Delete</span>
            </Space>,
    key: '5',
    }
    
    ];
  return (
    <Dropdown
        menu={{
        items,
        }}
        trigger={['click']}
    >
        <button type='button'>
            <Space size={4}>
                <span className='text-black-500 text-sm font-medium'>
                    <BiCaretDown className='text-black text-lg '/>

                </span>
            </Space>
        </button>
    </Dropdown>
  )
}

import * as React from 'react';
import PropTypes from "prop-types";
// import { BtnStyle } from './style';
import { Dropdown, Space } from 'antd';
import {HiChevronDown} from 'react-icons/hi'

export default function CustomDropdwon({items, isOpen, setIsOpen, name}) {

  return (
    <>
    <Dropdown menu={{ items }} trigger={['click']}>
      <button>
        <Space>
          <span className='font-medium text-main-500'>{name}</span>
          <HiChevronDown className='text-main-500 text-2xl' />
        </Space>
      </button>
    </Dropdown>
    </>
    
  );
}

CustomDropdwon.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};
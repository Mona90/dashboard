import { Badge, Space } from 'antd'
import React from 'react'
import { BiMessageDetail } from 'react-icons/bi'
import { RiFileListLine } from 'react-icons/ri'
import { BsFillPersonPlusFill } from 'react-icons/bs'
import { MdMenu } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
import CustomDropdwon from '../../shared/customDropdown/CustomDropdwon'
import { HeaderContent } from './Style'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../../../store/sidebar/sidebarSlice'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../../store/auth/authSlice'

export default function Header() {
  const isExtend = useSelector(state => state.sidebar.isActive)
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout())
    navigate('/login');
  }
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    document.body.dir = i18n.dir();
  }
  const langItems = [
    {
      label: <span className='cursor-pointer block font-medium' onClick={() => changeLanguage('en')}>EN</span>,
      key: '0',
    },
    {
      label: <span className='cursor-pointer block font-medium' onClick={() => changeLanguage('ar')}>AR</span>,
      key: '1',
    }
  ];
  const userList = [
    {
      label: <span>Profile</span>,
      key: '0',
    },
    {
      label: <span>My account</span>,
      key: '1'
    },
    {
      label: <span as="button" type="button" onClick={handleLogout}>Logout</span>,
      key: '2',
    }
  ]
  return (
    <HeaderContent className='border-b border-gray-200 shadow-sm'>
      <div className='container py-4 flex justify-between items-center'>
        <MdMenu
          className={`text-black text-2xl cursor-pointer ${isExtend ? 'block' : 'hidden'}`}
          onClick={() => dispatch(toggleSidebar(!isExtend))} />
        <Space size="large" className='control-btns'>
          <Badge
            color='#F5222D'
            count={1}
            showZero
            size="small"
            shape="square"
          >
            <BiMessageDetail className='text-lg text-main-600' />
          </Badge>
          <Badge
            color='#F5222D'
            count={1}
            showZero
            size="small"
            shape="square"
          >
            <RiFileListLine className='text-lg text-main-600' />
          </Badge>
          <Badge
            color='#F5222D'
            count={1}
            showZero
            size="small"
            shape="square"
          >
            <BsFillPersonPlusFill className='text-lg text-main-600' />
          </Badge>
          <CustomDropdwon items={langItems} name={t('layout.header.language')} />
          <CustomDropdwon items={userList} name={t('layout.header.user')} />
        </Space>
      </div>

    </HeaderContent>
  )
}

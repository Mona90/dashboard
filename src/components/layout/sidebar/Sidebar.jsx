import React from 'react'
import { NavLink } from 'react-router-dom'
import {MdDashboard, MdOutlineReceiptLong} from 'react-icons/md'
import { IoIosPeople } from 'react-icons/io'
import { useTranslation } from 'react-i18next'
import logo from '../../../assets/images/logo.png'
import { Divider } from 'antd'
import { 
  FaStethoscope, 
  FaProcedures,
  FaUserInjured, 
  FaClipboardList,
  FaStoreAlt,
  FaCapsules,
  FaXRay,
  FaBriefcaseMedical,
  FaCogs
 } from 'react-icons/fa'
import { ImLab } from 'react-icons/im'
import {MdMenu} from 'react-icons/md'
import { SideContainer } from './Style'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../../../store/sidebar/sidebarSlice'

const sidebarLinks=[
  {
    key:'0',
    path:"/",
    text:'layout.sidebar.dashboard',
    icon: MdDashboard,
 }, {
    key:'1',
    path:"/reception",
    text:'layout.sidebar.reception',
    icon: MdOutlineReceiptLong,
 }, {
    key:'2',
    path:"/employees",
    text:'layout.sidebar.employees',
    icon: IoIosPeople,
 }, {
    key:'3',
    path:"/clinic",
    text:'layout.sidebar.clinic',
    icon: FaStethoscope
 }, {
    key:'4',
    path:"/internal_section",
    text:'layout.sidebar.internal_section',
    icon: FaProcedures

 }, {
    key:'5',
    path:"/patient",
    text:'layout.sidebar.patient',
    icon: FaUserInjured
 }, {
    key:'5',
    path:"/accounts",
    text:'layout.sidebar.accounts',
    icon: FaClipboardList
 }, {
    key:'6',
    path:"/warehouse",
    text:'layout.sidebar.warehouse',
    icon: FaStoreAlt
 }, {
    key:'7',
    path:"/pharmacy",
    text:'layout.sidebar.pharmacy',
    icon: FaCapsules
 }, {
    key:'8',
    path:"/lab",
    text:'layout.sidebar.lab',
    icon: ImLab
 }, {
    key:'9',
    path:"/xray",
    text:'layout.sidebar.xray',
    icon: FaXRay
 }, {
    key:'10',
    path:"/medical_equipment",
    text:'layout.sidebar.medical_equipment',
    icon: FaBriefcaseMedical
 }, {
    key:'11',
    path:"/settings",
    text:'layout.sidebar.settings',
    icon: FaCogs
 }
]
function Sidebar() {
  const {t, i18n} = useTranslation()
  const isExtend = useSelector(state=> state.sidebar.isActive)
  const dispatch = useDispatch()
  return (
    <SideContainer isExtend={isExtend} lang={i18n.language}>
      {isExtend ? 
      <div className='py-4 mb-[6px]'>
            <img
              className='w-[130px] mx-auto'
              src={logo} alt="logo"/>
        </div>
        :
      <MdMenu className={`text-black text-2xl block mx-auto my-4 cursor-pointer`} onClick={()=> {
         dispatch(toggleSidebar())
                  console.log(isExtend)

      }}/>
      }
      <Divider className='m-0' />
      <div className='flex flex-col p-1 space-y-1 relative'>
         {sidebarLinks.map((link, i)=>(
         <NavLink
         key={i}
         to={link.path} 
         className="navLink"
         children={({ isActive }) => {
            return (
               <>
               <link.icon className={`linkIcon text-xl `} />
               <span className={`linkText capitalize font-regular ${isExtend ? 'block' : 'hidden'}`}>{t(`${link.text}`)}</span>
               </>
            );
         }}
         /> 

         ))}
      </div>
    </SideContainer>
  )
}

export default Sidebar
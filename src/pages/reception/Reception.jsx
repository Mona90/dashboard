import React from 'react'
import { useTranslation } from 'react-i18next';
import CustomMainTabs from '../../components/shared/customMainTabs/CustomMainTabs';
import Appointments from './appointments/Appointments';
import Patients from './patients/Patients';



function Reception() {
   const {t} = useTranslation()
   const tabLinks =[
      {
         children:<Patients/>,
         label: t('layout.reception.patient'),
         key: '0'
       },
       {
         children:<Appointments/>,
         label:`${t('layout.reception.appointments')}`,
         key: '1'
       }
   ]
    return (
       <CustomMainTabs tabLinks={tabLinks}/>
    )
}

export default Reception
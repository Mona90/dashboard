import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Clinic from '../../pages/clinic/Clinic';
import Dashboard from '../../pages/dashboard/Dashboard';
import Employees from '../../pages/employees/Employees';
import Login from '../../pages/login/Login';
import Appointments from '../../pages/reception/appointments/Appointments';
import Attendance from '../../pages/reception/attendance/Attendance';
import Patients from '../../pages/reception/patients/Patients';
import Reception from '../../pages/reception/Reception';
import Accounts from '../../pages/settings/accounts/Accounts';
import Assets from '../../pages/settings/assets/Assets';
import Contracts from '../../pages/settings/contracts/Contracts';
import Hospital from '../../pages/settings/hospital/Hospital';
import MedicalData from '../../pages/settings/medicalData/MedicalData';
import Operations from '../../pages/settings/operations/Operations';
import Personal from '../../pages/settings/personal/Personal';
import Pharmacy from '../../pages/settings/pharmacy/Pharmacy';
import Settings from '../../pages/settings/Settings';
import Stores from '../../pages/settings/stores/Stores';
import ThirdParty from '../../pages/settings/thirdParty/ThirdParty';
import ProtectedRoutes from './ProtectedRoutes';

const Navigations = () =>{
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
        <Route element={<ProtectedRoutes/>}>
             <Route path="/" index element={<Dashboard/>}/>
             <Route path="/reception" element={<Reception/>}>
                <Route index element={<Patients/>}/>
                <Route path="patients" element={<Patients/>}/>
                <Route path="appointments" element={<Appointments/>}/>
                <Route path="attendance" element={<Attendance/>}/>
             </Route>
             <Route path="/employees" element={<Employees/>}/>
             <Route path="/clinic" element={<Clinic/>}/>
             <Route path="/settings" element={<Settings/>}>
                <Route index element={<Hospital/>}/>
                <Route path="hospital" element={<Hospital/>}>
                    <Route index element={<Personal/>}/>
                    <Route path='personal' element={<Personal/>}/>
                    <Route path='contract' element={<Contracts/>}/>
                    <Route path='third-party' element={<ThirdParty/>}/>
                    <Route path='stores' element={<Stores/>}/>
                    <Route path='accounts' element={<Accounts/>}/>
                    <Route path='assets' element={<Assets/>}/>
                    <Route path='medical-data' element={<MedicalData/>}/>
                    <Route path='operation' element={<Operations/>}/>
                    <Route path='pharmacy' element={<Pharmacy/>}/>
                    <Route path='personal' element={<Personal/>}/>
                    <Route path='personal' element={<Personal/>}/>
                </Route>
                <Route path='personal' element={<Personal/>}/>
                <Route path='contract' element={<Contracts/>}/>
                <Route path='third-party' element={<ThirdParty/>}/>
                <Route path='stores' element={<Stores/>}/>
                <Route path='accounts' element={<Accounts/>}/>
                <Route path='assets' element={<Assets/>}/>
                <Route path='medical-data' element={<MedicalData/>}/>
                <Route path='operation' element={<Operations/>}/>
                <Route path='pharmacy' element={<Pharmacy/>}/>
                <Route path='personal' element={<Personal/>}/>
                <Route path='personal' element={<Personal/>}/>
             </Route>
        </Route>
    </Routes>
  )
}

export default Navigations
import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import {  Paper, Tab, Tabs } from '@mui/material';
import { MainTabs } from './style';
// import { Card, Tabs } from 'antd';


export default function CustomMainTabs ({tabLinks}){
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return(
        <>
            <MainTabs defaultActiveKey="0" items={tabLinks} centered />
        </>
    
    )
}
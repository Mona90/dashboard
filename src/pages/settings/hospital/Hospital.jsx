import { Tabs } from 'antd';
import React from 'react';
import Accounts from '../accounts/Accounts';
import Assets from '../assets/Assets';
import Contracts from '../contracts/Contracts';
import MedicalData from '../medicalData/MedicalData';
import Operations from '../operations/Operations';
import Personal from '../personal/Personal';
import Pharmacy from '../pharmacy/Pharmacy';
import Stores from '../stores/Stores';
import ThirdParty from '../thirdParty/ThirdParty';
const subLinks = [
    // {
    //     children:'hospital',
    //     label:'hospital',
    //     key: '0'
    // },
    {
        children:<Personal/>,
        label:'personal',
        key: '1'
    },
    {
        children:<Contracts/>,
        label:'contract',
        key: '2'
    },
    {
        children:<ThirdParty/>,
        label:'third party',
        key: '3'
    },
    {
        children:<Stores/>,
        label:'stores',
        key: '4'
    },
    {
        children:<Accounts/>,
        label:'accounts',
        key: '5'
    },
    {
        children:<Assets/>,
        label:'assets',
        key: '6'
    },
    {
        children:<MedicalData/>,
        label:'medical data',
        key: '7'
    },
    {
        children:<Operations/>,
        label: 'operation',
        key: '8'
    },
    {
        children:<Pharmacy/>,
        label: 'pharmacy',
        key: '9'
    },

]
export default function Hospital(){
    // const [value, setValue] = useState(0);

    // const handleChange = (event, newValue) => {
    //   setValue(newValue);
    // };
    return(
        <>
        <Tabs defaultActiveKey="1" items={subLinks}/>
       {/* <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                {subLinks.map(tab=>
                        <Tab key={tab.key} label={tab.label} component={NavLink} to={tab.children}/>
                    )}
            </Tabs>
        </Box>
        
        <Box sx={{p: 2, m: 3}}>
            <Outlet/>
        </Box> */}
        </>
    )
}
import React from 'react';
import CustomMainTabs from '../../components/shared/customMainTabs/CustomMainTabs';

const tabLinks = [
    {
        path:'hospital',
        label:'hospital',
        key: '0'
    },
    {
        path:'personal',
        label:'personal',
        key: '1'
    },
    {
        path:'contract',
        label:'contract',
        key: '2'
    },
    {
        path:'third-party',
        label:'third party',
        key: '3'
    },
    {
        path:'stores',
        label:'stores',
        key: '4'
    },
    {
        path:'accounts',
        label:'accounts',
        key: '5'
    },
    {
        path:'assets',
        label:'assets',
        key: '6'
    },
    {
        path:'medical-data',
        label:'medical data',
        key: '7'
    },
    {
        path:'operation',
        label: 'operation',
        key: '8'
    },
    {
        path:'pharmacy',
        label: 'pharmacy',
        key: '9'
    },

]
export default function Settings (){
 
    return(
        <>
            <CustomMainTabs tabLinks={tabLinks}/>
        </>
    
    )
}
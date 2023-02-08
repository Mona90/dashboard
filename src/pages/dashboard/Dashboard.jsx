import { Card } from 'antd'
import React from 'react'
import calendarImg from "../../assets/images/dashboard/calendar.png"
import listImg from "../../assets/images/dashboard/list.png"
import patientImg from "../../assets/images/dashboard/patient.png"
import inpatientImg from "../../assets/images/dashboard/inpatient.png"
import invoicesImg from "../../assets/images/dashboard/invoices.png"
import occupancyImg from "../../assets/images/dashboard/occupancy.png"
import revenueImg from "../../assets/images/dashboard/revenue.png"
import expensesImg from "../../assets/images/dashboard/expenses.png"
import netIncomeImg from "../../assets/images/dashboard/net-income.png"
import { BoardContent } from './Style'
import { useTranslation } from 'react-i18next'

const data = [
    { 
        key:'0',
        title:"layout.dashboard.appointment",
        link:calendarImg
    }, {
        key:'1',
        title:"layout.dashboard.waiting",
        link:listImg
    },{
        key:'2',
        title:"layout.dashboard.today_operations",
        link:patientImg
    },{
        key:'3',
        title:"layout.dashboard.inpatient",
        link:inpatientImg
    },{
        key:'4',
        title:"layout.dashboard.invoices",
        link:invoicesImg
    },{
        key:'5',
        title:"layout.dashboard.occupancy",
        link:occupancyImg
    },{
        key:'6',
        title:"layout.dashboard.revenue",
        link:revenueImg
    },{
        key:'7',
        title:"layout.dashboard.expenses",
        link:expensesImg
    },{
        key:'8',
        title:"layout.dashboard.net_income",
        link:netIncomeImg
    }
]
export default function Dashboard() {
    const {t}= useTranslation()
  return (
    <BoardContent>
       {data.map(el=>(
            <Card
                title={t(`${el.title}`)}
                bordered={false}
                key={el.key}
                >
                <div className='flex justify-between items-center'>
                    <span className='text-xl font-bold text-black'>07</span>
                    <img src={el.link} className="w-[50px] h-[50px]" alt="icon"/>
                </div>
            </Card> 
        ))}
    </BoardContent>
  )
}

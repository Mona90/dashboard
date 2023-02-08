import { Tabs } from "antd";
import styled from "styled-components";
import { customColor } from "../../../assets/color/customColor";

export const MainTabs = styled(Tabs)(()=>({
    '& .ant-tabs-nav':{
        background: customColor.main[500],
        justifyContent: 'center',
        padding: '5px 0',
        '.ant-tabs-tab':{
            fontWeight: 'bold',
            textTransform: 'capitalize',
            fontSize: '14px',
            borderRadius: '3px',
            minWidth: '150px',
            color: '#fff !important',
            display: 'block',
            textAlign: 'center',
            '&.ant-tabs-tab-active':{
                background: customColor.main[400],
                '.ant-tabs-tab-btn':{
                    color: '#FFF',
                }
            }
        }
    },
    // '& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected':{
    //     background: customColor.main[400],
    //     fontWeight: 'bold',
    //     textTransform: 'capitalize',
    //     fontSize: '14px',
    //     borderRadius: '3px',
    //     minWidth: '150px',
    //     color: '#fff'
    // },
    // '& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root':{
    //     color: '#FFF',
    // },
    // '& .css-145v6pe-MuiButtonBase-root-MuiTabScrollButton-root':{
    //     background:
    // }
}))
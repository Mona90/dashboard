import { Modal } from "antd";
import styled from "styled-components";
import { customColor } from "../../../assets/color/customColor";

export const ModalStyles = styled(Modal)
 `
 top:20px;
.ant-modal-content{
    padding: 0;
    .ant-modal-header{
        padding: 15px 20px;
    }
    .ant-modal-body{
        padding: 20px;
        background: #f8f8f8;
    }   
    .ant-modal-footer{
        margin-top:0;
        padding: 15px 20px;
    }
}
 
`
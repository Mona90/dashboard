import { Card, Modal } from "antd";
import styled from "styled-components";
import { customColor } from "../../../assets/color/customColor";

export const PatientContainer = styled(Card)`
  .addBtn{
    background: ${customColor.yellow[200]};
    color:#FFF;
    font-weight: 500;
    text-transform: capitalize;
    border-radius: 5px;
    border: 1px solid ${customColor.yellow[200]};
    &:hover{
      color:#FFF !important;
      border: 1px solid ${customColor.yellow[200]};
    }
  }
  // .searchInput{
  //     margin-bottom: 0;
  //     // width: 350px;
  //     .ant-form-item-row{
  //         display: flex;
  //         flex-direction: column;
  //         align-items: center;
  //     }
  // }
`;
export const PatientModal = styled(Modal)`
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
`;
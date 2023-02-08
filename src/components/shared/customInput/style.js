import { Form } from "antd";
import styled from "styled-components";

export const FormInput = styled(Form.Item)
`
  position: relative;
  flex: 1;
  font-size:14px;
  margin-bottom:0;
  .ant-form-item-row{
    flex-direction: column;
    align-items: flex-start;
    .ant-form-item-label{
      // position: absolute;
      display: inline;
      // z-index: 2;
      margin-bottom: 2px;
      padding: 0px 4px;
      // background: #FFF;
      // top: -1px;
      // left: 12px;
      // transform: translateY(-50%);
      line-height: 1.5;
      label{
        color: #000;
        text-transform: capitalize;
        font-size:12px;
      }
    }
    .ant-form-item-control{
      width: 100%;
    }
  }
  
`
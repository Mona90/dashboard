import { Table } from "antd";
import styled from "styled-components";
import { customColor } from "../../../assets/color/customColor";

export const MainTable = styled(Table)
`
table{
    border-radius: 5px 5px 0 0;
    .ant-table-thead{
        .ant-table-cell{
            background: ${customColor.main[400]};
            color: #FFF;
            text-transform: capitalize;
            padding: 5px 7px;
        }
    }
    .ant-table-tbody{
        background: ${customColor.main[100]};
        .ant-table-cell{
            padding: 5px 7px;
        }
    }
}
`
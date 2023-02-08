import styled from "styled-components";
import { customColor } from "../../../../../../assets/color/customColor";

export const Content = styled.div
`.deleteBtn{
    background: ${customColor.red};
    border:0;
    transition: all 0.5s ease-in-out;
    width: fit-content;
    &:hover{
        color:#FFF;
        border: 0;
        opacity: 0.9;
    }
}
.searchBtn{
    margin-left: auto;
    background: ${customColor.main[400]};
    border: 1px solid ${customColor.main[400]};
    color: #FFF;
    transition: all 0.5s ease-in-out;
    display: block;
    margin-bottom: 10px;
    &:hover{
        color: #FFF;
        border: 1px solid ${customColor.main[400]};
        color: #FFF;
        opacity: 0.9;
    }
}
`
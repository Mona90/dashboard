import { customColor } from "../../../assets/color/customColor";
import styled from "styled-components";

export const SideContainer = styled.div`
   background: ${customColor.main[500]};
   width: ${props=>props.isExtend ? '200px' : 'fit-content'};
   transition: all 0.5s ease-in-out;
   height: 100vh;
   overflow-y: auto;
   position: fixed;
   top: 0;
   ${props=>props.lang === 'ar'? 'right': 'left'}: 0;
   box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
   .navLink{
    border-radius: 0.125rem;
    padding: 12px 14px;
    display:flex;
    column-gap: 8px;
    align-items: center;
    transition: all 0.5s ease-in-out;
    color:#FFF;
    &:hover{
        background: #FFF;
        color: ${customColor.main[400]}
    }
   }
`
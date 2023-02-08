import styled from "styled-components";

export const BoardContent = styled.div
`
padding: 1rem;
display: grid;
grid-template-columns: repeat(3, minmax(0, 1fr));
gap: 16px;
`
import styled from 'styled-components';

export const TableHeader = styled.div`
    padding: 15px;
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
    border-bottom: black;
    align-items: center;
`;

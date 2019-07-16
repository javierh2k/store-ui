import styled from 'styled-components';

export const Header = styled.div`
    padding: 5px;
    color: black;
    border-bottom: 2px solid ${props => props.theme.background};
    align-items: center;

    .close {
        color: ${props => props.theme.background};
        cursor: pointer;
    }
`;

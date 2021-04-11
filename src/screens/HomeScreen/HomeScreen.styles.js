import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    min-width:100%;
    min-height:100%;

    @media(max-width:366px){
        flex-direction:column;
    }
`;
import styled from 'styled-components';

export const Wrapper = styled.div`
    background: rgba(0,0,0,0.7);
    position: absolute;
    width: 100%;
    height: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
    opacity: 0;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -moz-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s;

    &:hover,
    &:active {
        opacity:1;
    }
`;
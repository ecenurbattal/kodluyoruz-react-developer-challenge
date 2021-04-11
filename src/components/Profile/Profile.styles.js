import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    min-width:150px;
`;

export const ProfileAvatar = styled.img`
    height: 4.5rem;
    width: 4rem;
    object-fit: center;
    border-radius: 50%;
    border: 2px solid #fff;
    background:white;
`;

export const ProfileInfo = styled.div`
    font-size:17px;
    font-weight:600;
    color:white;
    text-align:center;
    font-family:Passero One, cursive;
`;
import styled from 'styled-components';

export const Box = styled.form`
    width: 300px;
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #191919;
    text-align: center;
    font-family: "Comic Sans MS", "Comic Sans", cursive;

    & > h1 {
        color:white;
        text-transform: uppercase;
        font-weight: 500;
    }
`;

export const StyledInput = styled.input`
    border:0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #3498db;
    padding: 14px 10px;
    width: 200px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    font-family:Passero One, cursive;

    &:focus {
        width: 280px;
        border-color: #2ecc71;
    }
`;

export const StyledButton = styled.button`
    border:0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 3px solid #8e44ad;
    padding: 14px 40px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
    font-family:Passero One, cursive;

    &:hover {
        background: #8e44ad;
    }
`;


import styled from 'styled-components';
import {AiFillDelete} from 'react-icons/ai';


export const Wrapper = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    gap: 7px;
    padding-left: 3em;
    max-width:85%;
`;


export const CardWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    position:relative;

    width: 200px;
    min-height: 50px;
    background-color: #bdd4e7;
    background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);


    justify-self: center;

    border: 1px solid #d3d3d3;
    margin-bottom: 20px;
    box-shadow: 0 0 5px 5px #d3d3d3;

    outline: none;

    transition: 0.25s;

    &:hover {
    border: 3px solid #8e44ad;

    // -webkit-transform: rotate(-5deg);
    // -moz-transform: rotate(-5deg);
    // -o-transform: rotate(-5deg);
    // transform: rotate(-5deg);
    }
`;

export const CardTitle = styled.h3`
    text-align:center;
    font-family:Passero One, cursive;
    color:#833471;
`

export const CardContentWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding: 1.5em 1em;
`;

export const CardContent = styled.div`
    display:flex;
    min-width:80%;
`;

export const StyledText = styled.p`
    padding:0;
    margin:2px;
    text-align:center;
    font-size:15px;
    font-weight:600;
    font-family: "Comic Sans MS", "Comic Sans", cursive;
    color:#2C3A47;
`;


export const NewInput = styled.input`
    text-align:center;
    margin:7px;
    min-width:60%;
    border: 2px solid #3498db;
`;

export const RowWrapper = styled.div`
    display:flex;
    max-width:100%;
`;

export const AddButton = styled.button`
    border:0;
    background: none;
    display: block;
    margin: 5px auto;
    text-align: center;
    border: 3px solid #8e44ad;
    padding: 4px 9px;
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

export const StyledTrash = styled(AiFillDelete)`
    color:red;
    cursor:pointer;
    font-size:20px;
    align-self:flex-end;
    padding:7px;
`;
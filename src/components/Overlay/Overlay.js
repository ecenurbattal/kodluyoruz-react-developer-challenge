import React from 'react'
import { StyledTrash } from '../Card/Card.styles'
import { StyledButton } from '../FormElements/FormElements'
import { Wrapper } from './Overlay.styles'

const Overlay = ({onEditButton,onDeleteButton,id}) => {
    return (
        <Wrapper>
            <StyledButton
                type='button'
                onClick={() => onEditButton(id)}
            >
                Düzenle
            </StyledButton>
            <StyledTrash
                onClick={(e) => { if (window.confirm('Bu kartı silmek istediğinize emin misiniz?')) onDeleteButton(id) }}
            />
        </Wrapper>
    )
}

export default Overlay

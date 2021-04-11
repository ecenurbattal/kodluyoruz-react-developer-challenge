import React from 'react'
import { Wrapper } from './Menu.styles'

const Menu = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Menu

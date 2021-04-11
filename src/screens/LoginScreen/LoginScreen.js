import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Box, StyledButton, StyledInput } from '../../components/FormElements/FormElements'

const LoginScreen = () => {

    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');

    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        window.localStorage.setItem('user',JSON.stringify({name,surname}))
        history.push('/');
        window.location.reload();
    }

    return (
        <Box onSubmit={handleSubmit}>
            <h1>Giriş Yap</h1>
            <StyledInput 
                type='text'
                name='name'
                placeholder='Ad'
                autoComplete='off'
                required={true}
                value={name}
                onChange={(event) => {
                    setName(event.target.value)
                }}
            />
            <StyledInput
                type='text'
                name='surname'
                placeholder='Soyad'
                autoComplete='off'
                required={true}
                value={surname}
                onChange={(event) => {
                    setSurname(event.target.value)
                }}
            />
            <StyledButton
                type='submit'
                name='login'
            >
                Giriş Yap
            </StyledButton>
        </Box>
    )
}

export default LoginScreen

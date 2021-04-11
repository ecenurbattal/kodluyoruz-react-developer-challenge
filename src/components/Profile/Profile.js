import React from 'react'
import userIcon from '../images/user.png';
import { ProfileAvatar, ProfileInfo, Wrapper } from './Profile.styles'

const Profile = () => {
    return (
        <Wrapper>
            <ProfileAvatar
                src={userIcon}
                alt={'avatar'}
            />
            <ProfileInfo>
                <p>{JSON.parse(window.localStorage.getItem('user')).name}</p>
                <p>{JSON.parse(window.localStorage.getItem('user')).surname}</p>
            </ProfileInfo>
        </Wrapper>
    )
}

export default Profile

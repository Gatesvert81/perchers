import React from 'react'
import ProfileWrapper from '../styledComponents/ProfileWrapper'
import Text from '../styledComponents/Text'


// Card to display user profile details 

function ProfileCard({ children, title, name }) {
    return (
        <ProfileWrapper className="profile__card" >
            <ProfileWrapper className="profile__card__detail" >
                <ProfileWrapper className="profile__card__pic">
                    {/* <StyledImage src={person} /> */}
                    {/* <Image src={person} width='100%' height="100%" /> */}
                </ProfileWrapper>
                <ProfileWrapper className="profile__card__person">
                    <Text className="fadded__head" > 
                        {title}
                    </Text>
                </ProfileWrapper>
                <ProfileWrapper className="profile__card__name" >
                    {name}
                </ProfileWrapper>
            </ProfileWrapper>
            <ProfileWrapper className="profile__card__btns">
                {children}
            </ProfileWrapper>
        </ProfileWrapper>
    )
}

export default ProfileCard

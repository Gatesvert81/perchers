import React from 'react'
import ProfileWrapper from '../styledComponents/ProfileWrapper'
import Text from '../styledComponents/Text'
// import person from '../../public/person.png'
// import Image from 'next/image'

function ProfileCard({children}) {
    return (
        <ProfileWrapper className="profile__card" >
            <ProfileWrapper className="profile__card__detail" >
                <ProfileWrapper className="profile__card__pic">
                    {/* <StyledImage src={person} /> */}
                    {/* <Image src={person} width='100%' height="100%" /> */}
                </ProfileWrapper>
                <ProfileWrapper className="profile__card__person">
                    <Text className="fadded__head" >
                        Host
                    </Text>
                </ProfileWrapper>
                <ProfileWrapper className="profile__card__name" >
                    Josephine Thompson
                </ProfileWrapper>
            </ProfileWrapper>
            <ProfileWrapper className="profile__card__btns">
                {children}
            </ProfileWrapper>
        </ProfileWrapper>
    )
}

export default ProfileCard

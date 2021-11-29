import React from 'react'
import AnchorLink from '../../src/Components/AnchorLink'
import MainNav from '../../src/Components/MainNav'
import ProfileCard from '../../src/Components/ProfileCard'
import Button from '../../src/styledComponents/Button'
import Form from '../../src/styledComponents/Form'
import Input from '../../src/styledComponents/Input'
import ProfileWrapper from '../../src/styledComponents/ProfileWrapper'

function index() {
    return (
        <ProfileWrapper className="profile">
            <MainNav></MainNav>
            <ProfileWrapper className="profile__page">
                <ProfileWrapper className="profile__image__box">
                    <ProfileCard>
                        <Button name="tetiary expand">
                            Edit Image
                        </Button>
                    </ProfileCard>
                </ProfileWrapper>
                <ProfileWrapper className="profile__details">
                    <ProfileWrapper className="profile__head" >
                        Profile details
                    </ProfileWrapper>
                    <Form className="profile__form" >
                        <ProfileWrapper className="profile__form__main" >
                            <ProfileWrapper className="profile__form__name" >
                                <ProfileWrapper
                                    className=" profile__input__div " textholder="Name" >
                                    <Input type="text" className=" profile__input " placeholder="Enter Name" />
                                </ProfileWrapper>
                                <ProfileWrapper
                                    className=" profile__input__div " textholder="Surname" >
                                    <Input type="text" className=" profile__input " placeholder="Enter Surname" />
                                </ProfileWrapper>
                            </ProfileWrapper>
                            <ProfileWrapper
                                className=" profile__input__div " textholder="E-mail" >
                                <Input type="email" className=" profile__input " placeholder="Enter student email" />
                            </ProfileWrapper>
                            <ProfileWrapper
                                className=" profile__input__div " textholder="Telephone" >
                                <Input type="text" className=" profile__input " placeholder="(+233) -- --- ---" />
                            </ProfileWrapper>
                            <ProfileWrapper
                                className=" profile__input__div " textholder="Student id" >
                                <Input type="text" className=" profile__input " placeholder="eg. 10928374" />
                            </ProfileWrapper>

                        </ProfileWrapper>
                        <ProfileWrapper className="profile__form__btn" >
                            <AnchorLink route="/dorms" >
                                <Button
                                    name="primary" >
                                    Save
                                </Button>
                            </AnchorLink>
                        </ProfileWrapper>
                    </Form>
                </ProfileWrapper>
                <ProfileWrapper className="profile__details" >
                    <ProfileWrapper className="profile__head">
                        Password
                    </ProfileWrapper>
                    <Form className="profile__form">
                        <ProfileWrapper className="profile__form__main" >
                            <ProfileWrapper
                                className=" profile__input__div " textholder="Password" >
                                <Input type="password" className=" profile__input " placeholder="Enter Password" />
                            </ProfileWrapper>
                            <ProfileWrapper
                                className=" profile__input__div " textholder="Confirm Password" >
                                <Input type="password" className=" profile__input " placeholder="Re-enter Password" />
                            </ProfileWrapper>
                        </ProfileWrapper>
                        <ProfileWrapper className="profile__form__btn" >
                            <AnchorLink route="/dorms" >
                                <Button
                                    name="primary" >
                                    Save
                                </Button>
                            </AnchorLink>
                        </ProfileWrapper>
                    </Form>
                </ProfileWrapper>
            </ProfileWrapper>
        </ProfileWrapper>
    )
}

export default index

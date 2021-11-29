import React from 'react'
import RegisWrapper from '../styledComponents/RegisWrapper'
import Form from '../styledComponents/Form'
import Input from '../styledComponents/Input'
import Button from '../styledComponents/Button'
import AnchorLink from './AnchorLink'

function SignUp() {
    return (
        <Form className="register__form" >
            <RegisWrapper className="register__form__main" >
                <RegisWrapper className="register__form__name" >
                    <RegisWrapper
                        className=" register__input__div " textholder="Name" >
                        <Input type="text" className=" register__input " placeholder="Enter Name" />
                    </RegisWrapper>
                    <RegisWrapper
                        className=" register__input__div " textholder="Surname" >
                        <Input type="text" className=" register__input " placeholder="Enter Surname" />
                    </RegisWrapper>
                </RegisWrapper>
                <RegisWrapper
                    className=" register__input__div " textholder="E-mail" >
                    <Input type="email" className=" register__input " placeholder="Enter student email" />
                </RegisWrapper>
                <RegisWrapper
                    className=" register__input__div " textholder="Telephone" >
                    <Input type="text" className=" register__input " placeholder="(+233) -- --- ---" />
                </RegisWrapper>
                <RegisWrapper
                    className=" register__input__div " textholder="Student id" >
                    <Input type="text" className=" register__input " placeholder="eg. 10928374" />
                </RegisWrapper>
                <RegisWrapper
                    className=" register__input__div " textholder="Password" >
                    <Input type="password" className=" register__input " placeholder="Enter Password" />
                </RegisWrapper>
                <RegisWrapper
                    className=" register__input__div " textholder="Confirm Password" >
                    <Input type="password" className=" register__input " placeholder="Re-enter Password" />
                </RegisWrapper>
            </RegisWrapper>
            <RegisWrapper className="register__form__btn" >
                <AnchorLink route="/dorms" >
                    <Button
                        name="primary" >
                        Sign Up
                    </Button>
                </AnchorLink>
            </RegisWrapper>
        </Form>
    )
}

export default SignUp

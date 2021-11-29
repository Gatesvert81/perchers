import React from 'react'
import Button from '../styledComponents/Button'
import Form from '../styledComponents/Form'
import Input from '../styledComponents/Input'
import RegisWrapper from '../styledComponents/RegisWrapper'
import AnchorLink from './AnchorLink'

function SignIn() {
    return (
        <Form className="register__form" >
            <RegisWrapper className="sign__in__form" >
                <RegisWrapper className=" register__input__div " textholder="E-mail" >
                    <Input type="email" className=" register__input " placeholder="Enter student email" />
                </RegisWrapper>
                <RegisWrapper className=" register__input__div " textholder="Student id" >
                    <Input type="text" className=" register__input " placeholder="eg. 10928374" />
                </RegisWrapper>
                <RegisWrapper className=" register__input__div " textholder="Password" >
                    <Input type="password" className=" register__input " placeholder="Enter Password" />
                </RegisWrapper>
            </RegisWrapper>
            <RegisWrapper className="register__form__btn" >
                <AnchorLink route="/dorms" >
                    <Button
                        name="primary" >
                        Sign In
                    </Button>
                </AnchorLink>
            </RegisWrapper>
        </Form>
    )
}

export default SignIn

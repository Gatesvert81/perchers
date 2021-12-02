import React from 'react'
import Button from '../styledComponents/Button'
import Form from '../styledComponents/Form'
import Input from '../styledComponents/Input'
import RegisWrapper from '../styledComponents/RegisWrapper'
import AnchorLink from './AnchorLink'

function SignIn({ setSignInDetail }) {

    // Handles signIn form submit 
    const handleSubmit = (e) => {
        e.preventDefault()

        const { studentID, email, password  } = e.target.elements

        const studentId = studentID.value
        const userEmail = email.value
        const userPassword = password.value

        // This function sends form details to the registration 
        setSignInDetail({ studentId, userEmail, userPassword  })

    }

    return (
        <Form className="register__form" onSubmit={handleSubmit} >
            <RegisWrapper className="sign__in__form" >
                <RegisWrapper className=" register__input__div " textholder="E-mail" >
                    <Input type="email" className=" register__input " name="email" placeholder="Enter student email" />
                </RegisWrapper>
                <RegisWrapper className=" register__input__div " textholder="Student id" >
                    <Input type="number" className=" register__input " name="studentID" placeholder="eg. 10928374" />
                </RegisWrapper>
                <RegisWrapper className=" register__input__div " textholder="Password" >
                    <Input type="password" className=" register__input " name="password" placeholder="Enter Password" />
                </RegisWrapper>
            </RegisWrapper>
            <RegisWrapper className="register__form__btn" >
                <AnchorLink route="/dorms" >
                    <Button
                        type="submit"
                        name="primary" >
                        Sign In
                    </Button>
                </AnchorLink>
            </RegisWrapper>
        </Form>
    )
}

export default SignIn

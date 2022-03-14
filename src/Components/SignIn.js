import React from 'react'
import { signIn } from 'next-auth/react'
import Button from '../styledComponents/Button'
import Form from '../styledComponents/Form'
import Input from '../styledComponents/Input'
import RegisWrapper from '../styledComponents/RegisWrapper'


function SignIn() {

    // Handles signIn form submit 
    const handleSubmit = (e) => {
        e.preventDefault()

        const { email, password } = e.target.elements

        const userEmail = email.value
        const userPassword = password.value

        const emailArr = userEmail.split('@')
        const emailCondition = emailArr[1] === 'st.ug.edu.gh'

        if (emailCondition) {
            signIn("credentials", {
                email: userEmail,
                password: userPassword,
                callbackUrl: '/dorms'
            })
        } else {
            return alert("Please input your student email")
        }

    }

    return (
        <Form className="register__form" onSubmit={handleSubmit} >
            <RegisWrapper className="sign__in__form" >
                <RegisWrapper className=" register__input__div " textholder="E-mail" >
                    <Input type="email" className=" register__input " name="email" placeholder="Student email" required />
                </RegisWrapper>
                {/* <RegisWrapper className=" register__input__div " textholder="Student id" >
                    <Input type="number" className=" register__input " name="studentID" placeholder="Student ID" required />
                </RegisWrapper> */}
                <RegisWrapper className=" register__input__div " textholder="Password" >
                    <Input type="password" className=" register__input " name="password" placeholder="Password" required />
                </RegisWrapper>
            </RegisWrapper>
            <RegisWrapper className="register__form__btn" >
                <Button
                    type="submit"
                    name="primary" >
                    Sign In
                </Button>
            </RegisWrapper>
        </Form>
    )
}

export default SignIn

import React from 'react'
import RegisWrapper from '../styledComponents/RegisWrapper'
import Form from '../styledComponents/Form'
import Input from '../styledComponents/Input'
import Button from '../styledComponents/Button'
import AnchorLink from './AnchorLink'

function SignUp({ setSignUpDetail }) {

    // function to handle sign Up form submit 
    const handleSubmit = (e) => {
        e.preventDefault()

        const { name, surname, phone_number, studentID, email, password, confirm_password } = e.target.elements

        const firstName = name.value
        const lastName = surname.value
        const phoneNumber = phone_number.value
        const studentId = studentID.value
        const userEmail = email.value

        // Check password and confirmPassword is equal 
        if (password === confirm_password) {
            setSignUpDetail({ firstName, lastName, phoneNumber, studentId, userEmail, password })
        } else {
            alert('Password does not match')
        }

    }

    return (
        <Form className="register__form" onSubmit={handleSubmit} >
            <RegisWrapper className="register__form__main" >
                <RegisWrapper className="register__form__name" >
                    <RegisWrapper
                        className=" register__input__div " textholder="Name" >
                        <Input type="text" className=" register__input " name="name" placeholder="Enter Name" />
                    </RegisWrapper>
                    <RegisWrapper
                        className=" register__input__div " textholder="Surname" >
                        <Input type="text" className=" register__input " name="surname" placeholder="Enter Surname" />
                    </RegisWrapper>
                </RegisWrapper>
                <RegisWrapper
                    className=" register__input__div " textholder="E-mail" >
                    <Input type="email" className=" register__input " name="email" placeholder="Enter student email" />
                </RegisWrapper>
                <RegisWrapper
                    className=" register__input__div " textholder="Telephone" >
                    <Input type="text" className=" register__input " name="phone_number" placeholder="(+233) -- --- ---" />
                </RegisWrapper>
                <RegisWrapper
                    className=" register__input__div " textholder="Student id" >
                    <Input type="text" className=" register__input " name="studentID" placeholder="eg. 10928374" />
                </RegisWrapper>
                <RegisWrapper
                    className=" register__input__div " textholder="Password" >
                    <Input type="password" className=" register__input " name="password" placeholder="Enter Password" />
                </RegisWrapper>
                <RegisWrapper
                    className=" register__input__div " textholder="Confirm Password" >
                    <Input type="password" className=" register__input " name="confirm_password" placeholder="Re-enter Password" />
                </RegisWrapper>
            </RegisWrapper>
            <RegisWrapper className="register__form__btn" >
                {/* <AnchorLink route="/dorms" > */}
                <Button
                    type="submit"
                    name="primary" >
                    Sign Up
                </Button>
                {/* </AnchorLink> */}
            </RegisWrapper>
        </Form>
    )
}

export default SignUp

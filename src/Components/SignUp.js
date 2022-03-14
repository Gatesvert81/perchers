import React, { useEffect, useState } from 'react'
import { useSession, signIn } from "next-auth/react"
import axios from 'axios'
import RegisWrapper from '../styledComponents/RegisWrapper'
import Form from '../styledComponents/Form'
import Input from '../styledComponents/Input'
import Button from '../styledComponents/Button'
import SelectOptions from './SelectOptions'


function SignUp({ setSignUpDetail }) {

    const [message, setMessage] = useState(null)
    const [gender, setGender] = useState(null)
    const [level, setLevel] = useState(null)

    // function to handle sign Up form submit 

    const signUp = async (studentId,name,phoneNumber, userPassword, userEmail) => {
        try {
            const user = await axios.post('http://localhost:5000/signUp',
                {
                    id : studentId, 
                    name : name, 
                    mobileNumber : phoneNumber, 
                    level : level, 
                    gender : gender, 
                    password: userPassword,
                    email: userEmail
                },
                {
                    headers: {
                        accept: '*/*',
                        'Content-Type': 'application/json'
                    }
                })
                console.log(user)
                if ( user.data.data?.success ) {
                    return signIn("credentials", {
                        email : userEmail,
                        password: userPassword,
                        callbackUrl : '/dorms'
                    })
                } else {
                    setMessage(user.data.data.result)
                }

        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { firstname, surname, phone_number, studentID, email, password, confirm_password } = e.target.elements

        const firstName = firstname.value
        const lastName = surname.value
        const phoneNumber = phone_number.value
        const studentId = studentID.value
        const userEmail = email.value
        const userPassword = password.value
        const userConfirmPassword = confirm_password.value

        const name = `${firstName} ${lastName}`
        const emailArr = userEmail.split('@')

        // Check password and confirmPassword is equal ande Post request

        const condition1 = gender && level
        const passCondition = userPassword === userConfirmPassword
        const emailCondition = emailArr[1] === 'st.ug.edu.gh'

        console.log(passCondition)
        console.log(emailCondition)
        if (condition1) {
            const condition = (passCondition) && ( emailCondition)
            if (condition) {
                await signUp(studentId, name, phoneNumber, userPassword, userEmail)
            } else {
                if (!emailCondition) alert('Enter your student email')
                if (!passCondition) alert('Password does not match')
                return null
            }
        } else {
            alert("Please fill all Inputs")
        }

    }

    useEffect(() => {
        console.log(gender)
        console.log(level)
    }, [level,gender])



    return (
        <Form className="register__form" onSubmit={handleSubmit} >
            <RegisWrapper className="register__form__main" >
                <RegisWrapper className="register__form__name" >
                    <RegisWrapper
                        className=" register__input__div " textholder="Name" >
                        <Input type="text" className=" register__input " name="firstname" placeholder="First Name" required />
                    </RegisWrapper>
                    <RegisWrapper
                        className=" register__input__div " textholder="Surname" >
                        <Input type="text" className=" register__input " name="surname" placeholder="Last name" required />
                    </RegisWrapper>
                </RegisWrapper>
                <RegisWrapper
                    className=" register__input__div " textholder="E-mail" >
                    <Input type="email" className=" register__input " name="email" placeholder="Student email" required />
                </RegisWrapper>
                <RegisWrapper
                    className=" register__input__div " textholder="Telephone" >
                    <Input type="tel" maxLength={10} className=" register__input " name="phone_number" placeholder="Mobile Number" required />
                </RegisWrapper>
                <RegisWrapper>
                <RegisWrapper>
                    Level
                    <SelectOptions selectedOption={setLevel} options={[100,200,300,400]} >
                        Level
                    </SelectOptions>
                </RegisWrapper>
                <RegisWrapper>
                    Gender
                    <SelectOptions selectedOption={setGender} options={["male","female"]} >
                        Gender
                    </SelectOptions>
                </RegisWrapper>
                </RegisWrapper>
                <RegisWrapper
                    className=" register__input__div " textholder="Student id" >
                    <Input type="number" maxLength={8} className=" register__input " name="studentID" placeholder="Student ID" required />
                </RegisWrapper>
                <RegisWrapper
                    className=" register__input__div " textholder="Password" >
                    <Input type="password" className=" register__input " name="password" placeholder="Password" required />
                </RegisWrapper>
                <RegisWrapper
                    className=" register__input__div " textholder="Confirm Password" >
                    <Input type="password" className=" register__input " name="confirm_password" placeholder="Confirm Password" required />
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
            <RegisWrapper>
                {message}
            </RegisWrapper>
        </Form>
    )
}

export default SignUp

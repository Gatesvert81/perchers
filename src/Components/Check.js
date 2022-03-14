import React, {  useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '../assets/theme'

const Wrapper = styled.div`

    &.check{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: center;
        align-items: center;
        padding: 5px ;
        font-size: 0.85rem;
        /* background-color: white; */
        /* border: 2px solid black; */
        box-shadow: 
            0px 0px 2px ${COLORS.btnShadow};
        border-radius: 5px;
        opacity: ${props => props.check ? "1" : "0.7"};
        color: ${props => props.check ? "white" : "black"};
        background-color: ${props => props.check ? "orangered" : "white"};
        transition: 0.3s ease-in-out ;
        cursor: pointer;
    }

`

function Check({ children, setCheckedValue, isCheck, handleCheck }) {

    const [check, setCheck] = useState(null)

    return (
        <Wrapper 
            className="check" 
            check={isCheck || check} 
            onClick={() => {
            const value = handleCheck(children, setCheckedValue)
            setCheck(value)
            } } >
            {/* <Wrapper className="check__image" >
                I
            </Wrapper> */}
            <Wrapper className="check__text" >
                {children}
            </Wrapper>
        </Wrapper>
    )
}

export default Check

import styled, { keyframes } from "styled-components";

const animation = keyframes`

    from {
        opacity: 0.5 ;
    }
    to {
        opacity: 1;
    }

`

const Form = styled.form`

    /* &.register__form{
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 10px;
        justify-content: space-between;
    } */
    
    &.register__form, &.profile__form{
        width: 100%;
        height: 100% ;
        padding: 20px 0px;
        /* background-color: chartreuse; */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

`

export default Form
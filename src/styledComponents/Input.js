import styled from "styled-components";
import { COLORS } from "../assets/theme";

const Input = styled.input`

    /* &.home__search__input{
        width: 100%;
        padding: 10px 10px;
    } */

    &.uni__search__input{
        width: 60%;
        padding: 10px 10px;
        border: hidden;
    }

    &.date__input{
        width: 120px;
        border: 2px solid black;
        border-radius: 5px ;
    }

    &.register__input, &.profile__input{
        width: 100%;
        border: 2px solid ${COLORS.lightGray};
        border-radius: 5px ;
        padding: 5px;
    }

    &.register__input::placeholder{
        font-size: 0.75rem;
        opacity: 0.5;
    }

    &.dorm__search__input{
        width: 120px;
        padding: 8px 10px;
        border-radius: 5px ;
        margin-right: 10px;
        border: 2px solid ${COLORS.lightGray} ;
    }

    &.price__input{
        width: 100%;
        height: fit-content;
        padding: 5px ;
        padding-left: 40px;
        border-radius: 5px ;
        background-color: white;
        border: 2px solid ${COLORS.lightGray} ;
    }

    &.messages__input{
        width: 100% ;
        height: 100% ;
        border: 2px solid ${COLORS.lightGray};
        border-radius: 5px ;
        padding: 5px;
    }

`

export default Input
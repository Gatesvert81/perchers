import styled from "styled-components";
import { COLORS } from "../assets/theme";

const HostWrapper = styled.div`

    &.host{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100% ;
        background-color: blanchedalmond;
        height: 100vh;
        /* min-height: 100vh ; */
    }

    &.host__page{
        width: 100%;
        height: 100% ;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        /* padding: 20vh; */
        align-items: center;
        
    }

    &.host__head__container{
        display: flex;
        /* flex-direction: column; */
        /* justify-content: center; */
        /* align-items: center; */
        padding-bottom: 20px ;
        
    }

    &.host__logo{
        font-size: 4rem;
    }

    &.host__head__text{
        font-size: 2rem;
    }
    
    &.host__detail__box{
        box-shadow: 
            0px 0px 10px ${COLORS.btnShadow};
        width: 300px;
        height: fit-content ;
        background-color: whitesmoke;
        display: flex;
        flex-direction: column;
        padding: 10px;
        justify-content: flex-start;
        border-radius: 5px;

        /* align-items: center; */
    }

    &.host__input__section{
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 5px;
    }


    &.host__section__head{

    }

    &.host__section{
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 5px;

    }

    &.host__sub__section{
        font-size: 0.75rem;
        font-weight: 300;
    }

    &.host__check__section{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 5px;
    }

    &.host__images__box{
        position: relative;
        width: 100%;
        height: ${ props => props.open ? "40px" : " 0px"} ;
        transition: 0.2s ease-in-out;
        /* background-color: turquoise; */
    }

    &.host__image{
        width: 40px ;
        height: 100%;
        position: relative;
    }

    &.host__price__box{
        width: fit-content;
        height: fit-content;
        /* background-color: violet; */
        position: relative;
    }

    &.host__section__btn{
        width: 100%;
        padding-top: 10px; 
    }

`

export default HostWrapper
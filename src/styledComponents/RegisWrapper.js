import styled from "styled-components";
import { COLORS } from "../assets/theme";

const RegisWrapper = styled.div`

    &.registration{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: blanchedalmond;

    }

    &.registration__pic{
        width: 50%;
        height: 100% ;
        background-color: aliceblue; 
        display: none;
    }

    &.registration__main{
        width: 100%;
        height: 100% ;
        padding: 20vh;
        background-color: blanchedalmond;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    &.registration__logo{
        padding: 20px ;
        font-size: 5rem;
    }
    
    &.registration__section{
        background-color: whitesmoke;
        height: 80% ;
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 0px 10px;
        align-items: center;
        border-radius: 5px;
        box-shadow: 
            0px 0px 10px ${COLORS.btnShadow};
    }

    &.registration__tab{
        /* background-color: cornsilk; */
        width: 100% ;
        height: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    &.registration__render{
        width: 100% ;
        height: 100%;
    }

    &.register__form__main{
        /* background-color: coral; */
        width: 100% ;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 5px;
    }

    &.sign__in__form{
        /* background-color: coral; */
        width: 100% ;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 5px;
    }

    &.register__form__name{
        /* background-color: cyan; */
        width: 100% ;
        /* height: 100%; */
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 5px;

    }

    &.register__form__btn{
        /* background-color: darkolivegreen; */
        width: 100% ;
        /* height: 50%; */
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 20px 0px ;
    }

    /* Mid-Desktop View  */


    @media all and (min-width: 450px) {


    &.registration{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: darkturquoise;

    }

    &.registration__main{
        width: 100%;
        height: 100% ;
        padding: 20vh;
        background-color: whitesmoke;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    &.registration__section{
        background-color: blanchedalmond;
        width: 300px;
        /* min-height: ${ props => props.register ? '100px' : 'fit-content'  } ; */
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 0px 10px;
        align-items: center;
        border-radius: 5px;
        box-shadow: 0px 0px 10px ${COLORS.btnShadow};
        transition: 0.1s;
    }

    &.registration__render{
        width: 100% ;
        /* height: fit-content; */
        min-height: ${ props => props.register ? '100px' : 'fit-content'  } ;
    }


    }

`

export default RegisWrapper
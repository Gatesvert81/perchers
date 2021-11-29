import styled from "styled-components";
import { COLORS, HEIGHTS, WIDTHS } from "../assets/theme";

const ProfileWrapper = styled.div`

    &.profile{
        width: 100%;
        height: 100vh;
    }

    &.profile__page{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 20px 5vw;
        /* background-color: blanchedalmond; */
    }


    &.profile__section{
        padding: 10px 0px ;
    }

    &.profile__image__box{
        padding-bottom: 20px ;
    }

    &.profile__details{
        width: 100% ;
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        /* align-items: center; */
        /* background-color: tomato; */
        
    }

    &.profile__head{
        font-size: 1.5rem;
        font-weight: 500;
    }

    &.profile__form__main{
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 5px;
        width: 100%;
    }

    &.profile__form__name{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 5px;
    }

    &.profile__form__btn{
        display: flex;
        width: 100% ;
        padding: 10px 0px;
        flex-direction: row;
        justify-content: flex-start;
        /* background-color: thistle; */
    }

    &.profile__input__div{
        width: 100% ;
    }

    &.profile__card{
        width: ${WIDTHS.l};
        min-height: ${HEIGHTS.l * 0.8};
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 5px;
        box-shadow: 
            0px 0px 10px ${COLORS.shadow};
            /* 0px 0px 0px grey; */

    }

    &.profile__card__detail{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: relative;
        padding: 20px 10px 10px;
    }

    &.profile__card__detail::before{
        content: '';
        width: 100%;
        height: 1px;
        background-color : ${COLORS.shadow} ;
        position: absolute;
        bottom: 0px;
        opacity: 0.6;
    }

    &.profile__card__pic{
        width: ${WIDTHS.s};
        height: ${HEIGHTS.s};
        border-radius: 50%;
        background-color: aquamarine;
    }

    &.profile__card__btns{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 30px;
        grid-gap: 5px;
        padding: 5px;
    }

`

export default ProfileWrapper
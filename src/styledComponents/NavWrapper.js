import styled from "styled-components";
import { COLORS, FONTS } from "../assets/theme";

const NavWrapper = styled.div`


    /* Mobile View  */

    &.homenav__main{
        width: 70%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        /* background-color: greenyellow; */
    }

    &.homenav__main__btn{
        display: none;
    }

    &.nav__main__btns{
        width: 40vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        /* background-color: blue; */
    }

    &.homenav__signup{
        display: flex; 
        flex-direction: row;
        justify-content: space-between;
        align-items: center ;
        width: 100% ;
        /* background-color: aliceblue; */
    }

    &.nav__btns{
        width: 60%;
        /* background-color: green; */
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    &.nav__sign__up{
        width: 40%;
        /* background-color: greenyellow; */
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    &.list__nav__main{
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        /* background-color: greenyellow; */
    }

    &.list__nav__logo{
        width: 20%;
    }

    &.list__nav__filters{
        width: 60%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    &.list__nav__btns{
        width: 20%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    &.side__nav{
        width: 250px ;
        height: 100vh;
        display: flex ;
        flex-direction: column;
        justify-content: space-between;
        /* align-items: center; */
        position: fixed;
        top: 0;
        right: 0;
        z-index: 100;
        background-color: whitesmoke;
        padding: 10px 20px ;
        transform: ${ props => props.open ? `translateX(0)` : `translateX(100%)`  };
        transition: 0.2s;

    }

    &.side__nav__main{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        /* background-color: honeydew; */
    }

    &.side__nav__cancel{
        width: 100%;
        height: 30px;
        position: relative;
        /* background-color: greenyellow; */
        margin-bottom: 10px;
        cursor: pointer;
    }

    &.side__nav__cancel::before , &.side__nav__cancel::after {
        content: '';
        position: absolute;
        width: 30px;
        height: 2px;
        background-color: black;
        top: 50%;
        left: 0;
    }

    &.side__nav__cancel::before{
        transform: rotate( 45deg );
    }

    &.side__nav__cancel::after{
        transform: rotate( -45deg );
    }

    &.side__nav__profile{
        margin-bottom: 10px;
    }

    &.side__nav__main__btns{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 30px;
        /* background-color: lavenderblush; */
        width: 100% ;
        /* align-items: center; */
    }

    &.side__nav__btn__num{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        font-size: ${ FONTS.body3 } ;
        background-color: ${ props => props.empty ? COLORS.tetiary : COLORS.lightGray };
        color: ${ props => props.empty ? COLORS.primary : COLORS.gray };
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        position: relative;
    }

    &.side__nav__btn__num::before{
        content: '';
        width: 5px;
        height: 5px;
        display: ${ props => props.seen ? 'block' : 'none' } ;
        position: absolute;
        background-color: orangered;
        border-radius: 50%;
        top: 0;
        right: 5%;
    }


    /* Mid-destop View  */

    @media all and (min-width: 450px ) {
        &.homenav__main{
        /* width: 50%; */
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        /* background-color: greenyellow; */
    }

    &.homenav__main__btn{
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    &.list__nav__filters{
        width: 70%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    &.homenav__signup{
        display: flex; 
        flex-direction: row;
        justify-content: flex-end;
        align-items: center ;
        width: 100% ;
    }
    &.list__nav__main{
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    &.list__nav__logo{
        width: fit-content;
        padding-right: 10px;
    }

    &.list__nav__filters{
        width: 60%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    &.list__nav__btns{
        width: 80px ;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    }

`

export default NavWrapper
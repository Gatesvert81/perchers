import styled from "styled-components";
import { WIDTHS, FONTS, COLORS } from "../assets/theme";



const DormWrapper = styled.div`

    &.dorms{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100% ;
        min-height: 100vh ;
    }

    &.dorms__head{
        width: 100%;
        height: 30px;
        display: flex; 
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px;
        font-size: ${FONTS.h3};
        margin-bottom: 10px;
    }

    &.dorms__main{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        /* height: 100vh; */
    }

    &.dorms__render{
        width: 100% ;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        /* align-content: center; */
        /* justify-items: center; */
        padding: 5px;
        grid-gap: 15px;
    }

    &.room__page{
        width: 100% ;
        min-height: 100vh;
        /* background-color: darkorchid; */
    }

    &.room{
        display: flex;
        flex-direction: column; 
        padding: 0px 5vw;
        width: 100%;
        height: 100%;
    }

    &.room__sub__nav{
        display: flex;
        width: 100% ;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0px;
        /* background-color: darksalmon; */
    }
    
    &.room__sub__navigation{
        display: flex;
        min-width: 40% ;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    &.room__sub__navigation__arrow{
        margin: 0px 10px;
    }

    &.room__sub__nav__icons{
        display: flex;
        flex-direction: row;
        width: 80px;
        justify-content: space-between;
        align-items: center;
    }

    &.room__main{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100% ;
        height: 100%;
        /* background-color: darkorange; */
    }

    &.room__detail{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        /* background-color: lawngreen; */
    }

    &.room__carousel{
        width: 100%;
        height: 40vh;
        background-color: lightblue;
    }
    
    &.room__main__details{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        /* border: 1.75px solid gray; */
        box-shadow: 0px 0px 10px ${COLORS.btnShadow};
        margin-top: 10px ;
        padding: 10px;
        border-radius: 5px;
    }

    &.room__detail__head{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 10px;
        /* border-bottom: 1.75px solid gray; */
    }

    &.detail__btns{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
    }

    &.room__description{
        width: 100% ;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 10px;
    }


    &.room__sub{
        display: none;
    }

    /* Mid-Desktop View  */


    @media all and (min-width: 450px) {

        &.dorms__render{
        width: 100% ;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        /* align-content: center; */
        /* justify-items: center; */
        padding: 5px;
        grid-gap: 15px;
    }

    &.room__sub__navigation{
        display: flex;
        min-width: 20% ;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    &.room__main{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100% ;
        height: 100%;
        /* background-color: darkorange; */
    }

    &.room__sub{
        width: ${WIDTHS.l};
        width: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-left: 20px;
    }


    }

`

export default DormWrapper
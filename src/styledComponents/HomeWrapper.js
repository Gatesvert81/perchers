import { COLORS } from "../assets/theme";

const { default: styled } = require("styled-components");

const HomeWrapper = styled.div`

    &.home{
        width: 100% ;
        height: 100% ;

    }
 
    &.home__main{
        padding: 10px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &.home__main__section__btn{
        background-color: white;
        position: relative;
        width: 150px;
        height: 30px;
        padding: 3px;
        border-radius: 15px;
        box-shadow: 
            0px 0px 10px ${COLORS.btnShadow};
    }
    
    &.home__section__select{
        /* display: flex; */
        /* flex-wrap: nowrap; */
        /* overflow: visible; */
        width: 75px;
        height: 100%;
        background-color: blueviolet;
        border-radius: 15px;
        transition: 0.2s;
        transform: ${props => props.select ? `translateX(0)` : `translateX(92%)`};
    }

    &.home__main__section{
        position: absolute;
        top: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        width: 150px;
        height: 100%;
        /* background-color: greenyellow; */
    }



    &.home__main__text{
        margin: 10px 0px;
        transition: 0.2s linear;
    }

    &.home__main__search{
        /* margin: 10px 0px; */
        width: 300px;
        height: 100px ;
        background-color: white;
        display: flex;
        flex-direction: column;
        padding: 5px;
        position: relative;
        border-radius: 5px;
        box-shadow: 
            0px 0px 10px ${COLORS.btnShadow};
        /* justify-content: ; */
    }

    &.home__uni__search::before{
        content: '';
        position: absolute;
        bottom: -5px;
        width: 100%;
        height: 2px;
        background-color: grey;
    }

    &.home__uni__search{
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 10px;
        height: 50%;
    }

    &.home__check__date{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 50%;
    }

    &.home__main__image{
        display: none;
    }

    &.home__image__container{
        display: none;
        width: 300px;
        height: 40vh;
        padding: 2px;
        border-radius: 2px;
        position: relative !important ;
    }

    /* Mid-Desktop View  */

    @media all and (min-width: 450px) {
        &.home__main{
        padding: 10px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }




    &.home__main__image{
        display: none;
        position: relative ;
    }

    &.home__image__container{
        display:  none;
        width: 300px;
        height: 45vh;
        padding: 2px;
        border-radius: 2px;
        position: relative !important;
    }

}

    @media all and (min-width: 650px) {

        &.home__main{
            padding: 10px 0px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            /* background-color: greenyellow; */
        }

        &.home__main__image{
            width: fit-content;
            height: fit-content;
            padding: 5px ;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-color: darkturquoise;
            position : relative !important;
        }
    
        &.home__image__container{
            display:  block;
            width: 300px;
            height: 45vh;
            padding: 2px;
            border-radius: 2px;
            position: relative !important;
        }
    }

    

`

export default HomeWrapper
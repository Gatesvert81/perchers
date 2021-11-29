import styled from "styled-components";

const Main = styled.main`

    /* Mobile View */

    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: hotpink; */

    &.main::before{
        content: '';
        z-index: -10;
        width: 100vw;
        height: 100vh;
        background-color: burlywood;
        position: absolute;
        top: -5vh;
        left: -10vh;
        border-radius: 20px;
    }

    /* Mid-Desktop View  */


    @media all and (min-width: 450px) {

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0px 5vw;

        &.main::before{
            content: '';
            z-index: -10;
            width: 100vw;
            height: 100vh;
            background-color: burlywood;
            position: absolute;
            top: -10vh;
            left: -20vh;
            border-radius: 20px;
        }


    }



`

export default Main
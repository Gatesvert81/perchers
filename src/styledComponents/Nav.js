import styled from "styled-components";
import { COLORS } from "../assets/theme";

const Nav = styled.nav`

    &.homenav{
        height: 10vh;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 5vw;
        /* background-color: gray; */
    }

    &.list__nav{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        position: sticky;
        background-color: white;
        color: black;
        top: 0px;
        z-index: 10;
        border-bottom: 1px solid gray;
        /* box-shadow: 0px 0px 10px ${COLORS.shadow}; */
    }
    

`

export default Nav
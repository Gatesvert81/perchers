import styled from 'styled-components'
import { COLORS } from '../assets/theme'

const ListWrapper = styled.div`

    &.list__card{
        width: 100% ;
        height: 100%;
        background-color: white;
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
        border-radius: 5px;
        box-shadow: 0px 0px 10px ${COLORS.shadow};
        padding: 5px;
    }

    /* &.list__card:hover{
        box-shadow: 
            0px 0px 20px ${COLORS.shadow};
    } */

    &.list__card__carousel{
        /* background-color: white; */
        width: 100%;
        height: 120px;
        position: relative;
    }

    &.list__card__detail{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 5px;
        /* background-color: darkorange; */
        /* width: 100%; */
        height: 50%;
    }

    &.list__card__footer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    /* Mid-Desktop View  */


    @media all and (min-width: 450px) {

        
        &.list__card__carousel{
        /* background-color: white; */
        width: 100%;
        height: 150px;
    }


    }

`

export default ListWrapper
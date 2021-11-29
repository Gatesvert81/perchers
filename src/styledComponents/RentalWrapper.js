import styled from "styled-components";

const RentalWrapper = styled.div`

    &.rental{
        width: 100%;
        height: 80vh;
    }

    &.rental__page{
        width: 100%;
        height: 100% ;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 20px 5vw;
        /* background-color: blanchedalmond; */
    }

    &.rental__section{
        width: 100%;
        height: fit-content ;
        /* background-color: thistle; */
    }

    &.rental__main{
        width: 100% ;
        min-height: 90% ;
        /* background-color: steelblue; */
    }

    &.rental__render{
        width: 100% ;
        height: 100% ;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: flex-start;
        /* background-color: tan; */
    }

    &.render__empty{
        width: 100% ;
        height: 100% ;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* background-color: teal; */
    }

    &.render__empty__head{
        font-size: 1.5rem;
        padding-bottom: 20px;
    }

`

export default RentalWrapper
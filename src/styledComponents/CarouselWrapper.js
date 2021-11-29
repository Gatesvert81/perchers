import styled from "styled-components";

// const animation = styled.animate`
    
// ` {
//     start: {

//     }
// }

const CarouselWrapper = styled.div`

    &.carousel{
        width: 100%;
        height: 100%;
        background-color: chocolate;
        position: relative;
    }

    &.carousel__images{
        width: 100%;
        height: 100%;
        position: relative;
        background-color: ${ props => props.color};
        transition: 0.5s ease-in-out ;
        border-radius: 5px;
    }

    &.carousel__preview__container{
        width: fit-content;
        height: fit-content;
        position: absolute;
        bottom: 5px;
        left: 5px;
        z-index: 10;
        display: flex;
        flex-direction: row;
        align-items: center;
    } 

    &.carousel__preview{
        width: 40px;
        height: 40px;
        margin: 5px;
        position: relative;
        background-color: ${ props => props.color};
        transition: 0.5s ease-in-out ;
        border-radius: 5px;
        border: 2px solid ;
        border-color: ${ props => props.selected ? 'white' : 'transparent' } ;
    }

    &.carousel__btns{
        display: none;
        transition: 0.5s ease-in-out ;
    }

    &.carousel:hover > &.carousel__btns{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 10px;
        justify-content: flex-start;
        transition: 0.5s ease-in-out ;
    }

    &.carousel__fav{
        align-self: flex-end;
    }

    &.carousel__control{
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* justify-self: center; */
        /* align-self: center; */
        /* background-color: azure; */
        width: 100%;
        height: 100%;
    }

    &.carousel__control__container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
    }

`

export default CarouselWrapper
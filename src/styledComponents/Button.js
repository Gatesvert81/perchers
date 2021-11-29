import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../assets/theme'

const StyledButton = styled.button`

    width: fit-content;
    height: fit-content;
    background: none;
    border: hidden;
    cursor: pointer;

    &.primary{
        padding: 10px 20px ;
        color: white;
        font-size: 0.9rem;
        font-weight: 600;
        background-color: orangered;
        border-radius: 5px;
        transition: 0.2s;
    }

    &.primary:hover, &.tetiary:hover, &.regular:hover, &.secondary:hover, &.side__nav__btn:hover  {
        box-shadow: 
            0px 0px 10px ${COLORS.btnShadow};
    }

    &.secondary{
        padding: 10px 20px ;
        width: 100%;
        color: orangered;
        font-size: 0.9rem;
        font-weight: 600;
        background-color: #ea61a740;
        border-radius: 5px;
        transition: 0.2s;
    }

    &.tetiary{
        padding: 5px 10px ;
        color: orangered;
        font-size: 0.75rem;
        font-weight: 300;
        background-color: none;
        border-radius: 5px;
        transition: 0.2s;
    }

    &.regular{
        padding: 5px 10px ;
        color: black;
        font-size: 0.75rem;
        font-weight: 300;
        background-color: none;
        border-radius: 5px;
        transition: 0.2s;
        border: 2px solid gray;
        margin-left: 5px;
    }

    &.offer__btn{
        padding: 10px 20px ;
        width: 100%;
        color: orangered;
        font-size: 0.9rem;
        font-weight: 600;
        /* background-color: #ea61a740; */
        border-radius: 5px;
        transition: 0.2s;
        box-shadow: 0px 0px 5px ${COLORS.btnShadow};
    }

    &.expand {
        width: 100%;
        height: 100%;
    }

    
    

    &.nav__btn{
        padding: 5px;
        font-size: 0.75rem;
        font-weight: 600;
    }

    &.icon{
        position: relative;
        width: 30px ;
        height: 30px;
    }

    &.filter{
        width: 40px;
        padding: 5px ;
        font-size: 0.75rem;
        font-weight: 600;
        border: 2px solid grey;
        border-radius: 5px;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    &.side__nav__btn{
        margin: 5px;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 10px 20px ;
        transition: 0.2s;
        /* border: 1px solid ${ props => props. COLORS.gray } ; */
    }

    &.sign__up__btn{
        padding: 10px 20px ;
        font-size: 0.75rem;
        font-weight: 600;
        border: 2px solid grey;
        border-radius: 5px;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    &.section__btn{
        width: 50%;
        text-align: center;
        font-size: 0.8em;
        font-weight: 600;
    }

    &.petch__btn{
        color: ${ props => props.select ? 'white' : 'black' } ;
    }

    &.host__btn{
        color: ${ props => props.select ? 'black' : 'white' } ;
    }

    &.sign__tab__btn{
        width: 50% ;
        height: 100% ;
        text-align: center;

    }

    &.sign__up__tab__select{
        color: black;
        font-size: ${ props => props.select ? '1.5rem' : '1rem' };
        opacity: ${ props => props.select ? '1' : '0.7' }
    }

    &.sign__in__tab__select{
        color: ${ props => props.select ? 'black' : 'black' };
        font-size: ${ props => props.select ? '1rem' : '1.5rem' };
        opacity: ${ props => props.select ? '0.7' : '1' }
    }

     /* Mid-destop View  */

     @media all and (min-width: 450px ) {

        &.filter{
            width: 100px;
        }

     }

`

const Wrapper = styled.div``

function Button({ children, click, name, select }) {
    return (
        <StyledButton onClick={click} 
        className={name} 
        select={select}  
        >
            {children}
        </StyledButton>
    )
}

export default Button

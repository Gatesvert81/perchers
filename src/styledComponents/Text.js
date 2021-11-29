import styled from "styled-components";
import { FONTS } from '../assets/theme'

const Text = styled.span`

    &.home__head__text{
        font-size: ${FONTS.h2};
        font-weight: 600;
    }

    &.sign__up__btn__text{
        padding-right: 5px;
    }

    &.filter__btn__text{
        display: none;
    }

    &.list__card__head{
        font-size: 0.6rem;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    &.list__card__text{
        font-size: 1.25rem;
        font-weight: 600;
    }

    &.body__head{
        font-size: ${FONTS.h4};
        font-weight: 500;
    }

    &.body__text{
        font-size: ${FONTS.body1};
        font-weight: 400;
    }

    &.cedi__input{
        position: absolute;
        top: 2.5px;
        left: 5px;
    }

    &.message__card__sub{
        font-size: 0.75rem;
        font-weight: 300;
    }

     /* Mid-destop View  */

     @media all and (min-width: 450px ) {
         
        &.filter__btn__text{
        display: block;
    }
     }

`

export default Text
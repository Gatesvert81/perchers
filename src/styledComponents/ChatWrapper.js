import styled from 'styled-components'
import { COLORS } from '../assets/theme'

const ChatWrapper = styled.div`


    &.chats{
        width: 100% ;
        min-height: 100vh ;
    }

    &.chats__head{
        font-size: 2rem;
        font-weight: 600;
        padding: 10px ;
    }

    &.chats__main{
        width: 100%;
        height: 100% ;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 10px;
        align-items: center;
    }


    &.chats__render{
        width: 100% ;
        height: 100% ;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 5px;
        /* background-color: steelblue; */
    }

    /* Chat Card */

    &.chat__card{
        width: 100% ;
        height: 50px ;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        box-shadow: 0px 0px 10px ${COLORS.shadow};
        border-radius: 5px;
    }

    &.chat__card__image__box{
        /* width: 20%; */
        padding: 0px 20px 0px 5px ;
    }

    &.chat__card__image{
        position: relative;
        width: 35px ;
        height: 35px ;
        border-radius: 50% ;
        overflow: hidden;
    }

    &.chat__card__main{
        /* width: 80% ; */
        display: flex ;
        flex-direction: column;
        justify-content: space-between;
    }

    &.chat__card__name{
        font-size: 1rem;
        font-weight: 500;
    }

    &.chat__card__message{
        font-size: 0.85rem;
        font-weight: 300;
    }

    /* Messages Page */

    &.messages{
        width: 100% ;
        height: 100vh ;
    }

    &.messages__main{
        width: 100% ;
        height: 92% ;
        /* background-color: aliceblue; */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px ;
    }

    &.messages__render{
        width: 100% ;
        height: 90% ;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        /* background-color: azure; */
    }

    &.messages__input__btn{
        display: grid;
        grid-template-columns: 4fr 1fr;
        grid-gap: 10px;
    }

    /* Message Card */

    &.message__card{
        width: 100% ;
        min-height: 50px ;
        display: flex;
        flex-direction: ${ props => props.fromMe ? "row-reverse" : "row" };
        margin: 5px 0px ;
    }

    &.message__card__image{
        width: 35px ;
        height: 35px ;
        border-radius: 50% ;
        background-color: chocolate;
        overflow: hidden;
        margin: 0px 10px ;

    }

    &.message__card__main{
        max-width: 70%;
        min-height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        border-radius: 5px;
        padding: 5px;
        background-color: ${ props => props.fromMe ? "beige" : "lavender" };
    }

`

export default ChatWrapper
import styled from "styled-components";
import { COLORS } from "../assets/theme";

const TextInput = styled.textarea`

    &.host__description__text{
        width: 100% ;
        height: 50px;
        width: 100%;
        border: 2px solid ${COLORS.lightGray};
        border-radius: 5px ;
        padding: 5px;
    }

`

export default TextInput
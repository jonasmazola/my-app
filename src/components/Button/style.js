import styled from "styled-components";

export const Botao = styled.button`
    width: 342px;
    height: 74px;
    background: ${props =>  props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
    border-radius: 14px;
    outline: none;

    border:  ${props =>  props.isBack ? '2px solid #FFFFFF' : 'none'};

    color:#ffffff;
    font-size: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    text-decoration: none;
    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.4
    }

    
`
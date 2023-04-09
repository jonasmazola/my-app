import styled from 'styled-components'
import Background from '../../img/back2.png'


export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 44px;
    height: 100%;
min-height: calc(100vh - 170px);

`

export const Imagem = styled.img`
    margin-top: 30px;

`


// export const Botao = styled(Link)`
//     width: 342px;
//     height: 74px;
//     background: transparent;
//     border-radius: 14px;
//     outline: none;
//     border: solid 1px #ffffff;
//     color:#ffffff;
//     font-size: 25px;
//     cursor: pointer;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 20px;
//     opacity: 1 ;
//     text-decoration: none;

//     &:hover {
//         opacity: 0.8;
//     }

//     &:active {
//         opacity: 0.4
//     }

    
// `

export const User = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
width: 342px;
height: 58px;
border:none;
outline: none;
padding-left: 25px;
background: transparent;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
color: black;
font-size: 25px;
margin-bottom: 10px;

button {
    border: none;
    cursor: pointer;
    outline: none;
    background: none;
    
}

img {
    width: 24px;
    border: none;
    cursor: pointer;
    outline: none;
    background: none;
   
}



`
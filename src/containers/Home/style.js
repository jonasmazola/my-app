import styled from 'styled-components'
import Background from '../../img/back1.png'


export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 44px;
    height: 100vh;

`

export const Imagem = styled.img`
    margin-top: 30px;

`



export const InputLabel = styled.p`
letter-spacing: -0.408px;
color:#EEEEEE;
margin-left:25px;
    

`

export const Input = styled.input`
width: 342px;
height: 58px;
border:none;
outline: none;
padding-left: 25px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
color: #FFFFFF;
font-size: 25px;
margin-bottom: 35px;
`


export const User = styled.li `
display: flex;
justify-content: space-around;
align-items: center;
width: 342px;
height: 58px;
border:none;
outline: none;
padding-left: 25px;
/* background: rgba(255, 255, 255, 0.25); */
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
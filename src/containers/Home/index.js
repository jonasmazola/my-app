import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import People from '../../img/Consulting_Isometric 1.png';
import ArrowNext from '../../img/avancar.png';
import { H1 } from '../../components/Title/style'
import { ContainerItens } from '../../components/ContainerItens/style';
import { Botao } from '../../components/Button/style';

import {
  Container,
  Imagem,
  InputLabel,
  Input,
} from './style'



const App = () => {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const navigate = useNavigate ()


  
  
  
  async function addNewUser() {
    
    const { data: newUser } = await axios.post("http://localhost:3001/users",
    {
      name: inputName.current.value,
      age: inputAge.current.value
    })
    
    setUsers([...users, newUser])
    
    goBackPage()
  }




  
  function goBackPage( ) {
    navigate("/usuarios")
    
  }






  useEffect(() => {

    async function fetchUsers() {

      const { data: newUsers } = await axios.get("http://localhost:3001/users")
      setUsers(newUsers)
    }
    fetchUsers()

  }, [users])



  return (
    <Container>
      <Imagem alt='logo imagem' src={People} />
      <ContainerItens>
        <H1 abacate={'abacate maduro'}>Ola!</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder='Nome'></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder='Idade'></Input>

        <Botao  onClick={addNewUser}>Cadastrar
          <img src={ArrowNext} alt="seta-avancar" />
        </Botao>

      </ContainerItens>
    </Container>
  )
}

export default App
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import People from '../../img/User Profile_Monochromatic 2.png';
import ArrowPrevious from '../../img/recuar.png';
import Trash from '../../img/lixeira.png'
import Edit from '../../img/editar.png'
import { H1 } from '../../components/Title/style'
import { ContainerItens } from '../../components/ContainerItens/style';
import { Botao } from '../../components/Button/style';

import {
  Container,
  Imagem,
  User
} from './style'


const Usuarios = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()




  useEffect(() => {

    async function fetchUsers() {

      const { data: newUsers } = await axios.get("http://localhost:3001/users")
      setUsers(newUsers)
    }
    fetchUsers()

  }, [users])




  async function deleteUser(userId) {

    await axios.delete('http://localhost:3001/users/' + userId)
    const newUsers = users.filter(user => user.id !== userId)

    setUsers(newUsers)

  }

  function voltarHome(){
    navigate("/")
  }




  function editarUser(userId) {
    navigate("/editar")
    
    console.log(userId)

  }



  return (
    <Container>
      <Imagem alt='logo imagem' src={People} />
      <ContainerItens isBlur={true}>
        <H1>Usuarios!</H1>
        <ul>
          {
            users.map((user) => (

              <User key={user.id}>

                <p>{user.name}</p> <p>{user.age}</p>
                <button onClick={() => deleteUser(user.id)}>
                  <img src={Trash} alt="" />
                </button>
                <button onClick={() => editarUser(user.id)}>
                  <img src={Edit} alt="" />
                </button>

              </User>

            ))
          }
        </ul>


        <Botao isBack={true} onClick={voltarHome} >
          <img src={ArrowPrevious} alt="seta-avancar" />Voltar
        </Botao>



      </ContainerItens>
    </Container>
  )
}

export default Usuarios
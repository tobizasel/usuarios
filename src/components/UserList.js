import React, {useState, useEffect} from 'react'
import Carta from './Card'

const UserList = () => {

    const urlApi = "https://randomuser.me/api/?results=5"
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(urlApi)
        .then(response => response.json())
        .then(data => setUsers(data.results))
        .catch(error => console.log('Hubo un error ' + error))
        .finally(console.log(users))
    }, [])


  return (
    <div className='body'>
         <h1>Listado: </h1>
         <div className='cartas'>
        {
        users.map((user, index) => <Carta nombre={`${user.name.first} ${user.name.last}`} key={index} img={user.picture.large} texto={user.gender} edad={user.dob.age} location={user.location} mail={user.email}/>)
        }
        </div>
    </div>
  )
}

export default UserList
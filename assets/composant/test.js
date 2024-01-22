import React from 'react';
import { useState,useEffect } from 'react';

import UserForm from './UserForm';

import Api from '../Api/userApi';



  
   

export  default function Test (){
     
// state (etat ,données)

const [users,setUsers] = useState ([]);
const [isMounted, setIsMounted] = useState(false);
const [errors, setErrors] = useState();

useEffect(() => {
  fetch("http://localhost:8000/api/users.json",  {
    type: "GET",
  })
  .then(response => response.json())
  .then(users =>{
   // console.log (users)
    setUsers(users)
    setIsMounted(false)
  }).catch((e) => {
    setErrors(e)
  }).finally(() =>{
    setIsMounted(false)
  });
}, []);
// comportents

 const handleDelete =  async (id) => {
 
   try {
     await fetch('http://localhost:8000/api/users/'+id, {
      method: "DELETE",
      headers:{
        'content-Type':' application/json',
      },
      
    });

  alert('Attention !!voulez allez effacer ce user!!');
  // 1.copie du state
 //const UsersCopy =[...users] ;
  // 2.manipuler mon state
 const newUsers = users.filter((user) => user.id !== id);

  setUsers(newUsers);
} catch (erreur){
  console.error ("Erreur lors de la suppression de l'objet " ,erreur)
}};

let handleAdd = (userAjouter) => {
// 1 copie de state 
const UsersCopy = [...users];
// 2 manipulation sur copie state
UsersCopy.push(userAjouter);
   // 3 modifier le state avec le setter
    
   setUsers(UsersCopy);
  };


// Affichage

    return (<>
    <h1>ListUsers</h1>
    <table className='table'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Lastname</th>
                <th>Firstname</th>
                <th>birdate</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>actions</th>
            </tr>
        </thead>
        {users && <tbody>
        
        <>
          {users.map(user =>(
          <tr key={user.id} >
           <td>{user.id}</td>
           <td><a href="/showuser" > {user.lastName}</a></td>
           <td>{user.firstName}</td>
           <td>{user.birthdate}</td>
           <td>{user.email}</td>
           <td>{user.address}</td>
           <td>{user.phone}</td>
           <td><button
           onClick={(() => handleDelete(user.id))}
           >Supprimer</button></td>
            
            
            
            </tr> 
          
          ))}
        </>
        
        </tbody>}
      
    </table>
    <UserForm handleAdd={handleAdd} keys={users.id} /> 
    </>
    );
}
//(;   {users && users.map(user => {
 // <UserForm  handleAdd ={handleAdd} keys={user.id} />)
 
 /**/
 /* */
 /*{users && <div>
        
  <ul>
    {users.map(user =>(<li key={user.id}><a href="/showuser" >{user.lastName}
  
    </a><button
     onClick={(() => onUserDelete(userInfo.id))}
     >Supprimer</button></li>,
     <li>{user.id} </li>
      ))}
  </ul>
  
  </div>}
 

// Gestion des formulaires
// 1. création du formulaire
// 2. soumission du formulaires
// 3. collecte des données formulaires 
// 3a.  methode 1 : documentGetElementById "React(useRef)"
// 3b.  méthode 2 : sync descendante / ascendante
 

/* {id:1,lastName:"julien",firstName:"Antoine",birthdate:"1990/02/12",email:"test@test.com",address:"2 rue des changnion",phone:"0709871267"},
    {id:2,lastName:"Patou",firstName:"renet",birthdate:"1993/12/12",email:"test@test.com",address:"2 rue des changnion",phone:"0709871267"}  ,
    {id:3,lastName:"julien",firstName:"Pat",birthdate:"1999/06/12",email:"test@test.com",address:"2 rue des changnion",phone:"0709871267"},
    {id:4,lastName:"Lolo",firstName:"Fafa",birthdate:"1997/12/12",email:"test@test.com",address:"2 rue des changnion",phone:"0709871267"}
    */

    
   /*  */
import React from 'react';
import { useState,useEffect } from 'react';
import User from './user';
import UserForm from './UserForm';



  
   

export  default function Test (props){
     
// state (etat ,données)

const [users,setUsers] = useState ( [
   /* {id:1,lastName:"julien",firstName:"Antoine",birthdate:"1990/02/12",email:"test@test.com",address:"2 rue des changnion",phone:"0709871267"},
    {id:2,lastName:"Patou",firstName:"renet",birthdate:"1993/12/12",email:"test@test.com",address:"2 rue des changnion",phone:"0709871267"}  ,
    {id:3,lastName:"julien",firstName:"Pat",birthdate:"1999/06/12",email:"test@test.com",address:"2 rue des changnion",phone:"0709871267"},
    {id:4,lastName:"Lolo",firstName:"Fafa",birthdate:"1997/12/12",email:"test@test.com",address:"2 rue des changnion",phone:"0709871267"}
    */
    ]);
  const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      fetch("http://localhost:8000/api/users", {
        type: "GET",
      })
      .then((response) => {
       
        return response.json()
      })
      .then((result)=>{
        console.log (result)
        setUsers ({user:result})
      })
  
     
    }, [isMounted]);




/* const [email ,setEmail] = useState ("") ;
const [address ,setAddress] = useState ("") ;
const [phone ,setPhone] = useState ("") ; */

//const inputRef = useRef();

// comportent
const handleDelete = (id) => {
  //console.log("id");
  alert('Attention !!voulez allez effacer ce user!!');
  // 1.copie du state
  const UsersCopy =[...users] ;
  // 2.manipuler mon state
 const UsersCopyUpdated = UsersCopy.filter(user => user.id !== id);
  // 3.modifier le state
  setUsers(UsersCopyUpdated);
};

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
        <tbody>
        { users.map (user => ( 
         
          <User userInfo={user} onUserDelete={handleDelete} key={user.id} />
        ))}
        </tbody>
    </table>
      <UserForm  handleAdd ={handleAdd} /> 
    </>
    );
}

/*{users && users.map((user, index) => {
  return (
    <li key={index}>
      {user.Nom} {user.Prenom}
    </li>
  );
})}*/

// Gestion des formulaires
// 1. création du formulaire
// 2. soumission du formulaires
// 3. collecte des données formulaires 
// 3a.  methode 1 : documentGetElementById "React(useRef)"
// 3b.  méthode 2 : sync descendante / ascendante
 


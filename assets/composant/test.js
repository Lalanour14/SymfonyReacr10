import React from 'react';
import { useState } from 'react';

const USERS = [
{id:1,lastName:"julien",firstName:"Antoine",birthdate:"1990/02/12",email:"test@test.com",address:"2 rue des changnion",phone:"0709871267"},
{id:2,lastName:"Patou",firstName:"renet",birthdate:"1993/12/12",email:"test@test.com",address:"2 rue des changnion",phone:"0709871267"}  ,
{id:3,lastName:"julien",firstName:"Pat",birthdate:"1999/06/12",email:"test@test.com",address:"2 rue des changnion",phone:"0709871267"},
{id:4,lastName:"Lolo",firstName:"Fafa",birthdate:"1997/12/12",email:"test@test.com",address:"2 rue des changnion",phone:"0709871267"}

]

export default function Test (props){
     
// state (etat ,données)

const [users,setUsers] = useState (USERS);

 const [nouveauUser,setNouveauUser] = useState("");

// comportent
 const handleDelete = (id) => {
    console.log("id");
    alert('Attention !!voulez allez effacer ce user!!');
    // 1.copie du state
    const UsersCopy =[...users] ;
    // 2.manipuler mon state
   const UsersCopyUpdated = UsersCopy.filter(user => user.id !== id);
    // 3.modifier le state
    setUsers(UsersCopyUpdated);
 };

 const handleSubmit = () => {
    
    alert("handleSubmit");

    // 1 copie de state 
     const UsersCopy = [...users]

    // 2 manipulation sur copie stated
    const id = new Date().getTime()
    const nom = nouveauUser
    UsersCopy.push({id: id , lastName: lastName, firstName: firstName, birthdate: birthdate, email: email, address: address, phone: phone});

    // 3 modifier le state avec le setter

    setUsers(UsersCopy);
};

const handleChange = (event) =>{
   setNouveauUser(event.target.value); 
    
};
  
// Affichage

    return (<>
    <div>ListUsers</div>
    <table className='table'>
<thead>
            <tr>
                <th>Id</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>birdate</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>actions</th>
            </tr>
        </thead>
        <tbody>
        {users.map(user => (
          <tr key={user.id}>

           <td>{user.id}</td> 
           <td>{user.lastName}</td>
           <td>{user.firstName}</td>
           <td>{user.birthdate}</td>
           <td>{user.email}</td>
           <td>{user.address}</td>
           <td>{user.phone}</td>
           <td><button
           onClick={(() => handleDelete(user.id))}
           >Supprimer</button></td>
          </tr> 
        ))
        }
        </tbody>
        
        </table>
       
        <form action="submit" onSubmit={handleSubmit} >
           
             <input value={nouveauUser.lastName} type='text' placeholder='ajouter Lastname'
              onChange={handleChange}/>
                <label>Lastname</label>  
              <input  value={nouveauUser.firstName} type='text' placeholder='ajouter Firstname'
               onChange={handleChange}/>
                <label>Firstname</label>
            <input  value={nouveauUser.birthdate} type='text' placeholder='ajouter Birthdate'
            onChange={handleChange}/>
                <label>Birthdate</label>
           <input   value={nouveauUser.email} type='text' placeholder='ajouter Email'
            onChange={handleChange} />
                <label>Email</label>
            <input value={nouveauUser.address} type='text' placeholder='ajouter Address'
           onChange={handleChange} />
                <label>Address</label>
            <input value={nouveauUser.phone} type='text' placeholder='ajouter Phone'
           onChange={handleChange}/>
                <label>Phone</label>

            
            <button>Ajouter</button>

        </form>
        
   
    </>
    );
}

 

// Gestion des formulaires
// 1. création du formulaire
// 2. soumission du formulaires
// 3. collecte des données formulaires 
// 3a.  methode 1 : documentGetElementById "React(useRef)"
// 3b.  méthode 2 : sync descendante / ascendante
 


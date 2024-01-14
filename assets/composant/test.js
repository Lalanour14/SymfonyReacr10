import React from 'react';
import { useState } from 'react';




export default function Test (props){
     
// state (etat ,données)

const [users,setUsers] = useState ( [
    {id:1,lastName:"julien",firstName:"Antoine",birthdate:"1990/02/12",email:"test@test.com",address:"2 rue des changnion",phone:"0709871267"},
    {id:2,lastName:"Patou",firstName:"renet",birthdate:"1993/12/12",email:"test@test.com",address:"2 rue des changnion",phone:"0709871267"}  ,
    {id:3,lastName:"julien",firstName:"Pat",birthdate:"1999/06/12",email:"test@test.com",address:"2 rue des changnion",phone:"0709871267"},
    {id:4,lastName:"Lolo",firstName:"Fafa",birthdate:"1997/12/12",email:"test@test.com",address:"2 rue des changnion",phone:"0709871267"}
    
    ]);
const  [nouveauUser,setNouveauUser] =  useState ({id :"", lastName:"" , firstName:"" , 
birthdate:"" , email:"", address:"", phone:""})



 // const inputRef = useRef();

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

 const handleSubmit = (event) => {

    event.preventDefault();
    // alert("handleSubmit");
  // console.log(inputRef.current.value);
    
  // 1 copie de state 
     const UsersCopy = [...users];

    // 2 manipulation sur copie state
   const id = new Date().getTime()
   const lastName =  lastName
   const firstName =  firstName
   const birthdate =  birthdate 
   const email =  email
   const address =  address
    const phone =  phone

    UsersCopy.push({id , lastName , firstName , birthdate , email, address, phone});

    // 3 modifier le state avec le setter

   setUsers(UsersCopy);

  // setNouveauUser("");
};
/* const handleChange = (event) => {
    setNouveauUser (event.target.value);
} */


 const handleForm = (event) => {
    console.log(event.target.value );
    setNouveauUser ({ [event.target.name]: event.target.value });
  } 

  
// Affichage

    return (<>
    <div>ListUsers</div>
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
       
        <form action="submit" className="fomr-control" onSubmit={handleSubmit} >
           <div>
            <input  name='lastName' type='text' placeholder='ajouter Lastname'
              onChange={handleForm} />
           </div>
            
            <div>
                <input  name="firstName" type='text' placeholder='ajouter Firstname'
              onChange={handleForm} />
            </div>
             
            <div>
                <input  name="birthdate" type='text' placeholder='ajouter birthdate'
              onChange={handleForm} />
              
            </div>
            
            <div>
                 <input  name="email" type='text' placeholder='ajouter Email'
              onChange={handleForm} />
            </div>
              
            <div>
                 <input  name="address" type='text' placeholder='ajouter Adress'
              onChange={handleForm} />

            </div>
            <div>   
                 <input  name="phone" type='text' placeholder='ajouter phone'
              onChange={handleForm} />
                </div>
        
          


              

            
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
 


import React from 'react';
import { useState } from 'react';


let nextId= 6 ;

export default function Test (props){
     
// state (etat ,données)

const [users,setUsers] = useState ( [
    {id:1,lastName:"julien",firstName:"Antoine",birthdate:"1990/02/12",email:"test@test.com",address:"2 rue des changnion",phone:"0709871267"},
    {id:2,lastName:"Patou",firstName:"renet",birthdate:"1993/12/12",email:"test@test.com",address:"2 rue des changnion",phone:"0709871267"}  ,
    {id:3,lastName:"julien",firstName:"Pat",birthdate:"1999/06/12",email:"test@test.com",address:"2 rue des changnion",phone:"0709871267"},
    {id:4,lastName:"Lolo",firstName:"Fafa",birthdate:"1997/12/12",email:"test@test.com",address:"2 rue des changnion",phone:"0709871267"}
    
    ]);
/* const  [nouveauUser,setNouveauUser] =  useState ({ lastName:"" , firstName:"" , 
birthdate:"" , email:"", address:"", phone:""}) */
const [form, setForm] = useState ({lastName :"", firstName:"", birthdate:"",
email:"", address:"", phone:""});


/* const [email ,setEmail] = useState ("") ;
const [address ,setAddress] = useState ("") ;
const [phone ,setPhone] = useState ("") ; */

//const inputRef = useRef();

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

 const handleSubmit = (e) => {

    e.preventDefault();
    // alert("handleSubmit");

 // console.log(inputRef.current.value);
  
  // 1 copie de state 
    const UsersCopy = [...users];

    // 2 manipulation sur copie state
  
  const lastName =  form.lastName
   const firstName = form.firstName
   const birthdate = form.birthdate 
   const email =  form.email
   const address =  form.address 
    const phone =  form.phone 
    const id =  nextId++;
let newuser ={id , lastName , firstName , birthdate , email, address, phone}
console.log(newuser);
UsersCopy.push(newuser);

    // 3 modifier le state avec le setter

   setUsers(UsersCopy);

   //setNouveauUser("");
};
/* const handleChange = (event) => {
    setNouveauUser (event.target.value);
} */


/* const handleForm = (event) => {
    console.log(event.target.value );
    setNouveauUser ({ [event.target.name]: event.target.value });
  } */

  
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
           
            <input  name='lastName' type='text' placeholder='ajouter Lastname'
             value= {form.lastName} onChange={e => {
              setForm({
                ...form,
                lastName: e.target.value
              });
            }} />
         
           <input  name="firstName" type='text' placeholder='ajouter Firstname'
             value= {form.firstName} onChange={e => {
              setForm({
                ...form,
                firstName: e.target.value
              });
            }} />
           
            <input  name="birthdate" type='text' placeholder='ajouter birthdate'
              value= {form.birthdate} onChange={ e=> {setForm ({...form,
               birthdate: e.target.value});
               }}/>
            
                 <input  name="email" type='text' placeholder='ajouter Email'
              value= {form.email} onChange={ e => 
                {setForm ({ 
                 ...form,
                 email: e.target.value});
              }} />
                    
            <input  name="address" type='text' placeholder='ajouter Adress'
             value= {form.address} onChange={ e => {
             setForm ({
              ...form,
              address: e.target.value}); 
             }} />
          
          <input  name="phone" type='text' placeholder='ajouter phone'
               value= {form.phone} onChange={ e=> {
                setForm({
                  ...form,
                 phone: e.target.value});
               }}/>
            
        
          


              

            
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
 


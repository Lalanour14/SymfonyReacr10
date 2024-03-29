import React from "react";

import { useState } from "react";

let nextId= "" ;
export default function UserForm ({handleAdd}) {
    
//state
    const [form, setForm] = useState ({lastName :"", firstName:"", birthdate:"",    email:"", address:"", phone:""});

    // comportements 
 
    
     const handleSubmit = async (e) => {
    
        e.preventDefault();

        try {
          // effectuer une requête Post vers API avec les donnèes du nouvelle objet
          const reponse = await fetch("http://localhost:8000/api/users.json",{
          method: 'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body: JSON.stringify(form),
        
          });
          if(reponse.ok){
            //Le POST a réussi,vous gérer la réponse ici
            console.log('Objet crée avec succés');
          }else{
            // le POST a échoué , gérer les erreurs ici 
            console.error('Error lors de la création de l\'objet ');

          } 
         }catch(erreur){
            console.error('Erreur lors de la requête POST:',erreur)

          }
     ; 
        // alert("handleSubmit");
    
     // console.log(inputRef.current.value);
      
// 1 copie de state 
       // const UsersCopy = [...users];
 
// 2 manipulation sur copie state
      
      const lastName =  form.lastName
       const firstName = form.firstName
       const birthdate = form.birthdate 
       const email =  form.email
       const address =  form.address 
       const phone =  form.phone 
      const id = ""
    let userAjouter ={ id, lastName , firstName , birthdate , email, address, phone}
    //console.log(userAjouter);
    //UsersCopy.push(newuser);
     handleAdd (userAjouter);

// 3 modifier le state avec le setter
      setForm({ lastName :"", firstName:"", birthdate:"",
      email:"", address:"", phone:""});
       // setUsers(UsersCopy);
       
    };
    /* const handleChange = (event) => {
        setNouveauUser (event.target.value);
    } */
    
    
    /* const handleForm = (event) => {
        console.log(event.target.value );
        setNouveauUser ({ [event.target.name]: event.target.value });
      } */
    
    // affichage (render)
    return ( 
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
);

}
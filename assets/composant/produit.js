import React from "react";
import { useState } from "react";

let initialProduit = [
    { id: 0, name: 'VTT', value: "300" ,type: 'vélo',userId:4},
    { id: 1, name: 'Canapé', value: "1000" ,type:'Meuble', userId:3},
    { id: 2, name: 'Switch', value: "'400" ,type: 'console de jeux',userId:5},
  ];



export  default function Produit (props){


//state (état;données)   
    const [produits, setProduits] = useState(initialProduit);
    const [form, setForm] = useState ({name :"", valeur:"", type:"",userId:""});

 //comportements 
//const handledelete = ()=> {

//}
/*const handleChange = (event) => {
  setNouveauUser (event.target.value);
} */
 const handleChange = (event) => {
  console.log(event.target.value);
  /*setForm({
    ...form,
    name: e.target.value
  })*/;} ;
  
    
//Affichage (render)
    return( <>
      <h1>List produits</h1>
      
      <table className="table">
        <thead>
            <tr>
                <th> id</th>
                <th> Name</th>
                <th> Value</th>
                <th> type</th>
                <th> userId</th>
                </tr>
        </thead>
        <tbody>
        {produits.map(produit => (
          <tr key={produit.id}>

           <td>{produit.id}</td> 
           <td>{produit.name}</td>
           <td>{produit.value}</td>
           <td>{produit.type}</td>
           <td>{produit.userId}</td>
           
           <td> <button onClick={() => {
              setProduits(
                produits.filter(a =>
                  a.id !== produit.id
                )
              );
            }}>
              Supprimer
            </button></td>
          </tr>
        ))}

        </tbody>
        </table> 
       
        <form action="submit" className="fomr-control"  >
           
           <input  name='name' type='text' placeholder='ajouter name'
          value={form.nameame}
          onChange=  {handleChange}/>
           
           <input  name='value' type='text' placeholder='ajouter value'
           
           value={form.valeur}
           onChange={e => {
             setForm({
               ...form,
               valeur: e.target.value
             });
           }}/>
           
           <input  name='type' type='text' placeholder='ajouter type'
           
           value={form.type}
           onChange={e => {
             setForm({
               ...form,
              type: e.target.value
             });
           }}/>

           <input  name='userId' type='text' placeholder='ajouter userId'
           
           value={form.userId}
           onChange={e => {
             setForm({
               ...form,
               userId: e.target.value
             });
           }}/>
           
           
          <button>Ajouter</button>

       </form>
      
    </>
    );
}
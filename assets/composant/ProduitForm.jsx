import React from "react";

import { useState } from "react";
let nextId = 4;
export default function ProduitForm ({handleAdd}){
    //state (état, données)
    const [form, setForm] = useState ({name :"", valeur:"", type:"",userId:""});
    // comportement
    const handleSubmit = (e) => {

        e.preventDefault();
        // alert("handleSubmit");
    
      
      // 1 copie de state 
      //const ProduitsCopy = [...produits];
    
        // 2 manipulation sur copie state
        const name = form.name
        const value = form.valeur
        const type = form.type
        const userId = form.userId
      const id =  nextId++;
    let produitAjouter ={id , name , value , type , userId};
    //console.log(produitAjouter);
    //ProduitsCopy.push(produitAjouter);
    handleAdd(produitAjouter);
        // 3 modifier le state avec le setter
    
      
       setForm({name :"", valeur:"", type:"",userId:""});
     };
        

    // affichage (render)
     return (
         <form action="submit" className="fomr-control" onSubmit={handleSubmit} >
           
     <input  name='name' type='text' placeholder='ajouter name'
    value={form.name}
    onChange=  {e => {
      setForm({
        ...form,
        name: e.target.value
      });
    }} />
     
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
 
) ;  


}
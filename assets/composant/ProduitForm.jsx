import React from "react";

import { useState } from "react";
let nextId = "";
export default function ProduitForm ({handleAdd}){
    //state (état, données)
    const [form, setForm] = useState ({name :"", valeur:"", type:"", userId:""});
    // comportement
    const handleSubmit = async(e) => {

        e.preventDefault();
        // alert("handleSubmit");
        try {
          // effectuer une requête Post vers API avec les donnèes du nouvelle objet
          const reponse = await fetch("http://localhost:8000/api/possesions",{
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
      
      // 1 copie de state 
      //const ProduitsCopy = [...produits];
    
        // 2 manipulation sur copie state
        const name = form.name
        const value = form.valeur
        const type = form.type
        const userId = form.userId
      const id =  "";
    let produitAjouter ={id , name , value , type , userId};
    //console.log(produitAjouter);
    //ProduitsCopy.push(produitAjouter);
      handleAdd(produitAjouter);
        // 3 modifier le state avec le setter
    
      
       setForm({name :"", value:"", type:"",userId:""});
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
     
     <input  name='valeur' type='text' placeholder='ajouter value'
     
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
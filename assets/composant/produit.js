import React from "react";
import { useState,useEffect } from "react";
import SingleProduit from "./singleproduit";
import ProduitForm from "./ProduitForm";

let initialProduit = [
    { id: 0, name: 'VTT', value: "300" ,type: 'vélo',userId:4},
    { id: 1, name: 'Canapé', value: "1000" ,type:'Meuble', userId:3},
    { id: 2, name: 'Switch', value: "'400" ,type: 'console de jeux',userId:5},
  ];


export  default function Produit (){


//state (état;données)   
    const [produits, setProduits] = useState([]);
    const [isMounted, setIsMounted] = useState(false);
    const [errors, setErrors] = useState();
    useEffect(() => {
      fetch("http://localhost:8000/api/possesions.json",  {
        type: "GET",
      })
      .then(response => response.json())
      .then(produits =>{
       // console.log (users)
        setProduits(produits)
        setIsMounted(false)
      }).catch((e) => {
        setErrors(e)
      }).finally(() =>{
        setIsMounted(false)
      });
    }, []);
//console.log(map());
 //comportements 
const handleDelete = (id) => {
  //console.log("id");
  alert('Attention !!voulez allez effacer ce user!!');
  // 1.copie du state
  const ProduitsCopy =[...produits] ;
  // 2.manipuler mon state
 const ProduitsCopyUpdated = ProduitsCopy.filter(user => user.id !== id);
  // 3.modifier le state
  setProduits(ProduitsCopyUpdated);
};

/*const handleChange = (event) => {
  setNouveauUser (event.target.value);
} */
 /*const handleChange = (event) => {
  console.log(event.target.value);
  setForm({
    ...form,
    name: e.target.value
  });} ; */
let handleAdd = (produitAjouter) => {
  //copie du state
  const ProduitsCopy = [...produits];
  // 2.manipulation sur la copie
  ProduitsCopy.push(produitAjouter);

  // 3. modifier le state avec le setter
  setProduits(ProduitsCopy);
}
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
        {produits && <tbody>
        
        <>
          {produits.map(produit =>(
          <tr key={produit.id} >
           <td>{produit.id}</td>
           <td><a href="/" > {produit.name}</a></td>
           <td>{produit.value}</td>
           <td>{produit.type}</td>
           <td>{produit.userId}</td>
           
           <td><button
           onClick={(() => handleDelete(user.id))}
           >Supprimer</button></td>
            
            
            
            </tr> 
          
          ))}
        </>
        
        </tbody>}
        </table> 
       
      <ProduitForm handleAdd={handleAdd} /> 
    </>
    );
}
import React from "react";
import { useState } from "react";
import SingleProduit from "./singleproduit";
import ProduitForm from "./ProduitForm";

let initialProduit = [
    { id: 0, name: 'VTT', value: "300" ,type: 'vélo',userId:4},
    { id: 1, name: 'Canapé', value: "1000" ,type:'Meuble', userId:3},
    { id: 2, name: 'Switch', value: "'400" ,type: 'console de jeux',userId:5},
  ];



export  default function Produit (props){


//state (état;données)   
    const [produits, setProduits] = useState(initialProduit);


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
        <tbody>
        {produits.map(produit => (
          <SingleProduit produitInfo ={produit} onProduitDelete={ handleDelete} key={produit.id} />
              ))}     
        </tbody>
        </table> 
       
      <ProduitForm handleAdd={handleAdd} /> 
    </>
    );
}
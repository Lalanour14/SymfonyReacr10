import React from "react";
import { useState } from "react";

let initialProduit = [
    { id: 0, name: 'VTT', value: "300" ,type: 'vélo',userId:4},
    { id: 1, name: 'Canapé', value: "1000" ,type:'Meuble', userId:3},
    { id: 2, name: 'Switch', value: "'400" ,type: 'console de jeux',userId:5},
  ];
export  default function Produit (props){
        
    const [produits, setProduits] = useState(
        initialProduit
      );
    

    return <>
      <h1>List produits</h1> 
      
      <table>
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
    </>
     {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
              setArtists(
                artists.filter(a =>
                  a.id !== artist.id
                )
              );
            }}>
              Supprimer
            </button>
          </li>
        ))}
}
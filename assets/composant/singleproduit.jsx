
import React from 'react';


export default function SingleProduit({produitInfo,onProduitDelete}) {

    // state (état ,données)

    //comportement 


    //affichage (render)

    return (
    <tr >

           <td>{produitInfo.id}</td> 
           <td>{produitInfo.name}</td>
           <td>{produitInfo.value}</td>
           <td>{produitInfo.type}</td>
           <td>{produitInfo.userId}</td>
           
           <td> <button onClick={(() => onProduitDelete(produitInfo.id))}>
              Supprimer
            </button></td>
          </tr>
        
     ) ;




}

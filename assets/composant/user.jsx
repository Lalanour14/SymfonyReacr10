import React from "react";

export  default function User ({userInfo, onUserDelete}){

 // state 
// let userInfo = props.userInfo;
// let onUserDelete = props.onUserDelete;
   

 // comportement

 // Affichage (render)
    return (
        <tr >
           <td>{userInfo.id}</td> 
           <td>{userInfo.lastName}</td>
           <td>{userInfo.firstName}</td>
           <td>{userInfo.birthdate}</td>
           <td>{userInfo.email}</td>
           <td>{userInfo.address}</td>
           <td>{userInfo.phone}</td>
           <td><button
           onClick={(() => onUserDelete(userInfo.id))}
           >Supprimer</button></td>
          </tr> 


    );
 



}
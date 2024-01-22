import React from "react";
import { useState,useEffect} from "react";





export  function ShowUser () {
//state

  const [user, setUser] = useState({});
 // const [possessions, setPossessions] = useState([]);
//comportement

//Affiche (render)
    return (
    <>
        <h1>User</h1>
        <table className="table">
            <thead>
                 <tr>
                     <th>Id</th>
                     <th>Lastname</th>
                     <th>Firstname</th>
                     <th>birdate</th>
                     <th>Email</th>
                     <th>Address</th>
                     <th>Phone</th>  
                 </tr>
            </thead>
            <tbody>
             
            </tbody>
        </table>
 
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
        <tr >
           <td>{user.id}</td> 
           <td> {user.lastName}</td>
           <td>{user.firstName}</td>
           <td>{user.birthdate}</td>
           <td>{user.email}</td>
           <td>{user.address}</td>
           <td>{user.phone}</td>

          </tr> 

      
        </tbody>
        </table>
        <a href="/test">retour ListUsers</a>
    </>
    );

}
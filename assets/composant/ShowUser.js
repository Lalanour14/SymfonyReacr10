import React from "react";


export  function ShowUser () {
//state

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
         
      
        </tbody>
        </table>
        <a href="/test">retour ListUsers</a>
    </>
    );

}
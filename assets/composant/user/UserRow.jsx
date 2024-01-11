import React from "react"
/**
 * 
 * @param {{id:string, lastName:string, firstName:string, brithdate:string, email:string,
 *  address:string, phone:string}} user
 * 
 * 
 */


export function UserRow ({user}){

    return <tr>
        <td>{user.id}</td>
        <td>{user.lastName}</td>
        <td>{user.firstName}</td>
        <td>{user.birthdate}</td>
        <td>{user.email}</td>
        <td>{user.address}</td>
        <td>{user.phone}</td>
        <td>
            <button>Delete</button>
        </td>
    </tr>
}
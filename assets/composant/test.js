import React from 'react';
import { UserRow } from './user/UserRow';

const USERS = [
{id:1,lastName:"julien",firstName:"Antoine",birthdate:"1990/02/12",email:"test@test.com",address:"2 rue des changnion",phone:"0709871267"},
{id:2,lastName:"Patou",firstName:"renet",birthdate:"1993/12/12",email:"test@test.com",address:"2 rue des changnion",phone:"0709871267"}  ,
{id:3,lastName:"julien",firstName:"Pat",birthdate:"1999/06/12",email:"test@test.com",address:"2 rue des changnion",phone:"0709871267"},
{id:4,lastName:"Lolo",firstName:"Fafa",birthdate:"1997/12/12",email:"test@test.com",address:"2 rue des changnion",phone:"0709871267"}

]

export default function Test (props){
     

   
    return <>
    <div>ListUsers</div>
    <ListUsers users={USERS}/>
    < button >Add</button> 
    <button>essaie</button>
    </>;

}

function ListUsers ({users}){

    const rows = [];

    for(let user of users){

        rows.push(<UserRow user={user} key={user.id}
         onClick={deleteUser()} /> )
    }

    return <table className='table'>
<thead>
            <tr>
                <th>Id</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>birdate</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>actions</th>
            </tr>
        </thead>
        <tbody>
            {rows}
            
            
        </tbody>

        </table>

}

 function deleteUser (){


}

   


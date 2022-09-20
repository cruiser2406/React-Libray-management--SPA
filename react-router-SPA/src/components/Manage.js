import { NavLink, Outlet } from "react-router-dom";
import data from "../mock-data.json"
import { useState } from "react";
function Manage() {
    const [books,setBooks]= useState(data);
    return (
        <div className="app-container">
        <table>
        <thead>
        
         <tr>
         
        
         
       </tr>
            
         
         
        </thead>
        <tbody>
        {books.map((book)=>
         <tr>
         <td><h1>{book.Name}<NavLink to={':'+book.id}><button>Manage</button></NavLink></h1></td>
        
       </tr>)}
            
        </tbody>
        </table>
        <div id='outlet'>
        <Outlet></Outlet>
        </div>
      </div>
        
    );
  }
  
  export default Manage;
import React from "react";
import '../css/style.css'
const HeadingRow = ({book,handleDeleteClick})=>{
    return(
       
        <tr>
       <td id='h'>{book.id}</td>
       <td id='h'>{book.Name}</td>
       <td id='h'>{book.description}</td>
       <td id='h'>{book.genre}</td>
       
       </tr>
     
    
    );
    
};
export default HeadingRow;
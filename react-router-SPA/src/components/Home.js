import React, { useState } from "react";
import data from "../mock-data.json"
import HeadingRow from "./HeadingROw";
import '../css/style.css'
const Home = () =>{
  const [books,setBooks]= useState(data);
  return(
    <div className="app-container">
        <h2 id="lib">List of books in the Library</h2>
      <table id='p'>
      <thead >
      
       <tr >
       <td id='th' ><h3>Id</h3></td>
       <td id='th'><h3>Name</h3></td>
       <td id='th'><h3>Description</h3></td>
       <td id='th'><h3>genre</h3></td>
     </tr>
          
       
       
      </thead>
      <tbody>
          
      {books.map((book)=>
      
      <HeadingRow book={book}/>
      
       )}

          
      </tbody>
      </table>

    </div>
  );
}
export default Home;

import { useState } from "react";
import data from "../mock-data.json"
import { nanoid } from "nanoid";
import HeadingRow from "./HeadingROw";
 function AddBook(){
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
      id: "",
      Name: "",
      description: "",
      genre: "",
    });
  
    const [editFormData, setEditFormData] = useState({
      id: "",
      Name: "",
      description: "",
      genre: "",
    });
  
    const [editContactId, setEditContactId] = useState(null);
  
    const handleAddFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;
  
      setAddFormData(newFormData);
    };
  
    const handleEditFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;
  
      setEditFormData(newFormData);
    };
  
    const handleAddFormSubmit = (event) => {
      event.preventDefault();
  
      const newContact = {
        id: nanoid(),
        id: addFormData.id,
        Name: addFormData.Name,
        description: addFormData.description,
        genre: addFormData.genre,
      };
  
      const newContacts = [...contacts, newContact];
      setContacts(newContacts);
    };
    

     return(
     <div>
         <table>
      <thead>
      
       <tr>
       <td id='th' ><h3>Id</h3></td>
       <td id='th'><h3>Name</h3></td>
       <td id='th'><h3>Description</h3></td>
       <td id='th'><h3>genre</h3></td>
     </tr>
          
       
       
      </thead>
      <tbody>
      {contacts.map((book)=>
       <HeadingRow book={book}/>)}
          
      </tbody>
      </table>

     <div id="add">
     <h2>Add a Book!!</h2>
     <form onSubmit={handleAddFormSubmit}>
     <input type='text' name="id" required='required' placeholder="enter id of book" onChange={handleAddFormChange}/>
     <input type='text' name="Name" required='required' placeholder="enter title of book" onChange={handleAddFormChange}/>
     <input type='text' name="description" required='required' placeholder="enter description of book" onChange={handleAddFormChange}/>
     <input type='text' name="genre" required='required' placeholder="enter genre of book" onChange={handleAddFormChange}/>
      <button type="submit">submit</button>
      </form></div>
     </div>
     );
 }
 export default AddBook;
import { useParams } from "react-router-dom";
import { useState } from "react";
import HeadingRow from "./HeadingROw";
import data from "../mock-data.json"
import React from "react";
import ReactDOM from 'react-dom/client';
import { Fragment } from "react";
function UserDetails() {
    const params = useParams();
   const [contacts, setContacts] = useState(data);
  
   const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

    return (
     <div>
      <h1>This is the current Book id : {params.userId}</h1>

      
      <form >
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>description</th>
              <th>genre</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
            <tr>
       <td>{contact.id}</td>
       <td>{contact.Name}</td>
       <td>{contact.description}</td>
       <td>{contact.genre}</td>
       <td>
      
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
       </tr>
     
              </Fragment>
            ))}
          </tbody>
        </table>
        </form>
        </div>







      
    );
  }
  
  export default UserDetails;
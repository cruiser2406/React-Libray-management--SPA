import React from 'react';
import ReactDOM from 'react-dom/client';
import { Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
//import Addbook from './components/Addbook';
import Manage from './components/Manage';
import UserDetails from './components/DeleteBook';
import AddBook from './components/AddBook';
// const About = React.lazy(() => import("./components/About"));
// const Service = React.lazy(() => import("./components/Service"));
// const Contact = React.lazy(() => import("./components/Contact"));
function App() {
  return (
    
    <div >
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/Addbook' element={<AddBook/>}>Add</Route>
        <Route path='/Manage' element={<Manage/>}>
        <Route path=":userId" element={<UserDetails/>}></Route>

        </Route>

      </Routes>
      
     
    </div>
  );
}

export default App;

import { NavLink } from "react-router-dom";

function NavBar(){
    return(
    <nav>
        <NavLink to='/'style={{marginLeft:'12px'}}>Home</NavLink>
        <NavLink to='/Addbook'style={{marginLeft:'12px'}}>add</NavLink>
        <NavLink to='/Manage'style={{marginLeft:'12px'}}>Manage</NavLink>

       
    </nav>
    );
}
export default NavBar;
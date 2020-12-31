import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
          <h1>
           <Link to='/'>
           <i className="fas fa-code"></i> KnockDoc 
           </Link>
          </h1>
          <ul>
           <li><Link to='/patient'>User</Link></li>
           <li><Link to='/doctor'>Doctor</Link></li>
          </ul>
        </nav>

    )
}

export default Navbar;
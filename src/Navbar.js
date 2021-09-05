import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div>
            <ul className="lists-items">
                <Link to="/login"><li className="login">Login</li></Link>
                <Link to="/register"><li className="login">Register</li></Link>
                <Link to="/discover/popular"><li>Popular</li></Link>
                <Link to="/discover/latest"><li>Latest</li></Link>
                <Link to="/discover/favourites"><li>Favourites</li></Link>
            </ul>
        </div>
    )
};

export default Navbar;
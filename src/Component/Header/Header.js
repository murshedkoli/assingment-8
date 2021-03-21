import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

  
    return (
        <div className="main-header">
         <div className="colorLayer"><Link to="/"><h2 className="heading">League Info</h2></Link>
         
        
         </div>
         
        </div>
    );
};

export default Header;
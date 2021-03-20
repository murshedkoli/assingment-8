import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="main-header">
         <Link to="/"><div className="colorLayer"><h2 className="heading">League Info</h2></div></Link>
        </div>
    );
};

export default Header;
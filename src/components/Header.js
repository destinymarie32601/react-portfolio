import React from 'react';
import Navigation from './Navigation';


const Header = ({onNavigationClick}) => {
    return(
        <header>
            <h1>Destiny Dardon</h1>
            <Navigation onNavigationClick={onNavigationClick}/>
        </header>
    );
};

export default Header;

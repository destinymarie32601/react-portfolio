import React from 'react';

const Navigation = ({ onNavigationClick, selectedSection}) => {
    const navigationItems = [
        {id: 'about', title: 'About Me'},
        {id: 'portfolio', title: 'Portfolio'},
        {id: 'contact', title: 'Contact'},
        {id: 'resume', title: 'Resume'},
    ];
    return(
        <nav>
            <ul>
                {navigationItems.map((item) => (
                    <li key = {item.id}>
                        <a
                        href={`#${item.id}`}
                        className={selectedSection === item.id ? 'active' : ''}
                        onClick={() => onNavigationClick(item.id)}
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
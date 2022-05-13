import React from 'react';

const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <a href="/" className='item'>Home</a>
            <a href="/dropdown" className='item'>Dropdown</a>
            <a href="/translate" className='item'>Translation</a>
            <a href="/list" className='item'>Search</a>
            <a href="/youtube" className='item'>Youtube</a>
        </div>
    );
}

export default Header;

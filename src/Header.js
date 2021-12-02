import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div classname='header'>
            <div className='header__left'></div>
                 <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
                    alt=""
                />
            <div className="header__input">
                <SearchIcon />
                <input type='text' />
            </div>
            <div className='header__middle'></div>

            <div className='header__right'></div>
        </div>
    )
}

export default Header

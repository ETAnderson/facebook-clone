import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

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
            <div className='header__middle'>
                <div className="header__option">
                    <HomeIcon fontSize="large" />
                </div>
            </div>

            <div className='header__right'></div>
        </div>
    )
}

export default Header

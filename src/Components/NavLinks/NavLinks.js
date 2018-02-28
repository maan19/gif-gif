import React from 'react';
import {NavLink} from 'react-router-dom';
import {nav,link,container,active} from './NavLinks.css'

const NavLinks = (props) => {
    return (
        <div className={container}>
            <ul className={nav}>
                    <li><NavLink activeClassName='active'   className = {link} to = '/search'  >Search</NavLink></li>
                    <li><NavLink activeClassName='active'   className = {link} to = "/trending" >Trending</NavLink></li>
                    <li>{props.uid && <NavLink activeClassName ='active'  className = {link} to = "/savedgifs" >Favourites</NavLink> }</li>
            </ul>
        </div>
    );
};

export default NavLinks;
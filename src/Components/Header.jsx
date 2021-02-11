import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../img/logo.png'
export default function Header(params) {
    return(
        <div className="header">
            <div className="container">
                <div className="header__content">
                    <Link to="/" className="header__content-logo"><img src={Logo} alt=""/> Pokemon API</Link>
                    <ul className="header__content-menu">
                        <li className="header__content-item">
                        <Link to="/" className="header__content-link"><span>Home</span></Link>
                        </li>
                        <li className="header__content-item">
                            <span className="space">
                                Type
                            </span>
                            <ul className="subMenu">
                                <li><Link to="/fire" className="link">Fire</Link></li>
                                <li><Link  to="/water" className="link">Water</Link></li>
                                <li><Link   to="/poison" className="link">Poison</Link></li>
                                <li><Link  to="/flying"  className="link">Flying</Link></li>
                                <li><Link  to="/normal" className="link">Normal</Link></li>
                                <li><Link  to="/rock" className="link">Rock</Link></li>
                                <li><Link  to="/bug" className="link">Bug</Link></li>
                                <li><Link  to="/ghost" className="link">Ghost</Link></li>
                                <li><Link   to="/steel"className="link">Steel</Link></li>
                                <li><Link   to="/grass" className="link">Grass</Link></li>
                                <li><Link   to="/electric" className="link">Electric</Link></li>
                                <li><Link    to="/psychic" className="link">Psychic</Link></li>
                                <li><Link   to="/ice" className="link">Ice</Link></li>
                                <li><Link   to="/dragon" className="link">Dragon</Link></li>
                                <li><Link   to="/dark" className="link">Dark</Link></li>
                                <li><Link    to="/fairy"className="link">Fairy</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
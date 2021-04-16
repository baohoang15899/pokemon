import React, {  } from 'react'
import { Link} from 'react-router-dom'
import Logo from '../img/logo.png'
export default function Header() {
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
                                <li><Link  to="/type/fire" className="link">Fire</Link></li>
                                <li><Link to="/type/water" className="link">Water</Link></li>
                                <li><Link  to="/type/poison" className="link">Poison</Link></li>
                                <li><Link  to="/type/flying"  className="link">Flying</Link></li>
                                <li><Link  to="/type/normal" className="link">Normal</Link></li>
                                <li><Link  to="/type/rock" className="link">Rock</Link></li>
                                <li><Link  to="/type/bug" className="link">Bug</Link></li>
                                <li><Link  to="/type/ghost" className="link">Ghost</Link></li>
                                <li><Link   to="/type/steel"className="link">Steel</Link></li>
                                <li><Link   to="/type/grass" className="link">Grass</Link></li>
                                <li><Link   to="/type/electric" className="link">Electric</Link></li>
                                <li><Link    to="/type/psychic" className="link">Psychic</Link></li>
                                <li><Link   to="/type/ice" className="link">Ice</Link></li>
                                <li><Link   to="/type/dragon" className="link">Dragon</Link></li>
                                <li><Link   to="/type/dark" className="link">Dark</Link></li>
                                <li><Link    to="/type/fairy"className="link">Fairy</Link></li>
                            </ul>
                        </li>
                        <li className="header__content-item">
                            <span className="space">
                                Habitat
                            </span>
                            <ul className="subMenu">
                                <li><Link  to="/habitat/cave" className="link">Cave</Link></li>
                                <li><Link to="/habitat/forest" className="link">Forest</Link></li>
                                <li><Link  to="/habitat/grassland" className="link">Grassland</Link></li>
                                <li><Link  to="/habitat/mountain"  className="link">Mountain</Link></li>
                                <li><Link  to="/habitat/rare" className="link">Rare</Link></li>
                                <li><Link  to="/habitat/rough-terrain" className="link">Rough Terrain</Link></li>
                                <li><Link to="/habitat/sea" className="link">Sea</Link></li>
                                <li><Link to="/habitat/urban" className="link">Urban</Link></li>
                                <li><Link   to="/habitat/waters-edge"className="link">Waters-edge</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
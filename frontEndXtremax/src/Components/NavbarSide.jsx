import React from 'react'
import About from '../Assets/About.png'
import Browse from '../Assets/Browse.png'
import Attraction from '../Assets/Attraction.png'
import Videos from '../Assets/Videos.png'
import Blog from '../Assets/Blog.png'
import { Link, NavLink} from "react-router-dom";


const NavbarSide = (() => {
    
    return (
        <div className="navbar-side">
            <NavLink  to="/browse" style={{ textDecoration: 'none' }}>
                <button autoFocus className="icon-bar">
                    <img src={Browse} alt="Browse" className="icon" />
                    <p className="text-button">Browse</p>
                </button>
            </NavLink>
            <Link exact to="/suggest-attraction" style={{ textDecoration: 'none' }}>
                <button className="icon-bar">
                    <img src={Attraction} alt="Attraction" className="icon" />
                    <p className="text-button">Suggest Attraction</p>
                </button>
            </Link>
            <Link to="/videos" style={{ textDecoration: 'none' }}>
                <button className="icon-bar">
                    <img src={Videos} alt="Videos" className="icon" />
                    <p className="text-button">Videos</p>
                </button>
            </Link>
            <Link to="/blog" style={{ textDecoration: 'none' }}>
                <button className="icon-bar">
                    <img src={Blog} alt="Blog" className="icon"/>
\
                    <p className="text-button">Blog</p>
                </button>
            </Link>
            <Link to='/about' style={{ textDecoration: 'none' }}>
                <button className="icon-bar">
                    <img src={About} alt="About" className="icon" />
                    <p className="text-button">About</p>
                </button>
            </Link>
        </div>
    )
})
export default NavbarSide
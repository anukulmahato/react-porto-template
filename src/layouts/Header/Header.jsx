import { FaFacebookF, FaLinkedinIn, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";


const Header = () => {
  return (
    <>
               <header className="header" id="header">
           <div className="container">
                <div className="header_item">
                    <div className="logo">
                        <Link to="/"><img src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/themes/porto/images/logo/logo_black.png" alt="" /></Link>
                    </div>
                    <div className="header_menu">
                        <div className="top_header text-right">
                            <div className="top_menu_list">
                                <a href="#"> {">"}About Us</a>
                                <a href="#"> {">"} Contact Us</a> 
                            </div>
                            <a className="phoneCall" href="tel:123-456-789"> < FaPhone /> (123) 456-789</a>
                            <a className="searchIcon" href="#"><IoIosSearch /></a>
                        </div>
                        <div className="nav_menu">
                            <ul className="nav_menu_list">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/about">About Us</NavLink></li>
                                <li><NavLink to="/team">Team</NavLink></li>
                                <li><NavLink to="/blog">Blog</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                            </ul>
                            <div className="social_icon">
                                <a href="#"><FaFacebookF /></a>
                                <a href="#"><FaXTwitter /></a>
                                <a href="#"><FaLinkedinIn /></a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div> 
        </header>
    </>
  )
}

export default Header
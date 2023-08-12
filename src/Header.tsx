import React, {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import logo from './vite.svg';

const Header: React.FC = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.currentTarget.value);
    };

    const handleSearchKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter") {
            navigate(`/products?searchTerm=${searchTerm}`)
        }
    };

    return (
        <header className="header">
            <div className="search-container">
                <input type="search" placeholder="search" value={searchTerm} onChange={handleSearchTermChange}
                       onKeyDown={handleSearchKeyDown}/>
            </div>
            <img src={logo} className="header-logo" alt="logo"/>
            <h1 className="header-title">React Shop</h1>
            <nav>
                <NavLink to="/products" className={({ isActive }) => {
                    return isActive ? 'header-link-active' : 'header-link'
                }}>Products</NavLink>
                <NavLink to="/admin" className={({ isActive }) => {
                    return isActive ? 'header-link-active' : 'header-link'
                }}>Admin</NavLink>
            </nav>
        </header>
    );
}

export default Header;


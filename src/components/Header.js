import React from "react";
import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <div className="container">
            <div className="sideBar">
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="logo">
                <h1>⚽️</h1>
            </div>
            <div className="search">
                <FontAwesomeIcon icon={faSearch} />
            </div>
        </div>
        
    );
}

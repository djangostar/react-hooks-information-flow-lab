import React from "react"

/* Deliverables
    refractor the <header> element out of App.js
    
    clicking the <button> inside the Header component should toggle
    dark mode on or off

    pass callback function as prop called onDarkModeClick to Header.js
*/

function Header({ isDarkMode, onDarkModeClick }) {

    return (
        <header>
            <h2>Shopster</h2>
            <button isDarkMode={ isDarkMode } onClick={ onDarkModeClick }>
            {!isDarkMode ? "Dark" : "Light"} Mode
            </button>
      </header>
    )
}

export default Header
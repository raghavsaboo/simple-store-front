import React from "react";

const Header = (props) => {
    return (
        <header className="top">
            <h1>Lucky Apples!</h1>
            <h3 className="tageline">
                <span>{props.tagline}</span>
            </h3>
        </header>
    );
}

export default Header;
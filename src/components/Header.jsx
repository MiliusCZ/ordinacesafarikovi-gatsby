import React from "react";
import Link from "gatsby-link";

import "./Header.scss";

export const Header = ({ title, navigation }) => (
    <React.Fragment>
        <header className="siteHeader">
            <div className="siteHeaderImage">
                <Link to="/"><img src="/img/logo_black.png" alt="Logo" /></Link>
            </div>
            <div className="siteTitle">
                <Link to="/">{title}</Link>
            </div>
            <nav>
                {navigation.map((item) => <Link key={item.key} to={item.path}>{item.title}</Link>)}
            </nav>
        </header>
        <div className="topImage">
            <img src="/img/uvodnivsichni_mod.jpg" alt="Team" />
        </div>
    </React.Fragment>
);

import React from "react";
import Link from "gatsby-link";

import "./Header.scss";

export const Header = ({ title, navigation }) => (
    <React.Fragment>
        <header>
            <div className="siteHeaderImage">
                <Link to="/"><img src="img/logo_black.png" /></Link>
            </div>
            <div className="siteHeader">
                <Link to="/">{title}</Link>
            </div>
            <nav>
                {navigation.map((item) => navigationTitles[item.node.jsonName] ? <Link to={item.node.path}>{navigationTitles[item.node.jsonName]}</Link> : null)}
            </nav>
        </header>
        <div className="topImage">
            <img src="img/uvodnivsichni_mod.jpg" />
        </div>
    </React.Fragment>
);

const navigationTitles = {
    'cenik.json': 'Ceník',
    'tym.json': 'Tým',
    'o-nas.json': 'O nás',
    'galerie.json': 'Galerie',
    'sluzby.json': 'Poskytované výkony',
    'kontakty.json': 'Kontakty'
}

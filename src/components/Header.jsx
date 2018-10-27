import React from "react";
import Link from "gatsby-link";

import "./Header.scss";

export const Header = ({ title, navigation }) => (
    <React.Fragment>
        <header>
            <div className="siteHeaderImage">
                <Link to="/"><img src="/img/logo_black.png" alt="Logo" /></Link>
            </div>
            <div className="siteHeader">
                <Link to="/">{title}</Link>
            </div>
            <nav>
                {navigation.map((item) => navigationTitles[item.node.path] && <Link key={item.node.path} to={item.node.path}>{navigationTitles[item.node.path]}</Link>)}
            </nav>
        </header>
        <div className="topImage">
            <img src="/img/uvodnivsichni_mod.jpg" alt="Team" />
        </div>
    </React.Fragment>
);

const navigationTitles = {
//  '/cenik/': 'Ceník',
    '/tym/': 'Tým',
    '/o-nas/': 'O nás',
    '/galerie/': 'Galerie',
    '/sluzby/': 'Poskytované výkony',
    '/kontakty/': 'Kontakty'
}

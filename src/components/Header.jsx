import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";

import "./Header.scss";

export const Header = ({ image, title, navigation }) => (
    <React.Fragment>
        <header className="siteHeader">
            <div className="siteHeaderImage">
                <Link to="/"><img src="/img/logo_black.png" alt="Logo" /></Link>
            </div>
            <div className="siteTitle">
                <Link to="/">{title}</Link>
            </div>
            <nav>
                {navigation.map((item) => <Link key={item.key} activeClassName="active" to={item.path}>{item.title}</Link>)}
            </nav>
        </header>
        <div className="topImage">
            <Img fluid={image} />
        </div>
    </React.Fragment>
);

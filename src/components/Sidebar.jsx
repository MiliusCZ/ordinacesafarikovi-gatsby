import React from "react";
import Link from "gatsby-link";

import "./Sidebar.scss";

export const Sidebar = ({ data }) => (
    <div className="sidebar">
        <h2>Ordinační hodiny</h2>
        <div>
            opening-hours
        </div>

        <h2>Kontakty</h2>
        <h3>Telefon</h3>
        <div>
            {data.phone}
        </div>

        <h3>E-mail</h3>
        <div>
            <a href={`mailto:${data.email}`}>{data.email}</a>
        </div>

        <h3><Link to="/kontakty/">kontakty</Link></h3>
    </div>
);

import React from "react";
import Link from "gatsby-link";

import "./Sidebar.scss";

export const Sidebar = ({ data, fullSideBar, noSideBar }) => {
    if (noSideBar) {
        return null;
    }
    return (
        <div className="sidebar">
            <div className="block">
                <h2>Ordinační hodiny</h2>
                <div className="openingHours">
                    <div>
                        Pondělí<br />
                        Úterý<br />
                        Středa<br />
                        Čtvrtek<br />
                        Pátek
                </div>
                    <div>
                        {data.openingHours}
                    </div>
                </div>
            </div>

            <div className="block">
                <h2>Telefon</h2>
                <div>
                    <a href={`tel:${data.phone.replace(/\s/g, '')}`}>{data.phone}</a>
                </div>
            </div>

            <div className="block">
                <h2>E-mail</h2>
                <div>
                    <a href={`mailto:${data.email}`}>{data.email}</a>
                </div>
            </div>

            {fullSideBar && <div className="block"><h2>Adresa</h2>
                <div>
                    {data.address.name}<br />
                    {data.address.street}<br />
                    {data.address.city}, {data.address.zip}
                </div>
            </div>}

            {fullSideBar && <div className="block"><h2>Web</h2>
                <div>
                    <a href={data.web}>{data.web}</a>
                </div>
            </div>}

            {fullSideBar && <div><h2>Facebook</h2>
                <div>
                    <a href={data.facebook} target="_blank" rel="noopener noreferrer">{data.facebook}</a>
                </div>
            </div>}

            {!fullSideBar && <div className="allContacts"><Link to="/kontakty/">zobrazit všechny kontakty</Link></div>}
        </div>
    )
};

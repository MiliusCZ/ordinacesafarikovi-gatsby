import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import addHttps from '../utils/addHttps';

import './Sidebar.scss';

export const Sidebar = ({ data, fullSideBar, noSideBar }) => {
  if (noSideBar) {
    return null;
  }

  const phones = data.phone.replace(/\s/g, '').split(',');

  return (
    <div className="sidebar">
      <div className="block">
        <h2>Ordinační hodiny</h2>
        <div className="openingHours">
          <div>
            Pondělí
            <br />
            Úterý
            <br />
            Středa
            <br />
            Čtvrtek
            <br />
            Pátek
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: data.openingHours.replace(/\n/g, '<br />\n'),
            }}
          ></div>
        </div>
      </div>

      <div className="block">
        <h2>Telefon</h2>
        <div>
          {phones.map((phone) => (
            <span key={phone}>
              <a key={phone} href={`tel:${phone}`}>
                {phone}
              </a>
              <br />
            </span>
          ))}
        </div>
      </div>

      <div className="block">
        <h2>E-mail</h2>
        <div>
          <a href={`mailto:${data.email}`}>{data.email}</a>
        </div>
      </div>

      {fullSideBar && (
        <div className="block">
          <h2>Adresa</h2>
          <div>
            {data.address.name}
            <br />
            {data.address.street}
            <br />
            {data.address.city}, {data.address.zip}
          </div>
        </div>
      )}

      {fullSideBar && (
        <div className="block">
          <h2>Web</h2>
          <div>
            <a href={addHttps(data.web)}>{data.web}</a>
          </div>
        </div>
      )}

      {fullSideBar && (
        <div>
          <h2>Facebook</h2>
          <div>
            <a
              href={addHttps(data.facebook)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.facebook}
            </a>
          </div>
        </div>
      )}

      {!fullSideBar && (
        <div className="allContacts">
          <Link to="/kontakty/">zobrazit všechny kontakty</Link>
        </div>
      )}
    </div>
  );
};

Sidebar.displayName = 'Sidebar';

Sidebar.propTypes = {
  data: PropTypes.object,
  fullSideBar: PropTypes.bool,
  noSideBar: PropTypes.bool,
};

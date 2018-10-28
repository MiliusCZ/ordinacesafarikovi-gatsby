import "netlify-cms/dist/cms.css";
import React from "react";

import CMS from 'netlify-cms';

const TeamMebmerPreview = ({ widgetsFor }) => (
  <div>
      {widgetsFor('teamMembers').map(member => { console.log(member); return (
        <div><h3>{member.getIn('fields', 'name')}</h3></div>
      )})}
  </div>  
);

CMS.registerPreviewTemplate('team', TeamMebmerPreview);
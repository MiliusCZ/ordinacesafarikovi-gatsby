import "netlify-cms/dist/cms.css";
import React from "react";

import { TeamMember } from "../components/TeamMember";

import CMS from 'netlify-cms';

const TeamMebmerPreview = ({ widgetsFor }) => (
  <div>
      {widgetsFor('teamMembers').map(member => {(
        const memberData = {
          name: member.getIn(['data', 'name']),
          photo: member.getIn(['data', 'photo']),
          specialization: member.getIn(['data', 'specialization'])
        };
        return (<TeamMember data={memberData} key={memberData.name}/>)
      )})}
  </div>  
);

CMS.registerPreviewTemplate('team', TeamMebmerPreview);
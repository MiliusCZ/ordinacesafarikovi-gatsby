import React from 'react';
import PropTypes from 'prop-types';

import { TeamMember } from '../components/TeamMember';

import CMS from 'netlify-cms-app';

const TeamMemberPreview = ({ widgetsFor }) => (
  <div>
    {widgetsFor('teamMembers').map((member) => {
      console.log(member);
      const memberData = {
        name: member.getIn(['data', 'name']),
        photo: member.getIn(['data', 'photo']),
        specialization: member.getIn(['data', 'specialization']),
      };
      return <TeamMember data={memberData} key={memberData.name} />;
    })}
  </div>
);

CMS.registerPreviewTemplate('team', TeamMemberPreview);

TeamMemberPreview.propTypes = {
  widgetsFor: PropTypes.function,
};

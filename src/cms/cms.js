import "netlify-cms/dist/cms.css";

import CMS from 'netlify-cms';

const TeamMebmerPreview = ({ entry, widgetFor }) => (
  <div>
      {entry.getIn(['title'])}
      <hr />
      {widgetFor('body')}
  </div>  
);

CMS.registerPreviewTemplate('team', TeamMemberPreview);
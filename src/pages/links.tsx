import React from 'react';
import { SocialAccountListContainer } from '../containers/social-account-list-container';
import { Single } from '../layouts/single';

const Links: React.SFC = () => (
  <Single>
    <h2>Links</h2>
    <SocialAccountListContainer />
  </Single>
);

export default Links;

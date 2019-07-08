import React from 'react';
import { SocialAccountListContainer } from '../containers/social-account-list-container';
import { SingleLayout } from '../layouts/single-layout';

const Links: React.SFC = () => (
  <SingleLayout>
    <h2>Links</h2>
    <SocialAccountListContainer />
  </SingleLayout>
);

export default Links;

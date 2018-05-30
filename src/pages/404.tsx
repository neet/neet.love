import * as React from 'react';
import Content from '../components/content';
import Page from '../components/page';

const NotFoundPage: React.SFC = () => (
  <Content>
    <Page title='お探しのページは虚無'>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Page>
  </Content>
);

export default NotFoundPage;

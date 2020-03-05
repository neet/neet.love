import React from 'react';
import styled from 'styled-components';

import { BioContainer } from '../containers/bio-container';
import { FactListContainer } from '../containers/fact-list-container';
import { RepositoryListContainer } from '../containers/repository-list-container';
import { SocialAccountListContainer } from '../containers/social-account-list-container';
import { SingleLayout } from '../layouts/single-layout';

const Border = styled.hr`
  margin: 24px auto;
  border: none;
  border-top: 1px solid var(--border-default-color);
`;

const Section = styled.section`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const Index: React.SFC = () => (
  <SingleLayout>
    <BioContainer />
    <Border />

    <Section>
      <h3>Random Facts</h3>
      <FactListContainer />
    </Section>

    <Section>
      <h3>Projects</h3>
      <RepositoryListContainer />
    </Section>

    <Section>
      <h3>Social Accounts</h3>
      <SocialAccountListContainer limit={6} />
    </Section>
  </SingleLayout>
);

export default Index;

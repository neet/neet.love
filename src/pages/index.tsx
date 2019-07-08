import React from 'react';
import styled from 'styled-components';
import { Bio } from '../components/bio';
import { FactListContainer } from '../containers/fact-list-container';
import { SocialAccountListContainer } from '../containers/social-account-list-container';
import { Single } from '../layouts/single';
import { RepositoryListContainer } from '../containers/repository-list-container';

const Border = styled.hr`
  margin: 28px auto;
  border: none;
  border-top: 1px solid var(--border-default-color);
`;

const Section = styled.section`
  margin-bottom: 28px;
`;

const Index: React.SFC = () => (
  <Single>
    <Bio />
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
      <h3>Contact</h3>
      <SocialAccountListContainer limit={6} />
    </Section>
  </Single>
);

export default Index;

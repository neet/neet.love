import React from 'react';
import styled from 'styled-components';
import { Bio } from '../components/bio';
import { Projects } from '../components/projects';
import { FactListContainer } from '../containers/fact-list-container';
import { SocialAccountListContainer } from '../containers/social-account-list-container';
import { Single } from '../layouts/single';

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
      <Projects />
    </Section>

    <Section>
      <h3>Contact</h3>
      <SocialAccountListContainer limit={6} />
    </Section>
  </Single>
);

export default Index;

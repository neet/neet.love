import React from 'react';
import styled from 'styled-components';
import { Bio } from '../components/bio';
import { Projects } from '../components/projects';
import { RandomInformation } from '../components/random-information';
import { SocialAccounts } from '../components/social-accounts';
import { Single } from '../layouts/single';
import { theme } from '../styles/variables';

const Border = styled.hr`
  margin: 28px auto;
  border: none;
  border-bottom: 1px solid ${theme.bg.wash};
`;

const Section = styled.section`
  margin-bottom: 28px;
`;

const Index: React.SFC = () => (
  <Single>
    <Bio />
    <Border />

    <Section>
      <h3>Random Bits</h3>
      <RandomInformation />
    </Section>

    <Section>
      <h3>Projects</h3>
      <Projects />
    </Section>

    <Section>
      <h3>Contact</h3>
      <SocialAccounts take={6} onlySuggested />
    </Section>
  </Single>
);

export default Index;

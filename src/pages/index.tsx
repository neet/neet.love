import React from 'react';
import styled from 'styled-components';
import { Bio } from '../components/bio';
import { RandomInformation } from '../components/random-information';
import { Projects } from '../components/projects';
import { Single } from '../layouts';
import { theme } from '../styles/variables';

const Border = styled.hr`
  margin: 28px auto;
  border: none;
  border-bottom: 1px solid ${theme.bg.wash};
`

const Index: React.SFC = () => (
  <Single>
    <Bio />
    <Border />
    <RandomInformation />
    <Projects />
  </Single>
);

export default Index;

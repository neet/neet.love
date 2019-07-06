import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/variables';

const Wrapper = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin-top: 18px;
  padding: 12px;
  border-top: 1px solid ${theme.border.default};
  background-color: ${theme.bg.wash};
  color: ${theme.fg.light};
`;

export const Footer = () => {
  return (
    <Wrapper>
      <p>
        Copyright © 2019 Ryo Igarashi, Released under the MIT license
      </p>
    </Wrapper>
  )
}

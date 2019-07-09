import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  padding: 12px 24px;
  border-top: 1px solid var(--border-default-color);
  background-color: var(--bg-wash-color);
  color: var(--fg-light-color);
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

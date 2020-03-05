import GatsbyImage from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { Fact } from '../../types';

const Image = styled(GatsbyImage)`
  width: 33px;
  height: auto;
  margin-right: 10px;
`;

const Name = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 500;
`;

const Value = styled.span`
  display: block;
  color: var(--fg-wash-color);
  font-size: 14px;
`;

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  color: var(--fg-default-color);

  &:hover {
    text-decoration: none;

    ${Value} {
      text-decoration: underline;
    }
  }
`;

export interface FactCardProps {
  fact: Fact;
}

export const FactCard = (props: FactCardProps) => {
  const { fact } = props;

  return (
    <Wrapper href={fact.url || '#'} target="_blank">
      <Image fixed={fact.image.childImageSharp.fixed} />

      <div>
        <Name>{fact.name}</Name>
        <Value>{fact.label}</Value>
      </div>
    </Wrapper>
  );
};

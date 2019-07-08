import GatsbyImage from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { Fact } from '../utils/entities';

const FieldList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const Field = styled.li`
  display: flex;
  flex: 0 0 50%;
  align-items: center;
  margin-bottom: 16px;

  @media screen and (min-width: 580px) {
    flex-basis: calc(100% / 3);
  }
`;

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

export interface FactListProps {
  facts: Fact[];
}

export const FactList = (props: FactListProps) => {
  return (
    <FieldList>
      {props.facts.map(fact => (
        <Field>
          <Image fixed={fact.image.childImageSharp.fixed} />

          <div>
            <Name>{fact.name}</Name>
            <Value>{fact.value}</Value>
          </div>
        </Field>
      ))}
    </FieldList>
  );
};

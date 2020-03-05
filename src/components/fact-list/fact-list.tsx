import React from 'react';
import styled from 'styled-components';
import { Fact } from '../../types';
import { FactCard } from './fact-card';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const ListItem = styled.li`
  flex: 0 0 50%;
  margin-bottom: 16px;

  @media screen and (min-width: 580px) {
    flex-basis: calc(100% / 3);
  }
`;

export interface FactListProps {
  facts: Fact[];
}

export const FactList = (props: FactListProps) => {
  return (
    <List>
      {props.facts.map(fact => (
        <ListItem>
          <FactCard fact={fact} />
        </ListItem>
      ))}
    </List>
  );
};

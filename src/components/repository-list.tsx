import React from 'react';
import styled from 'styled-components';
import { GithubRepository } from '../utils/entities';
import { RepositoryCard } from './repository-card';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 8px -4px -12px;

  @media screen and (min-width: 580px) {
    margin: 8px -8px -16px;
  }
`;

const ListItem = styled.li`
  box-sizing: border-box;
  flex: 0 0 50%;
  padding: 0 4px 12px;

  @media screen and (min-width: 580px) {
    padding: 0 8px 16px;
  }
`;

interface RepositoryListProps {
  repositories: GithubRepository[];
}

export const RepositoryList = (props: RepositoryListProps) => {
  return (
    <List>
      {props.repositories.map(repository => (
        <ListItem key={repository.id}>
          <RepositoryCard repository={repository} />
        </ListItem>
      ))}
    </List>
  );
};

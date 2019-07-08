import React from 'react';
import styled from 'styled-components';
import { Article } from '../utils/entities';
import { ArticleCard } from './article-card';

const List = styled.ul`
  margin: 18px 0;
`;

const ListItem = styled.li`
  a {
    display: flex;
    margin-bottom: 18px;
    padding: 18px;
    border-radius: 4px;
    box-shadow: 0 3px 16px var(--shadow-bg-color);
    color: var(--fg-default-color);

    &:hover {
      text-decoration: none;
    }
  }
`;

export interface ArticleListProps {
  articles: Article[];
}

export const ArticleList = (props: ArticleListProps) => {
  return (
    <List>
      {props.articles.map(article => (
        <ListItem key={article.id}>
          <ArticleCard article={article} />
        </ListItem>
      ))}
    </List>
  );
};

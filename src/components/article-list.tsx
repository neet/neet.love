import React from 'react';
import styled from 'styled-components';
import { Article } from '../utils/entities';
import { ArticleCard } from './article-card';

const List = styled.ul`
  margin: 8px 0;
`;

const ListItem = styled.li`
  margin-bottom: 16px;
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

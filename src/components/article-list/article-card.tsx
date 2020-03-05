import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { Article } from '../../types';

const Wrapper = styled(Link)`
  display: flex;
  border-radius: 4px;
  box-shadow: 0 3px 16px var(--shadow-bg-color);
  color: var(--fg-default-color);

  &:hover {
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
    border: 1px solid var(--border-default-color);
    box-shadow: none;
  }
`;

const Thumbnail = styled(GatsbyImage)`
  flex: 1 0 116px;
  margin-right: 8px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 8px;

  @media screen and (min-width: 580px) {
    padding: 12px;
  }
`;

const Title = styled.h3`
  display: block;
  margin-bottom: 6px;
  overflow: hidden;
  color: var(--fg-default-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Excerpt = styled.p`
  display: block;
  flex-grow: 1;
  margin-bottom: 12px;
  overflow: hidden;
  color: var(--fg-wash-color);
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Time = styled.time`
  color: var(--fg-wash-color);
`;

export interface ArticleCardProps {
  article: Article;
}

export const ArticleCard = (props: ArticleCardProps) => {
  const { article } = props;

  return (
    <Wrapper to={article.fields.slug}>
      {article.frontmatter.thumbnail && <Thumbnail fluid={article.frontmatter.thumbnail.childImageSharp.fluid} />}

      <Meta>
        <Title>{article.frontmatter.title}</Title>
        <Excerpt>{article.excerpt}</Excerpt>
        <Time dateTime={article.frontmatter.date}>{new Date(article.frontmatter.date).toLocaleDateString()}</Time>
      </Meta>
    </Wrapper>
  );
};

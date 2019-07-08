import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { Article } from '../utils/entities';

const Thumbnail = styled(GatsbyImage)`
  flex-shrink: 0;
  width: 100px !important;
  height: 100px !important;
  margin-right: 18px;
  border-radius: 4px;

  @media screen and (min-width: 580px) {
    width: 116px !important;
    height: 116px !important;
  }
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin-bottom: 6px;
  color: var(--fg-default-color);
  font-weight: bold;
  line-height: 1.5;
`;

const Excerpt = styled.p`
  flex-grow: 1;
  margin-bottom: 12px;
  color: var(--fg-wash-color);
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
    <Link to={article.fields.slug}>
      {article.frontmatter.thumbnail && <Thumbnail fixed={article.frontmatter.thumbnail.childImageSharp.fixed} />}

      <Meta>
        <Title>{article.frontmatter.title}</Title>
        <Excerpt>{article.excerpt}</Excerpt>
        <Time dateTime={article.frontmatter.date}>{new Date(article.frontmatter.date).toLocaleDateString()}</Time>
      </Meta>
    </Link>
  );
};

import GatsbyImage from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import { Article as ArticleEntity, Bio } from '../../types';
import { Footer } from './footer';
import { Header } from './header';

const Wrapper = styled.article``;

const Title = styled.h1`
  margin-bottom: 24px;
  font-weight: bold;
  line-height: 1.5;
`;

const Thumbnail = styled(GatsbyImage)`
  margin-bottom: 24px;
`;

const Content = styled.div`
  font-size: 16px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    line-height: 2;
  }

  p,
  pre,
  ul,
  ol,
  table {
    margin-bottom: 24px;
  }

  p {
    line-height: 1.6;
  }

  ul {
    margin-left: 24px;
    list-style: inside;
  }

  ol {
    margin-left: 24px;
    list-style: inside decimal;
  }

  hr {
    margin: 24px auto;
    border: none;
    border-top: 1px solid var(--border-default-color);
  }

  table {
    max-width: 100%;
    overflow-x: scroll;

    th {
      font-weight: bold;
    }

    th,
    td {
      padding: 0.4em 0.8em;
      border: 1px solid var(--border-default-color);
    }

    tr:nth-child(even) > td {
      background-color: var(--bg-wash-color);
    }
  }

  .footnotes {
    p {
      display: inline;
    }
  }
`;

export interface ArticleProps {
  article: ArticleEntity;
  bio: Bio;
}

export const Article = (props: ArticleProps) => {
  const { article, bio } = props;

  return (
    <Wrapper>
      <Title>{article.frontmatter.title}</Title>
      <Thumbnail
        fluid={article?.frontmatter?.thumbnail?.childImageSharp.fluid}
      />
      <Header article={article} bio={bio} />
      <Content dangerouslySetInnerHTML={{ __html: article.html }} />
      <Footer article={article} />
    </Wrapper>
  );
};

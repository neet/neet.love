import GatsbyImage from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { oc } from 'ts-optchain';
import { Article as ArticleEntity, SiteMetadata } from '../../utils/entities';
import { Header } from './header';
import { Footer } from './footer';

const Wrapper = styled.article``;

const Title = styled.h1`
  margin-bottom: 24px;
  font-weight: bold;
  line-height: 1.6;
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
`;

export interface ArticleProps {
  article: ArticleEntity;
  author: SiteMetadata['author'];
}

export const Article = (props: ArticleProps) => {
  const { article, author } = props;

  return (
    <Wrapper>
      <Title>{article.frontmatter.title}</Title>
      <Thumbnail fluid={oc(article.frontmatter.thumbnail).childImageSharp.fluid()} />
      <Header article={article} author={author} />
      <Content dangerouslySetInnerHTML={{ __html: article.html }} />
      <Footer article={article} />
    </Wrapper>
  );
};

import React from 'react';
import GatsbyImage from 'gatsby-image';
import styled from 'styled-components';
import { Article as ArticleEntity } from '../utils/entities';
import { oc } from 'ts-optchain';

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
}

export const Article = (props: ArticleProps) => {
  const { article } = props;

  return (
    <Wrapper>
      <Title>{article.frontmatter.title}</Title>
      <Thumbnail fluid={oc(article.frontmatter.thumbnail).childImageSharp.fluid()} />
      <Content dangerouslySetInnerHTML={{ __html: article.html }} />
    </Wrapper>
  )
}

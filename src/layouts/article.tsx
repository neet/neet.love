import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Banner } from '../components/banner';
import { Footer } from '../components/footer';
import { GlobalStyle } from '../styles/global-style';

const Wrapper = styled.div``;

const Content = styled.main`
  width: 700px;
  margin: auto;
  padding: 24px 0;
`;

interface ArticleQueryData {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
}

export const Article: React.SFC = ({ children }) => {
  const data = useStaticQuery<ArticleQueryData>(graphql`
    query ArticleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Helmet title={data.site.siteMetadata.title} meta={[{ name: 'description', content: data.site.siteMetadata.description }]} />
      <Banner />
      <Content>{children}</Content>
      <Footer />
      <GlobalStyle />
    </Wrapper>
  );
};

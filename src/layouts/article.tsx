import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Footer } from '../components/footer';
import { BannerContainer } from '../containers/banner-container';
import { GlobalStyle } from '../styles/global-style';
import { SiteMetadata } from '../utils/entities';

const Wrapper = styled.div``;

const Content = styled.main`
  box-sizing: border-box;
  margin: auto;
  padding: 0 24px;

  @media screen and (min-width: 700px) {
    width: 700px;
  }
`;

interface ArticleQueryData {
  siteMetadataYaml: SiteMetadata;
}

export const Article: React.SFC = ({ children }) => {
  const data = useStaticQuery<ArticleQueryData>(graphql`
    query ArticleQuery {
      siteMetadataYaml {
        title
        description
      }
    }
  `);

  return (
    <Wrapper>
      <Helmet title={data.siteMetadataYaml.title} meta={[{ name: 'description', content: data.siteMetadataYaml.description }]} />
      <BannerContainer />
      <Content>{children}</Content>
      <Footer />
      <GlobalStyle />
    </Wrapper>
  );
};

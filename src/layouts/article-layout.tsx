import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Footer } from '../components/footer';
import { BannerContainer } from '../containers/banner-container';
import { GlobalStyle } from '../styles/global-style';
import { SiteMetadata } from '../utils/entities';
import { FontawesomeSSR } from '../components/fontawesome-ssr';

const Wrapper = styled.div``;

const Content = styled.main`
  box-sizing: border-box;
  margin: auto;
  padding: 0 24px;

  @media screen and (min-width: 700px) {
    width: 700px;
  }
`;

interface ArticleLayoutQueryData {
  siteMetadataYaml: SiteMetadata;
}

export const ArticleLayout: React.SFC = ({ children }) => {
  const data = useStaticQuery<ArticleLayoutQueryData>(graphql`
    query ArticleQuery {
      siteMetadataYaml {
        title
        description
      }
    }
  `);

  return (
    <>
      <Helmet title={data.siteMetadataYaml.title} meta={[{ name: 'description', content: data.siteMetadataYaml.description }]} />
      <GlobalStyle />
      <FontawesomeSSR />
      <Wrapper>
        <BannerContainer />
        <Content>{children}</Content>
        <Footer />
      </Wrapper>
    </>
  );
};

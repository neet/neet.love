import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { BannerContainer } from '../containers/banner-container';
import { Footer } from '../components/footer';
import { GlobalStyle } from '../styles/global-style';
import { SiteMetadata } from '../utils/entities';

const Wrapper = styled.main``;

const Content = styled.div`
  box-sizing: border-box;
  margin: auto;
  padding: 0 24px;

  @media screen and (min-width: 700px) {
    width: 580px;
  }
`;

interface SingleLayoutQueryProps {
  siteMetadataYaml: SiteMetadata;
}

export const SingleLayout: React.SFC = ({ children }) => {
  const data = useStaticQuery<SingleLayoutQueryProps>(graphql`
    query SingleLayoutQuery {
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
      <Wrapper>
        <BannerContainer />
        <Content>{children}</Content>
        <Footer />
      </Wrapper>
    </>
  );
};

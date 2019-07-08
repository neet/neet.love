import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { BannerContainer } from '../containers/banner-container';
import { Footer } from '../components/footer';
import { GlobalStyle } from '../styles/global-style';

const Wrapper = styled.main``;

const Content = styled.div`
  box-sizing: border-box;
  margin: auto;
  padding: 0 24px;

  @media screen and (min-width: 700px) {
    width: 580px;
  }
`;

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
}

export const Single: React.SFC = ({ children }) => {
  const data = useStaticQuery<StaticQueryProps>(graphql`
    query IndexLayoutQuery {
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
      <BannerContainer />
      <Content>{children}</Content>
      <Footer />
      <GlobalStyle />
    </Wrapper>
  );
};

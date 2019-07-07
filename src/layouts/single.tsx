import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Banner } from '../components/banner';
import { Footer } from '../components/footer';
import { GlobalStyle } from '../styles/global-style';

const Wrapper = styled.main``;

const Content = styled.div`
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
      <Banner />
      <Content>{children}</Content>
      <Footer />
      <GlobalStyle />
    </Wrapper>
  );
};

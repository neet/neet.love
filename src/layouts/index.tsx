import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Banner } from '../components/banner';
import { GlobalStyle } from '../styles/global-style';

const Wrapper = styled.main``;

const Content = styled.article`
  width: 560px;
  margin: auto;
`;

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      keywords: string;
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
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: data.site.siteMetadata.keywords },
        ]}
      />
      <Banner />
      <Content>{children}</Content>
      <GlobalStyle />
    </Wrapper>
  );
};

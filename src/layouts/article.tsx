// import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
// import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Banner } from '../components/banner';
import { GlobalStyle } from '../styles/global-style';

const Wrapper = styled.main``;

const Content = styled.div`
  width: 700px;
  margin: auto;
  padding: 24px 0;
`;

// <Helmet
//   title={data.site.siteMetadata.title}
//   meta={[
//     { name: 'description', content: data.site.siteMetadata.description },
//     { name: 'keywords', content: data.site.siteMetadata.keywords },
//   ]}
// />

export const Article: React.SFC = ({ children }) => {
  return (
    <Wrapper>
      <Banner />
      <Content>{children}</Content>
      <GlobalStyle />
    </Wrapper>
  );
};

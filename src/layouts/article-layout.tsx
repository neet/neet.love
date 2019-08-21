import React from 'react';
import styled from 'styled-components';
import { FontawesomeSSR } from '../components/fontawesome-ssr';
import { Footer } from '../components/footer';
import { BannerContainer } from '../containers/banner-container';
import { OpenGraphContainer } from '../containers/open-graph-container';
import { GlobalStyle } from '../styles/global-style';

const Wrapper = styled.div``;

const Content = styled.main`
  box-sizing: border-box;
  margin: auto;
  padding: 0 24px;

  @media screen and (min-width: 700px) {
    width: 700px;
  }
`;

export const ArticleLayout: React.SFC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <FontawesomeSSR />
      <OpenGraphContainer />
      <Wrapper>
        <BannerContainer />
        <Content>{children}</Content>
        <Footer />
      </Wrapper>
    </>
  );
};

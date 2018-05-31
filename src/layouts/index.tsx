import '@fortawesome/fontawesome';
import '@fortawesome/fontawesome-free-brands';
import '@fortawesome/fontawesome-free-regular';
import '@fortawesome/fontawesome-free-solid';
import * as React from 'react';
import Helmet from 'react-helmet';
import Content from '../components/content';
import '../styles/main.scss';

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
      },
    },
  };
  children: () => React.ReactNode;
}

const Layout: React.SFC<Props> = ({ data, children }) => (
  <Content>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'theme-color',    content: '#2c2c3a' },
        { name: 'og:type',        content: 'profile' },
        { name: 'og:url',         content: 'https://neet.love' },
        { name: 'og:title',       content: data.site.siteMetadata.title },
        { name: 'og:site_name',   content: data.site.siteMetadata.title },
        { name: 'og:description', content: 'The world\s kawaiiest portfolio'},
        { name: 'og:image',       content: 'https://i.imgur.com/nPCaPrU.jpg' },
        { name: 'twitter:card',   content: 'summary' },
      ]}
    />
    {children()}
  </Content>
);

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

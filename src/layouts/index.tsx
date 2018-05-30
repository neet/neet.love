import '@fortawesome/fontawesome';
import '@fortawesome/fontawesome-free-brands';
import '@fortawesome/fontawesome-free-regular';
import '@fortawesome/fontawesome-free-solid';
import * as React from 'react';
import Helmet from 'react-helmet';
import Content from '../components/content';
import Letterhead from '../components/letterhead';
import '../styles/main.scss';

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
      }
    }
  };
  children: () => React.ReactNode;
}

const Layout: React.SFC<Props> = ({ data, children }) => (
  <Content>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Letterhead />

    { children() }
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

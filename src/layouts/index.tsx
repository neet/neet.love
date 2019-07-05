import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      keywords: string;
    };
  };
}

const IndexLayout: React.SFC = ({ children }) => {
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
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: data.site.siteMetadata.keywords },
        ]}
      />
      <main>{children}</main>
    </div>
  );
};

export default IndexLayout;

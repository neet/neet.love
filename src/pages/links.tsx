import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { OpenGraphContainer } from '../containers/open-graph-container';
import { SocialAccountListContainer } from '../containers/social-account-list-container';
import { SingleLayout } from '../layouts/single-layout';
import { SiteMetadata } from '../types';

interface LinksQueryData {
  site: {
    siteMetadata: SiteMetadata;
  };
}

const Links: React.SFC = () => {
  const data = useStaticQuery<LinksQueryData>(graphql`
    query LinksQuery {
      site {
        siteMetadata {
          title
          siteUrl
          description
        }
      }
    }
  `);

  return (
    <>
      <SingleLayout>
        <h2>Links</h2>
        <SocialAccountListContainer />
      </SingleLayout>
      <OpenGraphContainer title={`Links - ${data.site.siteMetadata.title}`} />
    </>
  );
};

export default Links;

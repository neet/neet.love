import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { Banner } from '../components/banner';
import { BannerField, SiteMetadata } from '../types';

interface BannerContainerQueryData {
  site: {
    siteMetadata: SiteMetadata;
  };
  allBannerYaml: {
    edges: {
      node: BannerField;
    }[];
  };
}

export const BannerContainer = () => {
  const data = useStaticQuery<BannerContainerQueryData>(graphql`
    query BannerContainerQuery {
      site {
        siteMetadata {
          title
        }
      }
      allBannerYaml {
        edges {
          node {
            url
            name
            external
          }
        }
      }
    }
  `);

  return (
    <Banner
      siteTitle={data.site.siteMetadata.title}
      fields={data.allBannerYaml.edges.map((edge) => edge.node)}
    />
  );
};

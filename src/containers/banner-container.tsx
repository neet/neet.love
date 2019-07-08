import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Banner } from '../components/banner';
import { BannerField } from '../utils/entities';

interface BannerContainerQueryData {
  site: {
    siteMetadata: {
      title: string;
    };
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
            value
            name
            external
          }
        }
      }
    }
  `);

  return <Banner siteTitle={data.site.siteMetadata.title} fields={data.allBannerYaml.edges.map(edge => edge.node)} />;
};

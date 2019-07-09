import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Banner } from '../components/banner';
import { BannerField, SiteMetadata } from '../utils/entities';

interface BannerContainerQueryData {
  siteMetadataYaml: SiteMetadata;
  allBannerYaml: {
    edges: {
      node: BannerField;
    }[];
  };
}

export const BannerContainer = () => {
  const data = useStaticQuery<BannerContainerQueryData>(graphql`
    query BannerContainerQuery {
      siteMetadataYaml {
        title
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

  return <Banner siteTitle={data.siteMetadataYaml.title} fields={data.allBannerYaml.edges.map(edge => edge.node)} />;
};

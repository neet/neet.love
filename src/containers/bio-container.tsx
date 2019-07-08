import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Bio } from '../components/bio';
import { SiteMetadata } from '../utils/entities';

interface BioContainerQueryData {
  siteMetadataYaml: SiteMetadata;
}

export const BioContainer = () => {
  const data = useStaticQuery<BioContainerQueryData>(graphql`
    query BioContainerQuery {
      siteMetadataYaml {
        author {
          name
          note
          quote
          avatar {
            childImageSharp {
              fixed(width: 120, height: 120) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);

  return <Bio author={data.siteMetadataYaml.author} />;
};

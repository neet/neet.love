import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { OpenGraph, OpenGraphProps } from '../components/open-graph';
import { Bio, SiteMetadata } from '../utils/entities';

export interface OpenGraphContainerQueryData {
  bioYaml: Bio;
  site: {
    siteMetadata: SiteMetadata;
  };
}

export const OpenGraphContainer = (props: Omit<OpenGraphProps, 'defaults'>) => {
  const data = useStaticQuery<OpenGraphContainerQueryData>(graphql`
    query OpenGraphContainerQuery {
      bioYaml {
        id
        note
        name
        avatar {
          childImageSharp {
            fixed(width: 120, height: 120) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      site {
        siteMetadata {
          siteUrl
          description
          title
        }
      }
    }
  `);

  return (
    <OpenGraph
      {...props}
      defaults={{
        title: data.site.siteMetadata.title,
        author: data.bioYaml.name,
        description: data.site.siteMetadata.description,
        thumbnail: data.site.siteMetadata.siteUrl + data.bioYaml.avatar.childImageSharp.fixed.src,
      }}
    />
  );
};

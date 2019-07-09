import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Seo } from '../components/seo';
import { Bio, SiteMetadata } from '../utils/entities';

interface SeoContainerProps {
  title?: string;
  description?: string;
}

interface SeoContainerQueryData {
  site: {
    siteMetadata: SiteMetadata;
  };
  bioYaml: Bio;
}

export const SeoContainer = (props: SeoContainerProps) => {
  const data = useStaticQuery<SeoContainerQueryData>(graphql`
    query SeoContainerQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
      bioYaml {
        name
        email
        avatar {
          childImageSharp {
            fixed(width: 120, height: 120) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        note
        quote
      }
    }
  `);

  return <Seo title={props.title} description={props.description} bio={data.bioYaml} site={data.site} />;
};

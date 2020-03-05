import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { Bio } from '../components/bio';
import { Bio as BioEntity } from '../types';

interface BioContainerQueryData {
  bioYaml: BioEntity;
}

export const BioContainer = () => {
  const data = useStaticQuery<BioContainerQueryData>(graphql`
    query BioContainerQuery {
      bioYaml {
        name
        note
        avatar {
          childImageSharp {
            fixed(width: 120, height: 120) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `);

  return <Bio author={data.bioYaml} />;
};

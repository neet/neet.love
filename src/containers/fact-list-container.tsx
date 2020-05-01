import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { FactList } from '../components/fact-list';
import { Fact } from '../types';

export interface FactListContainerQueryData {
  allFactsYaml: {
    edges: {
      node: Fact;
    }[];
  };
}

export const FactListContainer = () => {
  const data = useStaticQuery<FactListContainerQueryData>(graphql`
    query FactListContainerQuery {
      allFactsYaml {
        edges {
          node {
            name
            label
            url
            image {
              childImageSharp {
                fixed(width: 33, height: 33) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `);

  return <FactList facts={data.allFactsYaml.edges.map((edge) => edge.node)} />;
};

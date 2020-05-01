import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { QualificationList } from '../components/qualification-list';
import { Qualification } from '../types';

interface QualificationQueryData {
  allQualificationsYaml: {
    edges: {
      node: Qualification;
    }[];
  };
}

export const QualificationListContainer = () => {
  const data = useStaticQuery<QualificationQueryData>(graphql`
    query QualificationQuery {
      allQualificationsYaml {
        edges {
          node {
            name
            url
            createdAt
          }
        }
      }
    }
  `);

  return (
    <QualificationList
      qualifications={data.allQualificationsYaml.edges.map((edge) => edge.node)}
    />
  );
};

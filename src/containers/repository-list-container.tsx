import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { RepositoryList } from '../components/repository-list';
import { GithubRepository } from '../utils/entities';

interface RepositoryListContainerQueryData {
  github: {
    user: {
      pinnedItems: {
        nodes: GithubRepository[];
      };
    };
  };
}

export const RepositoryListContainer = () => {
  const data = useStaticQuery<RepositoryListContainerQueryData>(graphql`
    query RepositoryListContainerQuery {
      github {
        user(login: "neet") {
          pinnedItems(first: 6) {
            nodes {
              ... on GitHub_Repository {
                id
                name
                url
                primaryLanguage {
                  color
                  name
                }
                forkCount
                stargazers {
                  totalCount
                }
                description
              }
            }
          }
        }
      }
    }
  `);

  return <RepositoryList repositories={data.github.user.pinnedItems.nodes} />;
};

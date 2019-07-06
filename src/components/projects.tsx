import { faBook, faCodeBranch, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/variables';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 8px -8px;
`;

const ListItem = styled.li`
  box-sizing: border-box;
  flex: 1 0 50%;
  margin-bottom: 16px;
  padding: 0 8px;
`;

const Repository = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  height: 100%;
  padding: 12px 16px;
  border-radius: 4px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 16%);
`;

const RepositoryName = styled.a`
  flex: 0 0;
  margin-bottom: 4px;
  color: ${theme.hl.default};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`;

const RepositoryDescription = styled.p`
  flex: 1 1;
  margin-bottom: 12px;
  color: ${theme.fg.light};
  font-size: 12px;
`;

const Footer = styled.footer`
  display: flex;
  flex: 0 0;
  align-items: center;
  margin-bottom: 0;
`;

const FooterItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
  color: ${theme.fg.light};
  font-size: 12px;
`;

const PrimaryLanguageColor = styled.div`
  width: 12px;
  height: 12px;
  margin-right: 4px;
  border-radius: 50%;
`;

const PrimaryLanguageName = styled.span`
  margin-right: 12px;
  color: ${theme.fg.light};
  font-size: 12px;
`;

interface ProjectsQueryData {
  repositorySvg: { publicURL: string };
  starSvg: { publicURL: string };
  forkSvg: { publicURL: string };
  github: {
    user: {
      pinnedItems: {
        nodes: {
          id: string;
          name: string;
          forkCount: number;
          url: string;
          stargazers: {
            totalCount: number;
          };
          primaryLanguage: {
            color: string;
            name: string;
          };
          description: string;
        }[];
      };
    };
  };
}

export const Projects = () => {
  const data = useStaticQuery<ProjectsQueryData>(graphql`
    query ProjectsQuery {
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

  return (
    <section>
      <h3>Projects</h3>

      <List>
        {data.github.user.pinnedItems.nodes.map(repository => (
          <ListItem key={repository.id}>
            <Repository>
              <RepositoryName href={repository.url} target='__blank'>
                <Icon icon={faBook} style={{ fontSize: '12px', marginRight: '8px', color: theme.fg.light }} />
                {repository.name}
              </RepositoryName>

              <RepositoryDescription>{repository.description}</RepositoryDescription>

              <Footer>
                <FooterItem>
                  <PrimaryLanguageColor style={{ backgroundColor: repository.primaryLanguage.color }} />
                  <PrimaryLanguageName>{repository.primaryLanguage.name}</PrimaryLanguageName>
                </FooterItem>

                <FooterItem>
                  <Icon icon={faStar} style={{ fontSize: '10px', marginRight: '2px' }} />
                  {repository.stargazers.totalCount}
                </FooterItem>

                <FooterItem>
                  <Icon icon={faCodeBranch} style={{ fontSize: '10px', marginRight: '2px' }} />
                  {repository.forkCount}
                </FooterItem>
              </Footer>
            </Repository>
          </ListItem>
        ))}
      </List>
    </section>
  );
};

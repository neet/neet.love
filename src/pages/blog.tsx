import { graphql, Link, useStaticQuery } from 'gatsby';
import GatsbyImage, { FixedObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { Single } from '../layouts/single';

const List = styled.ul`
  margin: 18px 0;
`;

const ListItem = styled.li`
  a {
    display: flex;
    margin-bottom: 18px;
    padding: 18px;
    border-radius: 4px;
    box-shadow: 0 3px 16px var(--shadow-bg-color);
    color: var(--fg-default-color);

    &:hover {
      text-decoration: none;
    }
  }
`;

const Thumbnail = styled(GatsbyImage)`
  flex-shrink: 0;
  width: 100px !important;
  height: 100px !important;
  margin-right: 18px;
  border-radius: 4px;

  @media screen and (min-width: 700px) {
    width: 116px !important;
    height: 116px !important;
  }
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin-bottom: 6px;
  color: var(--fg-default-color);
  font-weight: bold;
  line-height: 1.5;
`;

const Excerpt = styled.p`
  flex-grow: 1;
  margin-bottom: 12px;
  color: var(--fg-wash-color);
`;

const Time = styled.time`
  color: var(--fg-wash-color);
`;

interface BlogQueryData {
  allMarkdownRemark: {
    edges: {
      node: {
        id: string;
        excerpt: string;
        fields: {
          slug: string;
        };
        frontmatter: {
          title: string;
          date: string;
          thumbnail: {
            childImageSharp: {
              fixed: FixedObject;
            };
          };
        };
      };
    }[];
    totalCount: number;
  };
}

const Blog: React.SFC = () => {
  const data = useStaticQuery<BlogQueryData>(graphql`
    query BlogQuery {
      allMarkdownRemark {
        edges {
          node {
            excerpt(pruneLength: 80)
            id
            fields {
              slug
            }
            frontmatter {
              date
              title
              thumbnail {
                childImageSharp {
                  fixed(width: 116, height: 116) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
        totalCount
      }
    }
  `);

  return (
    <Single>
      <h2>Blog</h2>

      <section>
        <List>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <ListItem key={node.id}>
              <Link to={node.fields.slug}>
                {node.frontmatter.thumbnail && <Thumbnail fixed={node.frontmatter.thumbnail.childImageSharp.fixed} />}

                <Meta>
                  <Title>{node.frontmatter.title}</Title>
                  <Excerpt>{node.excerpt}</Excerpt>
                  <Time dateTime={node.frontmatter.date}>{new Date(node.frontmatter.date).toLocaleDateString()}</Time>
                </Meta>
              </Link>
            </ListItem>
          ))}
        </List>
      </section>
    </Single>
  );
};

export default Blog;

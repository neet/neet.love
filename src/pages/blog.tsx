import { graphql, Link, useStaticQuery } from 'gatsby';
import GatsbyImage, { FixedObject } from 'gatsby-image';
import React from 'react';
import { Single } from '../layouts/single';

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
            excerpt
            id
            fields {
              slug
            }
            frontmatter {
              date
              title
              thumbnail {
                childImageSharp {
                  fixed(width: 120, height: 120) {
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
        {data.allMarkdownRemark.totalCount} articles
        <ul>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <li key={node.id}>
              <GatsbyImage fixed={node.frontmatter.thumbnail.childImageSharp.fixed} />
              <h3>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </h3>
              <p>{node.excerpt}</p>
              <time>{node.frontmatter.date}</time>
            </li>
          ))}
        </ul>
      </section>
    </Single>
  );
};

export default Blog;

import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { ArticleListContainer } from '../containers/article-list-container';
import { OpenGraphContainer } from '../containers/open-graph-container';
import { SingleLayout } from '../layouts/single-layout';
import { SiteMetadata } from '../utils/entities';

interface BlogQueryData {
  site: {
    siteMetadata: SiteMetadata;
  }
}

const Blog = () => {
  const data = useStaticQuery<BlogQueryData>(graphql`
    query BlogQuery {
      site {
        siteMetadata {
          title
          siteUrl
          description
        }
      }
    }
  `);

  return (
    <>
      <SingleLayout>
        <h2>Blog</h2>

        <section>
          <ArticleListContainer />
        </section>
      </SingleLayout>
      <OpenGraphContainer title={`Blog - ${data.site.siteMetadata.title}`} />
    </>
  );
};

export default Blog;

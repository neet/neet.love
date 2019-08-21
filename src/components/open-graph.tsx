import React from 'react';
import Helmet from 'react-helmet';

export interface OpenGraphProps {
  title?: string;
  thumbnail?: string;
  author?: string;
  description?: string;
  defaults: Required<Omit<OpenGraphProps, 'defaults'>>;
}

export const OpenGraph = (props: OpenGraphProps) => {
  const { title, thumbnail, author, description, defaults } = props;

  return (
    <Helmet
      title={title}
      meta={[
        { name: 'og:title', content: defaults.title || title },
        { name: 'og:image', content: defaults.thumbnail || thumbnail },
        { name: 'og:type', content: 'website' },

        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:creator', content: defaults.author || author },
        { name: 'twitter:title', content: defaults.title || title },

        { name: 'description', content: defaults.description || description },
        { name: 'og:description', content: defaults.description || description },
        { name: 'twitter:description', content: defaults.description || description },
      ]}
    />
  );
};

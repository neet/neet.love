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
      title={title || defaults.title}
      meta={[
        { name: 'og:title', content: title || defaults.title },
        { name: 'og:image', content: thumbnail || defaults.thumbnail },
        { name: 'og:type', content: 'website' },

        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:creator', content: author || defaults.author },
        { name: 'twitter:title', content: title || defaults.title },

        { name: 'description', content: description || defaults.description },
        { name: 'og:description', content: description || defaults.description },
        { name: 'twitter:description', content: description || defaults.description },
      ]}
    />
  );
};

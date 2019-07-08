import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import querystring from 'querystring';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Article } from '../../utils/entities';
import { Button } from '../link-button';

const Wrapper = styled.footer``;

const Icon = styled(FontAwesomeIcon)`
  margin-right: .5em;
`

interface FooterProps {
  article: Article;
}

export const Footer = (props: FooterProps) => {
  const { article } = props;

  const handleShare = useCallback(() => {
    if ((navigator as any).share === undefined) {
      const params = querystring.stringify({
        text: `${article.frontmatter.title}\n${article.fields.slug}`,
      });

      location.href = `https://twitter.com/intent/tweet?${params}`;
    }

    (window.navigator as any).share({
      title: article.frontmatter.title,
      url: article.fields.slug,
    });
  }, [article]);

  return (
    <Wrapper>
      <Button onClick={handleShare}>
        <Icon icon={faShare} />
        Share
      </Button>
    </Wrapper>
  );
};

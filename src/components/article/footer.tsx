import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import querystring from 'querystring';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Article } from '../../types';
import { Button } from '../link-button';

const Wrapper = styled.footer`
  margin-bottom: 24px;

  ${Button} {
    width: 100%;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5em;
`;

interface FooterProps {
  article: Article;
}

export const Footer = (props: FooterProps) => {
  const { article } = props;

  const handleShare = useCallback(async () => {
    if ((navigator as any).share === undefined) {
      const canonicalNode = document.querySelector('link[rel="canonical"]');
      if (!canonicalNode) return;

      const canonical = canonicalNode.getAttribute('href');
      const params = querystring.stringify({
        text: `${article.frontmatter.title}\n${canonical}`,
      });

      location.href = `https://twitter.com/intent/tweet?${params}`;
      return;
    }

    await (window.navigator as any).share({
      text: article.frontmatter.title,
      url: article.fields.slug,
    });

    alert('Shared successfully!');
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

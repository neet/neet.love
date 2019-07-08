import GatsbyImage from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { Article, SiteMetadata } from '../../utils/entities';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  padding: 8px;
  border-top: 1px solid var(--border-default-color);
  border-bottom: 1px solid var(--border-default-color);
`;

const Avatar = styled(GatsbyImage)`
  margin-right: 12px;
  border-radius: 50%;
  /* box-shadow: 0 3px 6px var(--shadow-bg-color); */
`;

const Meta = styled.div`
  display: flex;
  flex: 1 0;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: 500;
`;

const Time = styled.time`
  color: var(--fg-wash-color);
`;

interface HeaderProps {
  article: Article;
  author: SiteMetadata['author'];
}

export const Header = (props: HeaderProps) => {
  return (
    <Wrapper>
      <Avatar fixed={props.author.avatar.childImageSharp.fixed} />
      <Meta>
        <Name>{props.author.name}</Name>
        <Time dateTime={props.article.frontmatter.date}>Published at {new Date(props.article.frontmatter.date).toLocaleDateString()}</Time>
      </Meta>
    </Wrapper>
  );
};

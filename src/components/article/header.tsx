import GatsbyImage from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { Article, SiteMetadata } from '../../utils/entities';
import { Link } from 'gatsby';

const Name = styled.span`
  font-weight: 500;
`;

const Wrapper = styled.header`
  margin-bottom: 18px;
  padding: 12px 0px;
  border-top: 1px solid var(--border-default-color);
  border-bottom: 1px solid var(--border-default-color);

  a {
    display: flex;
    align-items: center;
    color: var(--fg-default-color);

    &:hover {
      text-decoration: none;

      ${Name} {
        text-decoration: underline;
      }
    }
  }
`;

const Avatar = styled(GatsbyImage)`
  margin-right: 12px;
  border-radius: 50%;
`;

const Meta = styled.div`
  display: flex;
  flex: 1 0;
  flex-direction: column;
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
      <Link to='/'>
        <Avatar fixed={props.author.avatar.childImageSharp.fixed} />
        <Meta>
          <Name>{props.author.name}</Name>
          <Time dateTime={props.article.frontmatter.date}>Published at {new Date(props.article.frontmatter.date).toLocaleDateString()}</Time>
        </Meta>
      </Link>
    </Wrapper>
  );
};

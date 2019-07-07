import { graphql, useStaticQuery } from 'gatsby';
import GatsbyImage, { GatsbyImageProps } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { LinkButton } from '../components/link-button';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Avatar = styled(GatsbyImage)`
  flex-shrink: 0;
  width: 100px !important;
  height: 100px !important;
  margin-right: 18px;
  border-radius: 50%;
  box-shadow: 0 3px 6px var(--shadow-bg-color);

  @media screen and (min-width: 700px) {
    width: 116px !important;
    height: 116px !important;
    margin-right: 26px;
  }
`;

const Meta = styled.div`
  margin: 0;
`;

const Name = styled.h2`
  font-size: 18px;
  font-weight: 500;

  @media screen and (min-width: 700px) {
    font-size: 26px;
  }
`;

const Description = styled.span`
  color: var(--fg-wash-color);
  font-size: 16px;
  font-weight: 400;

  @media screen and (min-width: 700px) {
    font-size: 18px;
  }
`;

const Actions = styled.div`
  display: flex;
  margin-top: 14px;

  & > *:not(:last-child) {
    margin-right: 16px;
  }
`;

interface NoteProps {
  fixed: GatsbyImageProps['fixed'];
}

const Note = styled.blockquote<NoteProps>`
  position: relative;
  flex: 0 0;
  margin: 24px auto;
  padding-left: 16px;
  color: var(--fg-wash-color);
  font-size: 16px;
  font-style: italic;
  font-weight: 300;
  text-align: center;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 17px;
    height: 17px;
    background-image: url(${props => props.fixed && props.fixed.src});
    background-size: cover;
  }
`;

interface BioQueryData {
  avatar: {
    childImageSharp: GatsbyImageProps;
  };
  quote: {
    childImageSharp: GatsbyImageProps;
  };
}

export const Bio = () => {
  const data = useStaticQuery<BioQueryData>(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/avatar.jpg/" }) {
        childImageSharp {
          fixed(width: 120, height: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      quote: file(absolutePath: { regex: "/quote.png/" }) {
        childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <>
      <Wrapper>
        <Avatar fixed={data.avatar.childImageSharp.fixed} alt="My avatar" />

        <Meta>
          <Name>Ryo Igarashi</Name>
          <Description>High schooler, web engineer, designer</Description>

          <Actions>
            <LinkButton to="/links">Contact</LinkButton>
            <LinkButton to="/" appearance="skeleton">
              Profile
            </LinkButton>
          </Actions>
        </Meta>
      </Wrapper>

      <Note fixed={data.quote.childImageSharp.fixed}>
実は俺がインターネットなのではないかと思ってきた。
      </Note>
    </>
  );
};

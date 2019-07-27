import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GatsbyImage from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { AnchorButton, LinkButton } from '../components/link-button';
import { Bio as BioEntity } from '../utils/entities';

const Wrapper = styled.section`
  display: grid;
  grid-template-areas:
    'avatar  meta'
    'actions actions';
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 24px;

  @media screen and (min-width: 580px) {
    grid-template-areas:
      'avatar meta'
      'avatar actions';
    justify-content: center;
  }
`;

const Avatar = styled(GatsbyImage)`
  grid-area: avatar;
  width: 100px !important;
  height: 100px !important;
  margin-right: 18px;
  border-radius: 50%;
  box-shadow: 0 3px 6px var(--shadow-bg-color);
  justify-self: flex-end;

  @media screen and (min-width: 580px) {
    width: 116px !important;
    height: 116px !important;
    margin-right: 26px;
  }
`;

const Meta = styled.div`
  grid-area: meta;
  margin: 0;
`;

const Name = styled.h2`
  font-size: 18px;
  font-weight: 500;

  @media screen and (min-width: 580px) {
    font-size: 26px;
  }
`;

const Description = styled.span`
  color: var(--fg-wash-color);
  font-size: 16px;
  font-weight: 400;

  @media screen and (min-width: 580px) {
    font-size: 18px;
  }
`;

const Actions = styled.div`
  display: flex;
  grid-area: actions;
  justify-content: center;
  margin-top: 18px;

  ${LinkButton}, ${AnchorButton} {
    flex: 1 1 50%;
  }

  @media screen and (min-width: 580px) {
    justify-content: flex-start;
    margin-top: 14px;

    ${LinkButton}, ${AnchorButton} {
      width: auto;
      max-width: 125px;
    }
  }

  & > *:not(:last-child) {
    margin-right: 12px;

    @media screen and (min-width: 580px) {
      margin-right: 16px;
    }
  }
`;

const Note = styled.blockquote`
  position: relative;
  flex: 0 0;
  margin-bottom: 24px;
  padding-left: 16px;
  color: var(--fg-wash-color);
  font-size: 16px;
  font-style: italic;
  font-weight: 300;
  text-align: center;
`;

const QuoteIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5em;
`;

interface BioProps {
  author?: BioEntity;
}

export const Bio = (props: BioProps) => {
  const { author } = props;

  if (!author) return null;

  return (
    <>
      <Wrapper>
        <Avatar fixed={author.avatar.childImageSharp.fixed} alt="My avatar" />

        <Meta>
          <Name>{author.name}</Name>
          <Description>{author.note}</Description>
        </Meta>

        <Actions>
          <LinkButton to="/links">Contact</LinkButton>
          <AnchorButton href="https://wantedly.com/users/62403069" target="__blank" appearance="skeleton">
            Hire me
          </AnchorButton>
        </Actions>
      </Wrapper>

      <Note>
        <QuoteIcon icon={faQuoteLeft} />
        {author.quote}
      </Note>
    </>
  );
};

import { faBook, faCodeBranch, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { GithubRepository } from '../../types';

const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  height: 100%;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 3px 16px var(--shadow-bg-color);

  @media (prefers-color-scheme: dark) {
    border: 1px solid var(--border-default-color);
    box-shadow: none;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  color: var(--fg-wash-color);
`;

const Name = styled.a`
  flex: 0 0;
  margin-bottom: 4px;
  color: var(--hl-default-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`;

const Description = styled.p`
  flex: 1 1;
  margin-bottom: 12px;
  color: var(--fg-wash-color);
  font-size: 12px;
`;

const Footer = styled.footer`
  display: flex;
  flex-shrink: 0;
  align-items: center;
`;

const FooterItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 18px;
  color: var(--fg-wash-color);
  font-size: 12px;
`;

const PrimaryLanguageColor = styled.div`
  width: 12px;
  height: 12px;
  margin-right: 4px;
  border-radius: 50%;
`;

const PrimaryLanguageName = styled.span`
  color: var(--fg-wash-color);
  font-size: 12px;
`;

export interface RepositoryCardProps {
  repository: GithubRepository;
}

export const RepositoryCard = (props: RepositoryCardProps) => {
  const { repository } = props;

  return (
    <Wrapper>
      <Name href={repository.url} target="_blank">
        <Icon icon={faBook} style={{ fontSize: '12px', marginRight: '8px' }} />
        {repository.name}
      </Name>

      <Description>{repository.description}</Description>

      <Footer>
        <FooterItem>
          <PrimaryLanguageColor style={{ backgroundColor: repository.primaryLanguage.color }} />
          <PrimaryLanguageName>{repository.primaryLanguage.name}</PrimaryLanguageName>
        </FooterItem>

        <FooterItem>
          <Icon icon={faStar} style={{ fontSize: '10px', marginRight: '2px' }} />
          {repository.stargazers.totalCount}
        </FooterItem>

        <FooterItem>
          <Icon icon={faCodeBranch} style={{ fontSize: '10px', marginRight: '2px' }} />
          {repository.forkCount}
        </FooterItem>
      </Footer>
    </Wrapper>
  );
};

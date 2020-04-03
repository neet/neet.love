import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import copyToClipboard from 'copy-to-clipboard';
import React, { useCallback } from 'react';
import styled from 'styled-components';

import { SocialAccount as ISocialAccount } from '../../types';
import { faIconMap } from '../../utils/fa-icon-map';

const Icon = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 33px;
  margin-right: 16px;
  font-size: 33px;
`;

const Meta = styled.div`
  flex: 1 1;
  min-width: 0;
`;

const Name = styled.h4`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
`;

const Suggested = styled.span`
  display: block;
  margin: 0 0.5em;
  color: var(--fg-wash-color);
  font-size: 10px;
`;

const Label = styled.span`
  display: block;
  width: 100%;
  overflow: hidden;
  color: var(--fg-wash-color);
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  color: var(--fg-default-color);

  &:hover {
    text-decoration: none;

    ${Label} {
      text-decoration: underline;
    }
  }
`;

export interface SocialAccountProps {
  socialAccount: ISocialAccount;
}

export const SocialAccount = (props: SocialAccountProps) => {
  const { socialAccount: acct } = props;

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!acct.copyable) return;

      e.preventDefault();
      copyToClipboard(acct.copyable);
      alert(`Copied "${acct.copyable}"!`);
    },
    [acct],
  );

  return (
    <Wrapper
      href={acct.url || '#'}
      target="_blank"
      rel="me"
      onClick={handleClick}
    >
      <Icon>
        <FontAwesomeIcon icon={faIconMap[acct.type]} />
      </Icon>

      <Meta>
        <Name>
          {acct.name}
          {acct.suggested === true ? (
            <Suggested title="Suggested: I may respond quickly">
              <FontAwesomeIcon icon={faCheck} />
            </Suggested>
          ) : null}
        </Name>

        <Label>{acct.label}</Label>
      </Meta>
    </Wrapper>
  );
};

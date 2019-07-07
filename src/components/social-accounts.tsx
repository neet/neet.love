import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import copyToClipboard from 'copy-to-clipboard';
import { Link } from 'gatsby';
import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { socialAccounts } from '../social-accounts';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const ListItem = styled.li`
  flex: 0 1 100%;
  margin-bottom: 18px;

  @media screen and (min-width: 700px) {
    flex: 0 1 50%;
  }

  & > a {
    display: flex;
    align-items: center;
    color: var(--fg-default-color);

    &:hover {
      text-decoration: none;
    }
  }
`;

const Icon = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 34px;
  margin-right: 12px;
  font-size: 34px;
`;

const Meta = styled.div`
  flex: 1 1;
  min-width: 0;
`;

const Name = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
`;

const Suggested = styled.span`
  display: block;
  margin: 0 0.5em;
  color: var(--fg-wash-color);
  font-size: 10px;
`;

const Label = styled.span`
  display: block;
  color: var(--fg-wash-color);

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = styled.footer`
  margin-top: 8px;
  text-align: center;
`;

const ShowMore = styled(Link)`
  /* text-transform: uppercase; */
`;

export interface SocialAccountsProps {
  take?: number;
  onlySuggested?: boolean;
}

export const SocialAccounts = (props: SocialAccountsProps) => {
  const { take, onlySuggested } = props;

  const accts = useMemo(() => socialAccounts.slice(0, take).filter(acct => (onlySuggested ? acct.suggested : true)), [
    socialAccounts,
    take,
    onlySuggested,
  ]);

  const isPartial = useMemo(() => !!(take || onlySuggested), [take, onlySuggested]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const index = Number(e.currentTarget.getAttribute('data-index'));
      const acct = accts[index];

      if (!acct.copyable) return;

      e.preventDefault();
      copyToClipboard(acct.copyable);
      window.alert(`Copied "${acct.copyable}"!`);
    },
    [accts],
  );

  return (
    <>
      <List>
        {accts.map((acct, i) => (
          <ListItem key={`${acct.name}-${i}`}>
            <a href={acct.href || '#'} target="__blank" data-index={i} onClick={handleClick}>
              <Icon>
                <FontAwesomeIcon icon={acct.fa} />
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
            </a>
          </ListItem>
        ))}
      </List>

      {isPartial ? (
        <Footer>
          <ShowMore to="/links">Show more...</ShowMore>
        </Footer>
      ) : null}
    </>
  );
};

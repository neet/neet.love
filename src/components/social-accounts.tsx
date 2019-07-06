import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { socialAccounts } from '../social-accounts';
import { theme } from '../styles/variables';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  flex: 0 1 50%;
  margin: 8px auto;

  & > a {
    display: flex;
    align-items: center;
    color: ${theme.fg.default};

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
  margin-right: 10px;
  padding: 8px;
  font-size: 21px;
`;

const Meta = styled.div`
  flex: 1 1;
  min-width: 0;
`;

const Name = styled.span`
  display: block;
  color: ${theme.fg.default};
  font-size: 12px;
  font-weight: 500;
`;

const Suggested = styled.span`
  margin: 0 0.8em;
  color: ${theme.fg.light};
  font-size: 10px;
  font-weight: 400;
`;

const Label = styled.span`
  display: block;
  color: ${theme.hl.default};
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

  return (
    <>
      <List>
        {accts.map((acct, i) => (
          <ListItem key={`${acct.name}-${i}`}>
            <a href={acct.href} target="__blank">
              <Icon>
                <FontAwesomeIcon icon={acct.fa} />
              </Icon>

              <Meta>
                <Name>
                  {acct.name}
                  {acct.suggested === true ? <Suggested title="Suggested: I may respond quickly">Suggested</Suggested> : null}
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

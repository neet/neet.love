import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { SocialAccount } from './social-account';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const ListItem = styled.li`
  box-sizing: border-box;
  flex: 0 1 100%;
  min-width: 0;
  margin-bottom: 8px;
  padding: 8px;

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

const Footer = styled.footer`
  margin-top: 8px;
  text-align: center;
`;

const ShowMore = styled(Link)`
  /* text-transform: uppercase; */
`;

export interface SocialAccountsProps {
  isPartial?: boolean;
  socialAccounts?: SocialAccount[];
}

export const SocialAccountList = (props: SocialAccountsProps) => {
  const { isPartial, socialAccounts } = props;

  if (!socialAccounts) return null;

  return (
    <>
      <List>
        {socialAccounts.map((acct, i) => (
          <ListItem key={`${acct.name}-${i}`}>
            <SocialAccount socialAccount={acct} />
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

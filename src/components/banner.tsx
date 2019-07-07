import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  padding: 12px;

  @media screen and (min-width: 700px) {
    margin-bottom: 24px;
  }
`;

const Hgroup = styled.div`
  flex: 1 0;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;

  & > a {
    margin: auto 18px;
    color: var(--fg-default-color);

    &:hover {
      text-decoration: none;
    }
  }
`;

const Nav = styled.nav`
  flex: 1 0;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ListItem = styled.li`
  margin: auto 18px;

  & > a {
    color: var(--fg-default-color);
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;

    &:hover {
      text-decoration: none;
    }

    &.active {
      color: var(--hl-default-color);
    }
  }
`;

export const Banner = () => {
  return (
    <Wrapper>
      <Hgroup>
        <Title>
          <Link to="/">neet.love</Link>
        </Title>
      </Hgroup>

      <Nav>
        <List>
          <ListItem>
            <a href="https://keybase.io/neet/pgp_keys.asc" target="__blank">
              PGP
            </a>
          </ListItem>

          <ListItem>
            <Link to="/blog" activeClassName="active">
              Blog
            </Link>
          </ListItem>

          <ListItem>
            <Link to="/links" activeClassName="active">
              Links
            </Link>
          </ListItem>
        </List>
      </Nav>
    </Wrapper>
  );
};

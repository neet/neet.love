import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/variables';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 24px;
`;

const Hgroup = styled.div`
  flex: 1 0;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
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

  a {
    color: ${theme.fg.default};
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
  }
`;

export const Banner = () => {
  return (
    <Wrapper>
      <Hgroup>
        <Title>neet.love</Title>
      </Hgroup>

      <Nav>
        <List>
          <ListItem>
            <Link to="/pgp-key">PGP Key</Link>
          </ListItem>

          <ListItem>
            <Link to="/articles">Blog</Link>
          </ListItem>

          <ListItem>
            <Link to="/links">Links</Link>
          </ListItem>
        </List>
      </Nav>
    </Wrapper>
  );
};

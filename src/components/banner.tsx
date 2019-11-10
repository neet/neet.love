import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { BannerField } from '../utils/entities';

const Wrapper = styled.header`
  display: flex;
  position: sticky;
  z-index: 999;
  top: 0;
  left: 0;
  box-sizing: border-box;
  align-items: center;
  margin-bottom: 8px;
  padding: 12px 24px;
  background: var(--banner-bg-color);

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
  &:not(:last-child) {
    margin-right: 28px;

    @media screen and (min-width: 700px) {
      margin-right: 36px;
    }
  }

  a {
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

export interface BannerProps {
  siteTitle: string;
  fields: BannerField[];
}

export const Banner = (props: BannerProps) => {
  return (
    <Wrapper role="banner">
      <Hgroup>
        <Title>
          <Link to="/">{props.siteTitle}</Link>
        </Title>
      </Hgroup>

      <Nav>
        <List>
          {props.fields.map((field, i) => (
            <ListItem key={`${field.name}-${i}`}>
              {field.external ? (
                <a href={field.url} target="_blank">
                  {field.name}
                </a>
              ) : (
                <Link to={field.url} activeClassName="active" partiallyActive>
                  {field.name}
                </Link>
              )}
            </ListItem>
          ))}
        </List>
      </Nav>
    </Wrapper>
  );
};

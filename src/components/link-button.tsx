import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

export interface ButtonProps {
  appearance?: 'skeleton';
}

const button = (props: ButtonProps) => css`
  display: block;
  box-sizing: border-box;
  padding: 8px 21px;
  border: 1px solid var(--hl-default-color);
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 580px) {
    padding: 8px 36px;
  }

  &:hover {
    text-decoration: none;
  }

  ${props.appearance === 'skeleton'
    ? css`
        color: var(--hl-default-color);
      `
    : css`
        color: var(--fg-reverse-color);
        background-color: var(--hl-default-color);
        box-shadow: 0 3px 6px var(--shadow-hl-color);
      `};
`;

export const LinkButton = styled(Link)<ButtonProps>`
  ${button}
`;

export const Button = styled.button<ButtonProps>`
  ${button}
`;

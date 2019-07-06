import { Link } from 'gatsby';
import { transparentize } from 'polished';
import styled, { css } from 'styled-components';
import { theme, breakpoints } from '../styles/variables';

export interface LinkButtonProps {
  appearance?: 'skeleton';
}

export const LinkButton = styled(Link)<LinkButtonProps>`
  display: block;
  box-sizing: border-box;
  padding: 8px 28px;
  border: 1px solid ${theme.hl.default};
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 8px 36px;
  }

  &:hover {
    text-decoration: none;
  }

  ${({ appearance }) => (appearance === 'skeleton' ? css`
    color: ${theme.hl.default};
  ` : css`
    color: ${theme.fg.reverse};
    background-color: ${theme.hl.default};
    box-shadow: 0 3px 6px ${transparentize(0.84, theme.hl.default)};
  `)};
`;

import React from 'react';
import styled from 'styled-components';

import { Qualification } from '../../types';

const Title = styled.h4`
  display: block;
  font-size: 14px;
`;

const Time = styled.time`
  display: block;
  color: var(--fg-wash-color);
  font-size: 14px;
`;

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  color: var(--fg-default-color);

  &:hover {
    text-decoration: none;

    ${Title} {
      text-decoration: underline;
    }
  }
`;

interface QualificationListItemProps {
  qualification: Qualification;
}

export const QualificationListItem = (props: QualificationListItemProps) => {
  const { qualification } = props;
  const { name, createdAt, url } = qualification;

  return (
    <Wrapper href={url} target="_blank">
      <Title>{name}</Title>

      <Time dateTime={new Date(createdAt).toDateString()}>
        {new Date(createdAt).toLocaleDateString()}
      </Time>
    </Wrapper>
  );
};

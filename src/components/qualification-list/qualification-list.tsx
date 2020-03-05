import React from 'react';
import styled from 'styled-components';

import { Qualification } from '../../types';
import { QualificationListItem } from './qualification-list-item';

const List = styled.ul``;

const ListItem = styled.li`
  margin: 0 0 0 28px;
  list-style: disc;
`;

export interface QualificationListProps {
  qualifications: Qualification[];
}

export const QualificationList = (props: QualificationListProps) => {
  const { qualifications } = props;

  return (
    <List>
      {qualifications.map((qualification, i) => (
        <ListItem key={`${qualification.name}-${i}`}>
          <QualificationListItem qualification={qualification} />
        </ListItem>
      ))}
    </List>
  );
};

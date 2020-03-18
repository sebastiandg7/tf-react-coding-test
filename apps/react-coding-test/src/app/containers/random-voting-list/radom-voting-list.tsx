import { generateRandomInt } from '@tf-test/shared/util-generators';
import React from 'react';
import { useHistory } from 'react-router-dom';

/* eslint-disable-next-line */
export interface RadomVotingListProps {}

export const RadomVotingList = (props: RadomVotingListProps) => {
  const history = useHistory();
  history.push(`/voting-list/${generateRandomInt(3, 15)}`);
  return <></>;
};

export default RadomVotingList;

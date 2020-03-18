import { VotingCandidate } from '@tf-test/shared/models-voting-candidates';
import {
  generateRandomInt,
  generateSentence,
  generateFirstname,
  generateLastname
} from '@tf-test/shared/util-generators';

export const generateCandidates = (
  candidatesAmount: number
): VotingCandidate[] =>
  Array.from({ length: candidatesAmount }, () => generateCandidate());

const generateCandidate = (): VotingCandidate => ({
  firstname: generateFirstname(),
  lastname: generateLastname(),
  age: generateRandomInt(18, 100),
  slogan: generateSentence(10),
  votes: generateRandomInt(0, 20)
});

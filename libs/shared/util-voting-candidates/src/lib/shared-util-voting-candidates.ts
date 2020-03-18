import { VotingCandidate } from '@tf-test/shared/models-voting-candidates';
import {
  FakeDataGenerator,
  generateRandomInt
} from '@tf-test/shared/util-generators';

FakeDataGenerator.setLocale('es');

export const generateCandidates = (
  candidatesAmount: number
): VotingCandidate[] =>
  Array.from({ length: candidatesAmount }, () => generateCandidate());

const generateCandidate = (): VotingCandidate => ({
  firstname: FakeDataGenerator.generateFirstname(),
  lastname: FakeDataGenerator.generateLastname(),
  age: generateRandomInt(18, 100),
  slogan: FakeDataGenerator.generateSentence(10),
  votes: generateRandomInt(0, 20)
});

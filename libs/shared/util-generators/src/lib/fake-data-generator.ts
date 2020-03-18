import * as faker from 'faker';

export const setLocale = (locale: string) => faker.setLocale(locale);

export const generateFullname = () => faker.name.findName();

export const generateFirstname = () => faker.name.firstName();

export const generateLastname = () => faker.name.lastName();

export const generateSentence = (wordCount?: number) =>
  wordCount ? faker.lorem.sentence(wordCount) : faker.lorem.sentence();

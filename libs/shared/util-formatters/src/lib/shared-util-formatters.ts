export const stripCharacters = (text: string, characters: string) => {
  const re = new RegExp(`[${characters}]+`, 'g');
  return text.replace(re, '');
};

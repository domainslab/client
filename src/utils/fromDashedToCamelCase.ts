export const fromDashedToCamelCase = (dashed: string): string => {
  return dashed.split('-').reduce<string>((acc, current) => {
    const currentParts = current.split('');
    currentParts[0] = currentParts[0].toUpperCase();
    return acc + currentParts.join('');
  }, '');
};

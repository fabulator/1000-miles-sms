const assertNever = (x: never, message?: string): never => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  throw new Error(message || `Unexpected input: ${x}`);
};

export const getCoordinationSign = (
  location: number,
  type: 'latitude' | 'longitude',
) => {
  if (location === 0) {
    return undefined;
  }

  switch (type) {
    case 'latitude':
      return location > 0 ? ('N' as const) : ('S' as const);
    case 'longitude':
      return location < 0 ? ('W' as const) : ('E' as const);
    default:
      return assertNever(type);
  }
};

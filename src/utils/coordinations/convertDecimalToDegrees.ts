export const convertDecimalToDegrees = (location: number) => {
  const degrees = Math.floor(location);
  const fraction = location - degrees;
  const minutes = fraction * 60;

  return { degrees, minutes };
};

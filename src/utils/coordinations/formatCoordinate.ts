import { convertDecimalToDegrees } from './convertDecimalToDegrees';
import { getCoordinationSign } from './getCoordinationSign';

export const formatCoordinate = (
  location: number,
  type: 'latitude' | 'longitude',
) => {
  const sign = getCoordinationSign(location, type);
  const { degrees, minutes } = convertDecimalToDegrees(Math.abs(location));

  const roundedMinutes = (Math.round(minutes * 1000) / 1000).toFixed(3);

  return `${sign || ' '}${degrees.toString().padStart(2, '0')} ${roundedMinutes.toString().padStart(6, '0')}`;
};

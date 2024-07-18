import { sanitizeMessage } from './sanitizeMessage';

export const formatSMS = ({
  bib,
  equipment,
  location: { latitude, longitude },
  mental,
  message,
  physical,
}: {
  bib: number;
  equipment: number;
  location: { latitude: string; longitude: string };
  mental: number;
  message: string;
  physical: number;
}) => {
  return `${bib.toString().padStart(3, '0')} ${latitude} ${longitude} P${physical}M${mental}E${equipment} ${sanitizeMessage(message)}`;
};

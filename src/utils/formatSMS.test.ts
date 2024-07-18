import { describe, expect, it } from 'vitest';
import { formatSMS } from './formatSMS';

describe('formatSMS', () => {
  it('formats message', () => {
    expect(
      formatSMS({
        bib: 1,
        equipment: 5,
        location: { latitude: 'N01 00.000', longitude: 'E01 00.000' },
        mental: 4,
        message: 'Zpráva',
        physical: 2,
      }),
    ).toEqual('001 N01 00.000 E01 00.000 P2M4E5 Zprava');
  });
});

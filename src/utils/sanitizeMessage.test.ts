import { describe, expect, it } from 'vitest';
import { sanitizeMessage } from './sanitizeMessage';

describe('sanitizeMessage', () => {
  it('removes emojis', () => {
    expect(sanitizeMessage('🚴‍♀️')).toEqual(':woman-biking:');
  });

  it('removes diacritics', () => {
    expect(sanitizeMessage('ěščř')).toEqual('escr');
  });
});

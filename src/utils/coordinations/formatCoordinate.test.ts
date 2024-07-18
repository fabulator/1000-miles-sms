import { describe, expect, it } from 'vitest';
import { formatCoordinate } from './formatCoordinate';

describe('formatCoordinate', () => {
  it('formats 50.3013344', () => {
    expect(formatCoordinate(50.3013344, 'latitude')).toEqual('N50 18.080');
  });

  it('formats 48.6528017', () => {
    expect(formatCoordinate(48.6528017, 'latitude')).toEqual('N48 39.168');
  });

  it('formats 18.3024639', () => {
    expect(formatCoordinate(18.3024639, 'longitude')).toEqual('E18 18.148');
  });

  it('always has 6 character for minutes', () => {
    expect(formatCoordinate(1, 'longitude')).toEqual('E01 00.000');
  });
});

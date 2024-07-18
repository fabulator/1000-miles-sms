import { describe, expect, it } from 'vitest';
import { getCoordinationSign } from './getCoordinationSign';

describe('getCoordinationSign', () => {
  it('resolves as North for latitude above 0', () => {
    expect(getCoordinationSign(1, 'latitude')).toEqual('N');
  });

  it('resolves as South for latitude bellow 0', () => {
    expect(getCoordinationSign(-1, 'latitude')).toEqual('S');
  });

  it('resolves as undefined for latitude = 0', () => {
    expect(getCoordinationSign(0, 'latitude')).toEqual(undefined);
  });

  it('resolves as East for longitude above 0', () => {
    expect(getCoordinationSign(1, 'longitude')).toEqual('E');
  });

  it('resolves as West for longitude bellow 0', () => {
    expect(getCoordinationSign(-1, 'longitude')).toEqual('W');
  });

  it('resolves as undefined for longitude = 0', () => {
    expect(getCoordinationSign(0, 'longitude')).toEqual(undefined);
  });
});

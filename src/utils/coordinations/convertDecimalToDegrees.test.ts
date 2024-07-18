import { describe, expect, it } from 'vitest';
import { convertDecimalToDegrees } from './convertDecimalToDegrees';

describe('convertDecimalToDegrees', () => {
  it('convert 0 to degrees', () => {
    expect(convertDecimalToDegrees(0)).toEqual({ degrees: 0, minutes: 0 });
  });

  it('convert 1.5 to degrees', () => {
    expect(convertDecimalToDegrees(1.5)).toEqual({ degrees: 1, minutes: 30 });
  });

  it('convert 0.5 to degrees', () => {
    expect(convertDecimalToDegrees(0.5)).toEqual({ degrees: 0, minutes: 30 });
  });

  it('convert 50.3013344 to degrees', () => {
    expect(convertDecimalToDegrees(50.3013344)).toEqual({
      degrees: 50,
      minutes: 18.080064000000107,
    });
  });
});

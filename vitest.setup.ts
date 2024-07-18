import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';

global.navigator = {
  // @ts-expect-error for testing purposes
  geolocation: {
    getCurrentPosition: vi.fn(),
    watchPosition: vi.fn(),
  },
};

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();

  localStorage.clear();
});

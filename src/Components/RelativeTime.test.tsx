import { screen } from '@testing-library/react';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import { renderWithIntl } from '../__mocks__/renderWithIntl';
import { RelativeTime } from './RelativeTime';

describe('RelativeTime', () => {
  beforeAll(() => {
    vi.useFakeTimers({ now: new Date('2021-10-10T10:00:00Z') });
  });

  it('shows now', () => {
    renderWithIntl(
      <RelativeTime datetime={new Date('2021-10-10T10:00:00Z')} />,
    );

    expect(screen.getByText('now')).toBeVisible();
  });

  it('shows seconds ago', () => {
    renderWithIntl(
      <RelativeTime datetime={new Date('2021-10-10T09:59:30Z')} />,
    );

    expect(screen.getByText('30 seconds ago')).toBeVisible();
  });

  it('shows minutes ago', () => {
    renderWithIntl(
      <RelativeTime datetime={new Date('2021-10-10T09:30:00Z')} />,
    );

    expect(screen.getByText('30 minutes ago')).toBeVisible();
  });

  it('shows hours ago', () => {
    renderWithIntl(
      <RelativeTime datetime={new Date('2021-10-10T08:00:00Z')} />,
    );

    expect(screen.getByText('2 hours ago')).toBeVisible();
  });

  it('shows days ago', () => {
    renderWithIntl(
      <RelativeTime datetime={new Date('2021-10-01T10:00:00Z')} />,
    );

    expect(screen.getByText('9 days ago')).toBeVisible();
  });
});

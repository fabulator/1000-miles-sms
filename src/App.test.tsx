import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { App } from './App';

const user = userEvent.setup();

describe('App', () => {
  it.each(['bib', 'latitude', 'longitude', 'message'])(
    'focuses to %s input when click to label',
    async (name) => {
      render(<App />);

      await user.click(screen.getByTestId(`${name}-label`));

      expect(screen.getByTestId(`${name}-input`)).toHaveFocus();
    },
  );

  it('focuses on message input when there is an error on submit', async () => {
    render(<App />);

    await user.click(screen.getByText('Open SMS App'));

    expect(screen.getByTestId('message-input')).toHaveFocus();
  });

  it('displays an error when bib number is not filled', async () => {
    render(<App />);

    await user.click(screen.getByText('Open SMS App'));

    expect(screen.getByText('Fill the bib number.')).toBeVisible();
  });

  it('displays an error when latitude is not filled', async () => {
    render(<App />);

    await user.click(screen.getByText('Open SMS App'));

    expect(screen.getByText('Fill the latitude.')).toBeVisible();
  });

  it('displays an error when longitude is not filled', async () => {
    render(<App />);

    await user.click(screen.getByText('Open SMS App'));

    expect(screen.getByText('Fill the longitude.')).toBeVisible();
  });

  it('displays an error when message is not filled', async () => {
    render(<App />);

    await user.click(screen.getByText('Open SMS App'));

    expect(screen.getByText('Fill the message.')).toBeVisible();
  });

  it('saves bib number to local storage', async () => {
    render(<App />);

    await user.type(screen.getByTestId('bib-input'), '1234');

    expect(localStorage.getItem('bib')).toBe('1234');
  });

  it('renders app in czech language', () => {
    render(<App locale={'cs'} />);

    expect(screen.getByText('Povinné SMS')).toBeVisible();
  });

  it('resets all fields except bib  number after send', async () => {
    window.open = vi.fn();

    render(<App />);

    await user.type(screen.getByTestId('bib-input'), '1234');

    await user.type(screen.getByTestId('message-input'), 'Hello world');

    await user.type(screen.getByTestId('latitude-input'), 'N50 01.682');
    await user.type(screen.getByTestId('longitude-input'), 'E14 30.907');

    const states = screen.getAllByLabelText('1');

    await Promise.all(states.map((state) => user.click(state)));

    expect(screen.getByTestId('bib-input')).toHaveValue(1234);

    expect(screen.getByTestId('longitude-input')).toHaveValue('E14 30.907');
    expect(screen.getByTestId('latitude-input')).toHaveValue('N50 01.682');

    await user.click(screen.getByText('Open SMS App'));

    expect(screen.getByTestId('bib-input')).toHaveValue(1234);

    expect(screen.getByTestId('longitude-input')).toHaveValue('');
    expect(screen.getByTestId('latitude-input')).toHaveValue('');

    expect(screen.getByTestId('message-input')).toHaveValue('');
  });
});

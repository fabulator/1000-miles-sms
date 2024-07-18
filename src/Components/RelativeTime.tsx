import { FormattedRelativeTime } from 'react-intl';
import * as React from 'react';
import { RelativeTimeFormatSingularUnit } from '@formatjs/ecma402-abstract';

interface Props {
  datetime: Date;
}

const getTimeAndUnit = (
  diff: number,
): {
  time: number;
  unit: RelativeTimeFormatSingularUnit;
  updateIntervalInSeconds: number | undefined;
} => {
  if (diff < 60) {
    return {
      time: Math.floor(diff),
      unit: 'second',
      updateIntervalInSeconds: 1,
    };
  }
  if (diff < 60 * 60) {
    return {
      time: Math.floor(diff / 60),
      unit: 'minute',
      updateIntervalInSeconds: 60,
    };
  }
  if (diff < 60 * 60 * 24) {
    return {
      time: Math.floor(diff / 60 / 60),
      unit: 'hour',
      updateIntervalInSeconds: 60 * 60,
    };
  }
  return {
    time: Math.floor(diff / 60 / 60 / 24),
    unit: 'day',
    updateIntervalInSeconds: undefined,
  };
};

export const RelativeTime = ({ datetime }: Props) => {
  const diffInSeconds = (Date.now() - datetime.getTime()) / 1000;

  const { time, unit, updateIntervalInSeconds } = getTimeAndUnit(diffInSeconds);

  return (
    <FormattedRelativeTime
      numeric={'auto'}
      unit={unit}
      updateIntervalInSeconds={updateIntervalInSeconds}
      value={-time}
    />
  );
};

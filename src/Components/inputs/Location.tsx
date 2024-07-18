import { Button, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useGeolocated } from 'react-geolocated';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { formatCoordinate } from '../../utils/coordinations/formatCoordinate';
import { RelativeTime } from '../RelativeTime';
import { CoordinationInput } from './CoordinationInput';

export const Location = () => {
  const { setValue } = useFormContext();
  const intl = useIntl();

  const [isPositionLoading, setIsPositionLoading] = useState(false);

  const { positionError, timestamp, isGeolocationAvailable, getPosition } =
    useGeolocated({
      isOptimisticGeolocationEnabled: false,
      onError: () => {
        setIsPositionLoading(false);
      },
      onSuccess: ({ coords: { longitude, latitude } }) => {
        setValue('longitude', formatCoordinate(longitude, 'longitude'));
        setValue('latitude', formatCoordinate(latitude, 'latitude'));
        setIsPositionLoading(false);
      },
      positionOptions: {
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 30000,
      },
      watchPosition: false,
    });

  return (
    <>
      <HStack>
        <CoordinationInput
          label={intl.formatMessage({
            defaultMessage: 'Latitude',
            id: 'latitude.label',
          })}
          requiredMessage={intl.formatMessage({
            defaultMessage: 'Fill the latitude.',
            id: 'latitude.required',
          })}
          type={'latitude'}
        />

        <CoordinationInput
          label={intl.formatMessage({
            defaultMessage: 'Longitude',
            id: 'longitude.label',
          })}
          requiredMessage={intl.formatMessage({
            defaultMessage: 'Fill the longitude.',
            id: 'longitude.required',
          })}
          type={'longitude'}
        />
      </HStack>
      {!isGeolocationAvailable && (
        <FormattedMessage
          defaultMessage={'Your browser does not support geolocation.'}
          id={'not-supported'}
        />
      )}

      <Button
        colorScheme={'blue'}
        isLoading={isPositionLoading}
        type={'button'}
        onClick={() => {
          getPosition();
          setIsPositionLoading(true);
        }}
      >
        <FormattedMessage defaultMessage={'Reload location'} id={'reload'} />
      </Button>

      {timestamp && (
        <FormattedMessage
          defaultMessage={'Last position: {from}'}
          id={'position.last'}
          values={{ from: <RelativeTime datetime={new Date(timestamp)} /> }}
        />
      )}
      {positionError && (
        <strong>
          <FormattedMessage
            defaultMessage={
              'There was an error when retrieving position {error}'
            }
            id={'position.error'}
            values={{ error: positionError.message }}
          />
        </strong>
      )}
    </>
  );
};

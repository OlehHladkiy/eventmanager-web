import { DetailsFormValues, EventLocationType } from '../models';

export const normalizeDetailsFormValues = ({
  starts_at,
  ends_at,
  location_value,
  ...data
}: DetailsFormValues) => ({
  ...data,
  location_value:
    data.location_type === EventLocationType.Venue ? location_value : '',
  starts_at: starts_at ? new Date(starts_at).toISOString() : '',
  ends_at: ends_at ? new Date(ends_at).toISOString() : '',
});

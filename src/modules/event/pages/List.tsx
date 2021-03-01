import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import EventsWrapper from '@modules/event/components/EventsWrapper';
import { getEvents } from '@modules/event/Actions';
import { getEvents as getEventsSelector } from '../Reducer';
import EventsTable from '@modules/event/components/EventsTable';

const Events = () => {
  const dispatch = useDispatch();
  const event: any[] = useSelector(getEventsSelector);

  useEffect(() => {
    dispatch(getEvents({}));
  }, [dispatch]);

  return (
    <EventsWrapper title={'Events'}>
      {event.length ? <EventsTable events={event} /> : <h1>Loading...</h1>}
    </EventsWrapper>
  );
};

export default Events;

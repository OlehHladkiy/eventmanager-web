import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getEvents } from '@modules/event/Actions';
import EventsTable from '@modules/event/components/List';
import EventsWrapper from '@modules/event/components/EventsWrapper';

const Events = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents({}));
  }, [dispatch]);

  return (
    <EventsWrapper title={'Events'}>
      <EventsTable />
    </EventsWrapper>
  );
};

export default Events;

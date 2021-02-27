import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { createEvent, CreateUpdateEventData } from '../Actions';
import { getIsLoading } from '../Reducer';
import Details from '../forms/Details';
import { EventLocationType, EventScheduleType } from '../models';

const Create = () => {
  const isLoading: boolean = useSelector(getIsLoading);

  const dispatch = useDispatch();

  const onFinish: any = (data: CreateUpdateEventData) => {
    dispatch(createEvent(data));
  };

  return (
    <Create.Wrapper>
      <Details
        initialValues={{
          location_type: EventLocationType.Venue,
          schedule_type: EventScheduleType.Single,
        }}
        isLoading={isLoading}
        onFinish={onFinish}
      />
    </Create.Wrapper>
  );
};

Create.Wrapper = styled.div`
  padding: 0 25% 50px 25%;
`;

export default Create;

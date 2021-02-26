import { Form } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { CreateUpdateEventData, getEvent, updateEvent } from '../Actions';
import { getEventDetails } from '../Reducer';
import DetailsForm from '../forms/Details';

const Details = () => {
  const { id }: { id: string } = useParams();
  const [form] = Form.useForm();

  const event = useSelector((state: any) => getEventDetails(state, id));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvent(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (event) {
      form.setFieldsValue(event);
    }
  }, [event, form]);

  const onFinish: any = (data: CreateUpdateEventData) => {
    dispatch(updateEvent({ id, data }));
  };

  return <DetailsForm form={form} isLoading={false} onFinish={onFinish} />;
};

export default Details;

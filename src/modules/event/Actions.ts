import {
  EventType,
  EventLocationType,
  EventScheduleType,
  ScheduleEvent,
} from './models';

const NAMESPACE = 'EVENT';

export const GET_EVENT = `${NAMESPACE}/GET_EVENT`;
export const GET_EVENTS = `${NAMESPACE}/GET_EVENTS`;
export const CREATE_EVENT = `${NAMESPACE}/CREATE_EVENT`;
export const UPDATE_EVENT = `${NAMESPACE}/UPDATE_EVENT`;
export const SET_IS_LOADING = `${NAMESPACE}/SET_IS_LOADING`;

export interface CreateUpdateEventData {
  title: string;
  image: string;
  description: string;
  organizer: string;
  type: EventType;
  location_type: EventLocationType;
  schedule_type: EventScheduleType;
  schedule_events: [ScheduleEvent];
}

export const getEvents = (payload: Record<string, any>) => ({
  type: GET_EVENTS,
  payload,
});

export const getEvent = (payload: string) => ({
  type: GET_EVENT,
  payload,
});

export const createEvent = (payload: CreateUpdateEventData) => ({
  type: CREATE_EVENT,
  payload,
});

export const updateEvent = (payload: CreateUpdateEventData) => ({
  type: UPDATE_EVENT,
  payload,
});

export const setIsLoading = (payload: boolean) => ({
  type: SET_IS_LOADING,
  payload,
});

export enum EventType {
  Attraction = 'attraction',
  Conference = 'conference',
  Tour = 'tour',
  Other = 'other',
  Screening = 'screening',
  GameOrCompetition = 'game_or_competition',
}

export enum EventCategory {
  Music = 'music',
  Travel = 'travel',
  SchoolActivities = 'school_activities',
  Other = 'other',
  FamilyEducation = 'family_education',
}

export enum EventScheduleType {
  Single = 'single',
  Recurring = 'recurring',
}

export enum EventLocationType {
  Venue = 'venue',
  Online = 'online',
  WillAnnounce = 'will_announce',
}

export const EVENT_TYPE_OPTIONS = [
  { label: 'Attraction', value: EventType.Attraction },
  { label: 'Conference', value: EventType.Conference },
  { label: 'Tour', value: EventType.Tour },
  { label: 'Screening', value: EventType.Screening },
  { label: 'GameOrCompetition', value: EventType.GameOrCompetition },
  { label: 'Other', value: EventType.Other },
];

export const EVENT_CATEGORY_OPTIONS = [
  { label: 'Music', value: EventCategory.Music },
  { label: 'Travel', value: EventCategory.Travel },
  { label: 'School activities', value: EventCategory.SchoolActivities },
  { label: 'Family education', value: EventCategory.FamilyEducation },
  { label: 'Other', value: EventCategory.Other },
];

export type ScheduleEvent = {
  id?: string;
  event_id: string;
  starts_at: Date | string;
  ends_at: Date | string;
};

export interface DetailsFormValues {
  title: string;
  organizer: string;
  type: EventType;
  category: EventCategory;
  location_type: EventLocationType;
  location_value: string;
  starts_at: any;
  ends_at: any;
  schedule_type: string;
}

export enum EventManageItem {
  Details = 'details',
  Basic = 'basic',
  Publish = 'publish',
}

export enum EventStatus {
  Draft = 'draft',
  All = 'all',
  Option = 'Option',
  Part = 'Part',
}

export const EVENT_DETAILS_FIELDS = [
  'title',
  'organizer',
  'type',
  'category',
  'location_type',
  'location_value',
  'starts_at',
  'ends_at',
  'schedule_type',
];

export const EVENT_BASIC_INFO_FIELDS = ['image', 'description'];

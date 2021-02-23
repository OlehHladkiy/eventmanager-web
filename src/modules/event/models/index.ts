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

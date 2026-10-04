import { EventType } from '../../models/CalendarEvent';
export const EVENT_TYPES: Record<EventType, { label: string; color: string }> = {
  anniversary: { label: 'Anniversary', color: '#e0507d' },
  birthday: { label: 'Birthday', color: '#e9a23b' },
  datenight: { label: 'Date night', color: '#8a6fd6' },
  trip: { label: 'Trip', color: '#3b9ad9' },
  other: { label: 'Other', color: '#7bb08a' },
};

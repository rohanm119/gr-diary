import { CalendarEvent } from '../models/CalendarEvent';
import { demoEvents } from '../data/demo';
import { Repository } from './Repository';
export const eventService = new Repository<CalendarEvent>('diary.events', CalendarEvent.from, demoEvents);

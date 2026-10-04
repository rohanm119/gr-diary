import { differenceInCalendarDays, parseISO } from 'date-fns';
import { BaseEntity, BaseInit } from './BaseEntity';

export type EventType = 'anniversary' | 'birthday' | 'datenight' | 'trip' | 'other';
export interface EventInit extends BaseInit { title?: string; date?: string; type?: EventType; note?: string }

export class CalendarEvent extends BaseEntity {
  title: string; date: string; type: EventType; note: string;
  constructor(i: EventInit = {}) {
    super(i);
    this.title = i.title ?? '';
    this.date = i.date ?? new Date().toISOString().slice(0, 10);
    this.type = i.type ?? 'other';
    this.note = i.note ?? '';
  }
  static from(row: EventInit) { return new CalendarEvent(row); }
  daysUntil(from: Date = new Date()) { return differenceInCalendarDays(parseISO(this.date), from); }
}

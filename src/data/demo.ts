import { addDays, format } from 'date-fns';
import { CalendarEvent } from '../models/CalendarEvent';
import { Memory } from '../models/Memory';

const d = (n: number) => format(addDays(new Date(), n), 'yyyy-MM-dd');

export const COUPLE = { a: 'Aarav', b: 'Meera', start: '2022-02-14' };

export const demoEvents = () => [
  new CalendarEvent({ title: 'Rooftop dinner', date: d(3), type: 'datenight', note: 'Table for 8pm' }),
  new CalendarEvent({ title: "Meera's birthday", date: d(12), type: 'birthday', owner: 'b' }),
  new CalendarEvent({ title: 'Weekend trip', date: d(21), type: 'trip', note: 'Pack warm clothes' }),
  new CalendarEvent({ title: 'Our anniversary', date: d(40), type: 'anniversary' }),
  new CalendarEvent({ title: 'Book club', date: d(6), type: 'other', owner: 'a' }),
];
export const demoMemories = () => [
  new Memory({ title: 'Chai in the rain', date: d(-5), text: 'One umbrella, two cups of chai.' }),
  new Memory({ title: 'Sunset at the lake', date: d(-18), text: 'The sky turned peach and we said nothing for an hour.' }),
  new Memory({ title: 'Cooking disaster', date: d(-33), text: 'The pasta burned, the laughter did not.' }),
  new Memory({ title: 'First road trip', date: d(-90), text: 'Windows down, playlist loud.' }),
];

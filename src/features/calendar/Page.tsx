import { useState } from 'react';
import { addMonths, eachDayOfInterval, endOfMonth, endOfWeek, format, isSameDay, isSameMonth, parseISO, startOfMonth, startOfWeek } from 'date-fns';
import { CalendarEvent } from '../../models/CalendarEvent';
import { useEvents } from './hooks/useEvents';
import EventModal from './components/EventModal';
import { EVENT_TYPES } from './types';

export default function CalendarPage() {
  const { events, save, remove } = useEvents();
  const [month, setMonth] = useState(startOfMonth(new Date()));
  const [selected, setSelected] = useState(new Date());
  const [editing, setEditing] = useState<{ event: CalendarEvent; isNew: boolean } | null>(null);

  const days = eachDayOfInterval({ start: startOfWeek(startOfMonth(month)), end: endOfWeek(endOfMonth(month)) });
  const on = (d: Date) => events.filter((e) => isSameDay(parseISO(e.date), d));
  const upcoming = events.filter((e) => e.daysUntil() >= 0).sort((a, b) => a.date.localeCompare(b.date)).slice(0, 6);

  const Row = ({ e }: { e: CalendarEvent }) => (
    <button className="ev" onClick={() => setEditing({ event: e, isNew: false })}>
      <i className="dot" style={{ background: EVENT_TYPES[e.type].color }} />
      <span><b>{e.title}</b><br /><span className="mute">{format(parseISO(e.date), 'd MMM')} · {EVENT_TYPES[e.type].label}</span></span>
    </button>
  );

  return (
    <div className="page">
      <h1>📅 Calendar</h1>
      <p className="sub">Every date that matters.</p>
      <div className="cal">
        <div className="card">
          <div className="head">
            <button className="btn ghost" onClick={() => setMonth(addMonths(month, -1))} aria-label="Previous month">‹</button>
            <h2>{format(month, 'MMMM yyyy')}</h2>
            <button className="btn ghost" onClick={() => setMonth(addMonths(month, 1))} aria-label="Next month">›</button>
          </div>
          <div className="week">{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => <div key={d}>{d}</div>)}</div>
          <div className="week">
            {days.map((d) => {
              const types = [...new Set(on(d).map((e) => e.type))];
              return (
                <button key={d.toISOString()} onClick={() => setSelected(d)}
                  className={`day${!isSameMonth(d, month) ? ' out' : ''}${isSameDay(d, new Date()) ? ' today' : ''}${isSameDay(d, selected) ? ' sel' : ''}`}
                  aria-label={`${format(d, 'PPPP')}, ${on(d).length} events`}>
                  <span>{format(d, 'd')}</span>
                  <span className="dots">{types.map((t) => <i key={t} className="dot" style={{ background: EVENT_TYPES[t].color }} />)}</span>
                </button>
              );
            })}
          </div>
          <div className="legend">{Object.values(EVENT_TYPES).map((t) => <span key={t.label}><i className="dot" style={{ background: t.color }} /> {t.label}</span>)}</div>
        </div>
        <div>
          <div className="card" style={{ marginBottom: 16 }}>
            <div className="head">
              <h3>{format(selected, 'EEEE, d MMM')}</h3>
              <button className="btn" onClick={() => setEditing({ event: new CalendarEvent({ date: format(selected, 'yyyy-MM-dd') }), isNew: true })}>+ Add</button>
            </div>
            {on(selected).map((e) => <Row key={e.id} e={e} />)}
            {!on(selected).length && <p className="mute">Nothing planned. Add something sweet.</p>}
          </div>
          <div className="card">
            <h3>Upcoming</h3>
            {upcoming.map((e) => <Row key={e.id} e={e} />)}
            {!upcoming.length && <p className="mute">No upcoming events.</p>}
          </div>
        </div>
      </div>
      {editing && <EventModal {...editing} onSave={(e) => save(e)} onDelete={(id) => remove(id)} onClose={() => setEditing(null)} />}
    </div>
  );
}

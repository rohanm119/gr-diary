import { differenceInCalendarDays, format, parseISO } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import { eventService } from '../../services/eventService';
import { memoryService } from '../../services/memoryService';
import { COUPLE } from '../../data/demo';

export default function HomePage() {
  const events = useQuery({ queryKey: ['events'], queryFn: () => eventService.list() }).data ?? [];
  const memories = useQuery({ queryKey: ['memories'], queryFn: () => memoryService.list() }).data ?? [];
  const days = differenceInCalendarDays(new Date(), parseISO(COUPLE.start));
  const next = events.filter((e) => e.daysUntil() >= 0).sort((a, b) => a.date.localeCompare(b.date))[0];
  const recent = [...memories].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
  return (
    <div className="page">
      <h1>Hello, {COUPLE.a} &amp; {COUPLE.b} 💞</h1>
      <p className="sub">Your diary for two.</p>
      <div className="grid">
        <div className="card hov"><div className="lab">Days together</div><div className="big">{days.toLocaleString()}</div></div>
        <div className="card hov">
          <div className="lab">Next important date</div>
          {next ? (<>
            <div className="big">{next.daysUntil() === 0 ? 'Today' : next.daysUntil()}</div>
            <p><b>{next.title}</b><br /><span className="mute">{next.daysUntil() > 0 ? 'days to go · ' : ''}{format(parseISO(next.date), 'd MMMM')}</span></p>
          </>) : <p>No upcoming dates yet.</p>}
        </div>
      </div>
      <div className="card" style={{ marginTop: 16 }}>
        <div className="lab">Recent memories</div>
        {recent.map((m) => (
          <div className="mem" key={m.id}><b>{m.title}</b> <span className="mute">· {format(parseISO(m.date), 'd MMM')}</span><div className="mute">{m.text}</div></div>
        ))}
      </div>
    </div>
  );
}

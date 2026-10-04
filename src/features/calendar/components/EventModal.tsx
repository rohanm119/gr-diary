import { FormEvent, useState } from 'react';
import Modal from '../../../components/shared/Modal';
import { CalendarEvent, EventType } from '../../../models/CalendarEvent';
import { Owner } from '../../../models/BaseEntity';
import { COUPLE } from '../../../data/demo';
import { EVENT_TYPES } from '../types';

interface Props { event: CalendarEvent; isNew: boolean; onSave: (e: CalendarEvent) => void; onDelete: (id: string) => void; onClose: () => void }

export default function EventModal({ event, isNew, onSave, onDelete, onClose }: Props) {
  const [f, setF] = useState({ title: event.title, date: event.date, type: event.type, owner: event.owner, note: event.note });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!f.title.trim() || !f.date) return;
    Object.assign(event, { ...f, title: f.title.trim() });
    onSave(event); onClose();
  };
  return (
    <Modal title={isNew ? 'New event' : 'Edit event'} onClose={onClose}>
      <form onSubmit={submit}>
        <label>Title<input autoFocus value={f.title} onChange={(e) => setF({ ...f, title: e.target.value })} /></label>
        <label>Date<input type="date" value={f.date} onChange={(e) => setF({ ...f, date: e.target.value })} /></label>
        <label>Type
          <select value={f.type} onChange={(e) => setF({ ...f, type: e.target.value as EventType })}>
            {Object.entries(EVENT_TYPES).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
          </select>
        </label>
        <label>Belongs to
          <select value={f.owner} onChange={(e) => setF({ ...f, owner: e.target.value as Owner })}>
            <option value="a">{COUPLE.a}</option><option value="b">{COUPLE.b}</option><option value="both">Both of us</option>
          </select>
        </label>
        <label>Note<textarea rows={3} value={f.note} onChange={(e) => setF({ ...f, note: e.target.value })} /></label>
        <div className="row">
          {!isNew && <button type="button" className="btn del" onClick={() => { onDelete(event.id); onClose(); }}>Delete</button>}
          <button type="button" className="btn ghost" onClick={onClose}>Cancel</button>
          <button className="btn">Save</button>
        </div>
      </form>
    </Modal>
  );
}

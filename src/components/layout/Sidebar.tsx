import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SECTIONS } from '../../data/sections';

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [sheet, setSheet] = useState(false);
  return (
    <>
      <nav className={`side${collapsed ? ' collapsed' : ''}${sheet ? ' sheet-open' : ''}`} aria-label="Sections">
        <div className="brand">💞 <span className="lbl">Our Diary</span></div>
        {SECTIONS.map((s) => (
          <NavLink key={s.path} to={`/${s.path}`} end title={s.title} onClick={() => setSheet(false)}>
            <span className="ic">{s.icon}</span><span className="lbl">{s.title}</span>
          </NavLink>
        ))}
        <button className="toggle" onClick={() => setCollapsed(!collapsed)} aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
          {collapsed ? '»' : '« Collapse'}
        </button>
      </nav>
      <button className="menu-fab" onClick={() => setSheet(!sheet)} aria-expanded={sheet}>☰ Sections</button>
    </>
  );
}

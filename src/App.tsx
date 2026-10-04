import { Route, Routes } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import HomePage from './features/home/Page';
import CalendarPage from './features/calendar/Page';
import PlaceholderPage from './features/placeholder/Page';
import { SECTIONS } from './data/sections';

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="calendar" element={<CalendarPage />} />
        {SECTIONS.filter((s) => s.path && s.path !== 'calendar').map((s) => (
          <Route key={s.path} path={s.path} element={<PlaceholderPage section={s} />} />
        ))}
      </Route>
    </Routes>
  );
}

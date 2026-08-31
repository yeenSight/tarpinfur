import React from 'react';
import eventsData from '../resources/data/event.json';
import { Link } from 'react-router-dom';

type EventItem = {
  id?: string;
  title: string;
  description: string;
  date: string;
  time?: string;
};

const Planning: React.FC = () => {
  const events: EventItem[] = (eventsData as any).events || [];
  const sorted = events
    .slice()
    .sort((a, b) => {
      const da = new Date(`${a.date}T${a.time ?? '00:00'}`);
      const db = new Date(`${b.date}T${b.time ?? '00:00'}`);
      return da.getTime() - db.getTime();
    });

  return (
    <main className="events">
      <div className="content-wrapper">
        <div className="planning-list">
          {sorted.map((e, i) => {
            const d = new Date(`${e.date}T${e.time ?? '00:00'}`);
            const dateStr = d.toLocaleDateString(undefined, { day: '2-digit', month: 'short', year: 'numeric' });
            const timeStr = e.time ? e.time : '';
            const id = e.id ?? `ev-${i}`;

            return (
              <Link key={id} to={`/planning/${encodeURIComponent(id)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <article className="plan-card">
                  <div className="plan-content">
                    <h3>{e.title}</h3>
                    <div className="plan-text" dangerouslySetInnerHTML={{ __html: e.resume }} />
                  </div>

                  <div className="date-badge">
                    <div className="date-line">{dateStr}</div>
                    {timeStr && <div className="time-line">{timeStr}</div>}
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Planning;

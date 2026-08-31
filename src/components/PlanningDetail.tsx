import React from 'react';
import { useParams, Link } from 'react-router-dom';
import eventsData from '../resources/data/event.json';

type EventItem = {
  id?: string;
  title: string;
  description: string;
  date: string;
  time?: string;
};

export default function PlanningDetail() {
  const { id } = useParams();
  const events: EventItem[] = (eventsData as any).events || [];
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <main className="events">
        <div className="content-wrapper">
          <div className="text-block">
            <div className="text-block-content">
              <div className="text-content">
                <h2>Événement introuvable</h2>
                <p>La page que vous cherchez n'existe pas.</p>
                <p>
                  <Link to="/planning" className="button-link">Retour au planning</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const d = new Date(`${event.date}T${event.time ?? '00:00'}`);
  const dateStr = d.toLocaleDateString(undefined, { day: '2-digit', month: 'long', year: 'numeric' });
  const timeStr = event.time ?? '';

  const images = import.meta.glob('../assets/**', { eager: true, as: 'url' }) as Record<string, string>;

  const getImageUrl = (name?: string) => {
    if (!name) return undefined;
    // If already an absolute or public path, return as-is
    if (name.startsWith('http') || name.startsWith('/')) return name;

    const keys = Object.keys(images);
    // try several matching strategies
    let key = keys.find(k => k.endsWith('/' + name) || k.endsWith(name));
    if (key) return images[key];

    // try matching by basename only
    const base = name.split('/').pop() as string;
    key = keys.find(k => k.endsWith('/' + base) || k.endsWith(base));
    if (key) return images[key];

    // fallback to a served src path (Vite serves /src/ during dev)
    return `/src/assets/${name}`;
  };

  const imgSrc = getImageUrl((event as any).image);

  return (
    <main className="events">
      <div className="content-wrapper">
        <div className="text-block">
          <div className="text-block-content">
            <div>
              {imgSrc && <img src={imgSrc} alt={event.title} className="mascotte" />}
            </div>

            <div className="text-content">
              <h2>{`${dateStr}${timeStr ? ' • ' + timeStr : ''} - ${event.title}`}</h2>
              {((event as any).resume) && <h4>{(event as any).resume}</h4>}
              <div dangerouslySetInnerHTML={{ __html: event.description }} />
              <p>
                <Link to="/planning" className="button-link">Retour au planning</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

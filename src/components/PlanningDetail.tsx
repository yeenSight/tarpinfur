import { Link, useParams } from 'react-router-dom';
import eventsData from '../resources/data/event.json';

type EventItem = {
  id?: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  resume?: string;
  image?: string;
};

type AssetModule = string | { default?: string; url?: string } | Record<string, unknown>;

type EventDateInfo = {
  dateLabel: string;
  timeLabel: string;
};

const DEFAULT_TIME = '00:00';
const IMAGE_MODULES = import.meta.glob('../assets/**', { eager: true }) as Record<string, AssetModule>;

const getEvents = (): EventItem[] => {
  const payload = eventsData as { events?: EventItem[] };
  return Array.isArray(payload.events) ? payload.events : [];
};

const resolveAssetValue = (value: AssetModule | undefined): string | undefined => {
  if (!value) {
    return undefined;
  }

  if (typeof value === 'string') {
    return value;
  }

  if (typeof value.default === 'string') {
    return value.default;
  }

  if (typeof value.url === 'string') {
    return value.url;
  }

  for (const candidate of Object.values(value)) {
    if (typeof candidate === 'string') {
      return candidate;
    }
  }

  return undefined;
};

const findImageUrl = (imageName?: string): string | undefined => {
  if (!imageName) {
    return undefined;
  }

  if (imageName.startsWith('http') || imageName.startsWith('/')) {
    return imageName;
  }

  const candidates = [imageName, imageName.split('/').pop() ?? imageName];

  const matchingAsset = Object.entries(IMAGE_MODULES).find(([path]) => {
    const normalizedPath = path.toLowerCase();
    return candidates.some((candidate) => {
      const normalizedCandidate = candidate.toLowerCase();
      return normalizedPath.endsWith(`/${normalizedCandidate}`) || normalizedPath.endsWith(normalizedCandidate);
    });
  });

  if (!matchingAsset) {
    return `/src/assets/${imageName}`;
  }

  return resolveAssetValue(matchingAsset[1]);
};

const formatEventDate = (date: string, time?: string): EventDateInfo => {
  const safeTime = time ?? DEFAULT_TIME;
  const parsedDate = new Date(`${date}T${safeTime}`);

  return {
    dateLabel: Number.isNaN(parsedDate.getTime())
      ? date
      : parsedDate.toLocaleDateString(undefined, {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }),
    timeLabel: time ?? '',
  };
};

function EventNotFound() {
  return (
    <main className="events">
      <div className="content-wrapper">
        <div className="text-block">
          <div className="text-block-content">
            <div className="text-content">
              <h2>Événement introuvable</h2>
              <p>La page que vous cherchez n'existe pas.</p>
              <p>
                <Link to="/planning" className="button-link">
                  Retour au planning
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function PlanningDetail() {
  const { id } = useParams();
  const event = getEvents().find((entry) => entry.id === id);

  if (!event) {
    return <EventNotFound />;
  }

  const { dateLabel, timeLabel } = formatEventDate(event.date, event.time);
  const imageSrc = findImageUrl(event.image);

  return (
    <main className="events">
      <div className="content-wrapper">
        <div className="text-block">
          <div className="text-block-content">
            <div>{imageSrc && <img src={imageSrc} alt={event.title} className="mascotte" />}</div>

            <div className="text-content">
              <h2>{`${dateLabel}${timeLabel ? ` • ${timeLabel}` : ''} - ${event.title}`}</h2>
              {event.resume && <h4>{event.resume}</h4>}
              <div dangerouslySetInnerHTML={{ __html: event.description }} />
              <p>
                <Link to="/planning" className="button-link">
                  Retour au planning
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

'use client';

import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';

type ConferenceDeadline = {
  date: string | null;
  label: string;
};

type Conference = {
  name: string;
  fullName: string;
  deadlines: ConferenceDeadline[];
  tags: string[];
  url: string;
};

const blockchainConferences: Conference[] = [
  {
    name: 'DISC 2027',
    fullName: 'International Symposium on Distributed Computing',
    deadlines: [
      {
        date: '2027-06-01T11:59:59Z',
        label: '~ May–June 2027 · estimated deadline for DISC 2027',
      },
    ],
    tags: ['Blockchain', 'Distributed Computing'],
    url: 'https://www.disc-conference.org/wp/',
  },
];;

function getCountdown(deadline: string | null) {
  if (!deadline) return 'TBA';

  const now = new Date().getTime();
  const target = new Date(deadline).getTime();
  const diff = target - now;

  if (diff <= 0) return '마감됨';

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds / (60 * 60)) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = totalSeconds % 60;

  return `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
}

export default function BlockchainContent() {
  const [, setNow] = useState(new Date());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section style={styles.container}>
      <div style={styles.list}>
        {blockchainConferences.map((conference) => (
          <article key={conference.name} style={styles.item}>
            <div style={styles.left}>
              <h3 style={styles.title}>
                {conference.name}

                <a
                  href={conference.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                  aria-label={`${conference.name} website`}
                >
                  🌐
                </a>
              </h3>

              <p style={styles.fullName}>{conference.fullName}</p>

              <div style={styles.tags}>
                {conference.tags.map((tag) => (
                  <span key={tag} style={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div style={styles.right}>
              {conference.deadlines.map((deadline) => (
                <div key={deadline.label} style={styles.deadlineGroup}>
                  <p style={styles.deadline}>
                    <strong>Deadline:</strong> {deadline.label}
                  </p>

                  <p style={styles.countdown}>
                    <strong>Countdown:</strong> {getCountdown(deadline.date)}
                  </p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const styles: {
  [key: string]: CSSProperties;
} = {
  container: {
    width: '100%',
  },

  list: {
    width: '100%',
    borderTop: '1px solid #e5e7eb',
  },

  item: {
    display: 'grid',
    gridTemplateColumns: '1fr 460px',
    gap: '40px',
    padding: '22px 0',
    borderBottom: '1px solid #e5e7eb',
  },

  left: {
    minWidth: 0,
  },

  title: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    margin: '0 0 8px',
    fontSize: '22px',
    fontWeight: 500,
    color: '#111827',
  },

  fullName: {
    margin: '0 0 12px',
    fontSize: '13px',
    color: '#4b5563',
    lineHeight: 1.5,
  },

  link: {
    fontSize: '16px',
    textDecoration: 'none',
  },

  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },

  tag: {
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: '24px',
    padding: '0 8px',
    backgroundColor: '#f3f4f6',
    color: '#2563eb',
    fontSize: '12px',
  },

  right: {
    paddingTop: '4px',
  },

  deadlineGroup: {
    marginBottom: '12px',
  },

  deadline: {
    margin: '0 0 6px',
    fontSize: '13px',
    color: '#111827',
    lineHeight: 1.6,
  },

  countdown: {
    margin: 0,
    fontSize: '13px',
    color: '#2563eb',
    lineHeight: 1.6,
  },
};
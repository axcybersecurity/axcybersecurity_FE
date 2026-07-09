'use client';

import { useEffect, useState } from 'react';

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
    <section className="conference-container">
      <div className="conference-list">
        {blockchainConferences.map((conference) => (
          <article key={conference.name} className="conference-item">
            <div className="conference-left">
              <h3 className="conference-title">
                {conference.name}

                <a
                  href={conference.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="conference-link"
                  aria-label={`${conference.name} website`}
                >
                  🌐
                </a>
              </h3>

              <p className="conference-fullName">{conference.fullName}</p>

              <div className="conference-tags">
                {conference.tags.map((tag) => (
                  <span key={tag} className="conference-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="conference-right">
              {conference.deadlines.map((deadline) => (
                <div key={deadline.label} className="conference-deadlineGroup">
                  <p className="conference-deadline">
                    <strong>Deadline:</strong> {deadline.label}
                  </p>

                  <p className="conference-countdown">
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

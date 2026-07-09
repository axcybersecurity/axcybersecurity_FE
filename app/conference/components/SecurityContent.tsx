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

const securityConferences: Conference[] = [
  {
    name: 'CCS 2027',
    fullName: 'ACM Conference on Computer and Communications Security',
    deadlines: [
      {
        date: '2027-01-15T11:59:59Z',
        label: '~ January 2027 · Cycle 1 estimated deadline',
      },
      {
        date: '2027-04-15T11:59:59Z',
        label: '~ April 2027 · Cycle 2 estimated deadline',
      },
    ],
    tags: ['Security', 'Hacking', 'Defense'],
    url: 'https://www.sigsac.org/ccs.html',
  },
  {
    name: 'IEEE S&P 2027',
    fullName: 'IEEE Symposium on Security and Privacy',
    deadlines: [
      {
        // Jun 12, 2026 23:59:59 AoE = Jun 13, 2026 11:59:59 UTC
        date: '2026-06-13T11:59:59Z',
        label: 'Cycle 1 paper submission · Jun 12, 2026 AoE',
      },
      {
        // Nov 17, 2026 23:59:59 AoE = Nov 18, 2026 11:59:59 UTC
        date: '2026-11-18T11:59:59Z',
        label: 'Cycle 2 paper submission · Nov 17, 2026 AoE',
      },
    ],
    tags: ['Security', 'Privacy'],
    url: 'https://sp2027.ieee-security.org/cfpapers.html',
  },
  {
    name: 'EUROCRYPT 2027',
    fullName: 'International Conference on the Theory and Applications of Cryptographic Techniques',
    deadlines: [
      {
        date: '2026-09-18T11:59:59Z',
        label: '~ Sep 18, 2026 · estimated deadline for EUROCRYPT 2027',
      },
    ],
    tags: ['Security', 'Cryptography'],
    url: 'https://iacr.org/meetings/',
  },
  {
    name: 'ASIACRYPT 2027',
    fullName: 'International Conference on the Theory and Application of Cryptology and Information Security',
    deadlines: [
      {
        date: '2027-05-15T11:59:59Z',
        label: '~ May 2027 · estimated deadline for ASIACRYPT 2027',
      },
    ],
    tags: ['Security', 'Cryptography'],
    url: 'https://iacr.org/meetings/',
  },
  {
    name: 'RAID 2027',
    fullName: 'International Symposium on Recent Advances in Intrusion Detection',
    deadlines: [
      {
        date: '2027-04-15T11:59:59Z',
        label: '~ April 2027 · estimated deadline',
      },
    ],
    tags: ['Security', 'Intrusion Detection'],
    url: 'https://raid-symposium.org/',
  },
  {
    name: 'NDSS 2027',
    fullName: 'Network and Distributed System Security Symposium',
    deadlines: [
      {
        // May 6, 2026 23:59 AoE = May 7, 2026 11:59 UTC
        date: '2026-05-07T11:59:59Z',
        label: 'Summer Cycle paper submission · May 6, 2026 AoE',
      },
      {
        // Aug 19, 2026 23:59 AoE = Aug 20, 2026 11:59 UTC
        date: '2026-08-20T11:59:59Z',
        label: 'Fall Cycle paper submission · Aug 19, 2026 AoE',
      },
    ],
    tags: ['Security', 'Network Security'],
    url: 'https://www.ndss-symposium.org/ndss2027/submissions/call-for-papers/',
  },
  {
    name: 'ACSAC 2027',
    fullName: 'Annual Computer Security Applications Conference',
    deadlines: [
      {
        date: null,
        label: 'TBA · 2027 CFP not published yet',
      },
    ],
    tags: ['Security', 'Applied Security'],
    url: 'https://www.acsac.org/',
  },
  {
    name: 'ESORICS 2027',
    fullName: 'European Symposium on Research in Computer Security',
    deadlines: [
      {
        date: null,
        label: 'TBA · 2027 CFP not published yet',
      },
    ],
    tags: ['Security', 'Computer Security'],
    url: 'https://conf.laas.fr/esorics/',
  },
  {
    name: 'CRYPTO 2027',
    fullName: 'International Cryptology Conference',
    deadlines: [
      {
        date: '2027-02-12T11:59:59Z',
        label: '~ mid-February 2027 · estimated deadline',
      },
    ],
    tags: ['Security', 'Cryptography'],
    url: 'https://iacr.org/meetings/',
  },
  {
    name: 'USENIX Security 2027',
    fullName: 'USENIX Security Symposium',
    deadlines: [
      {
        // Aug 25, 2026 23:59 AoE = Aug 26, 2026 11:59 UTC
        date: '2026-08-26T11:59:59Z',
        label: 'Cycle 1 full paper submission · Aug 25, 2026 AoE',
      },
      {
        // Jan 26, 2027 23:59 AoE = Jan 27, 2027 11:59 UTC
        date: '2027-01-27T11:59:59Z',
        label: 'Cycle 2 full paper submission · Jan 26, 2027 AoE',
      },
    ],
    tags: ['Security', 'Systems Security'],
    url: 'https://www.usenix.org/conferences/upcoming',
  },
  {
    name: 'MobiCom 2027',
    fullName: 'ACM International Conference on Mobile Computing and Networking',
    deadlines: [
      {
        date: '2026-09-03T11:59:59Z',
        label: '~ Aug–Oct 2026 · estimated Summer Cycle deadline',
      },
      {
        date: '2027-03-15T11:59:59Z',
        label: '~ March–April 2027 · estimated Winter Cycle deadline',
      },
    ],
    tags: ['Security-Adjacent', 'Mobile Computing', 'Networking'],
    url: 'https://www.sigmobile.org/grav/events/conferences/mobicom',
  },
  {
    name: 'RTSS 2027',
    fullName: 'IEEE Real-Time Systems Symposium',
    deadlines: [
      {
        date: '2027-05-15T11:59:59Z',
        label: '~ May 2027 · estimated deadline',
      },
    ],
    tags: ['Security-Adjacent', 'Real-Time Systems'],
    url: 'https://2027.rtss.org/',
  },
];

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

export default function SecurityContent() {
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
        {securityConferences.map((conference) => (
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

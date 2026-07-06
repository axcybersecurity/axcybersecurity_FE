'use client';

import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';

type Conference = {
  name: string;
  deadline: string | null;
  deadlineLabel: string;
  tags: string[];
  url: string;
};

const aiConferences: Conference[] = [
  // 기존 사진의 AI 분류
  {
    name: 'EACL 2027',
    deadline: '2026-08-04T11:59:59Z',
    deadlineLabel: 'ARR submission deadline · Aug 3, 2026 AoE',
    tags: ['AI', 'NLP'],
    url: 'https://2027.eacl.org/calls/papers/',
  },
  {
    name: 'AAMAS 2027',
    deadline: '2026-10-09T11:59:00Z',
    deadlineLabel: 'Submission deadline · Oct 9, 2026 11:59 UTC',
    tags: ['AI', 'Multi-agent'],
    url: 'https://warwick.ac.uk/fac/sci/dcs/aamas2027/',
  },
  {
    name: 'IUI 2027',
    deadline: '2026-08-21T11:59:59Z',
    deadlineLabel: 'Full paper deadline · Aug 20, 2026 AoE',
    tags: ['AI', 'HCI'],
    url: 'https://iui.acm.org/2027/',
  },
  {
    name: 'CogSci 2027',
    deadline: null,
    deadlineLabel: 'TBA · CFP not published yet',
    tags: ['AI', 'Cognitive Science'],
    url: 'https://cognitivesciencesociety.org/',
  },
  {
    name: 'NAACL/HLT 2027',
    deadline: null,
    deadlineLabel: 'TBA · CFP not published yet',
    tags: ['AI', 'NLP'],
    url: 'https://naacl.org/conferences/index.html',
  },
  {
    name: 'CVPR 2027',
    deadline: '2027-03-15T11:59:59Z',
    deadlineLabel: '~ March 2027 · estimated paper deadline',
    tags: ['AI', 'Computer Vision', 'Spotlight'],
    url: 'https://cvpr.thecvf.com/',
  },
  {
    name: 'NeurIPS 2027',
    deadline: '2027-05-15T11:59:59Z',
    deadlineLabel: '~ May 2027 · estimated paper deadline',
    tags: ['AI', 'Machine Learning', 'Spotlight'],
    url: 'https://neurips.cc/Conferences/FutureMeetings',
  },
  {
    name: 'ECCV',
    deadline: null,
    deadlineLabel: 'TBA · biannual conference, next CFP not published yet',
    tags: ['AI', 'Computer Vision'],
    url: 'https://eccv.ecva.net/',
  },

  // 추가 사진 1: AI / ML & AI Security
  {
    name: 'AAAI 2028',
    deadline: '2027-07-15T11:59:59Z',
    deadlineLabel: '~ July 2027 · estimated deadline for AAAI 2028',
    tags: ['AI', 'Artificial Intelligence'],
    url: 'https://aaai.org/conference/aaai/',
  },
  {
    name: 'CVPR 2028',
    deadline: '2027-08-15T11:59:59Z',
    deadlineLabel: '~ June–August 2027 · estimated deadline for CVPR 2028',
    tags: ['AI', 'Computer Vision'],
    url: 'https://www.thecvf.com/?page_id=100',
  },
  {
    name: 'NeurIPS 2027',
    deadline: '2027-05-15T11:59:59Z',
    deadlineLabel: '~ May 2027 · estimated deadline for NeurIPS 2027',
    tags: ['AI', 'Machine Learning'],
    url: 'https://neurips.cc/Conferences/FutureMeetings',
  },
  {
    name: 'ICCV 2027',
    deadline: '2027-03-15T11:59:59Z',
    deadlineLabel: '~ March 2027 · estimated deadline for ICCV 2027',
    tags: ['AI', 'Computer Vision'],
    url: 'https://www.thecvf.com/',
  },
  {
    name: 'ICML 2027',
    deadline: '2027-01-26T11:59:59Z',
    deadlineLabel: '~ January–February 2027 · estimated deadline for ICML 2027',
    tags: ['AI', 'Machine Learning'],
    url: 'https://icml.cc/Conferences/FutureMeetings',
  },
  {
    name: 'ICCV 2027 Spotlight',
    deadline: '2027-03-15T11:59:59Z',
    deadlineLabel: '~ March 2027 · estimated deadline for ICCV 2027',
    tags: ['AI', 'Computer Vision', 'Spotlight'],
    url: 'https://www.thecvf.com/',
  },

  // 추가 사진 2: AI
  {
    name: 'IJCAI 2027',
    deadline: '2027-01-15T11:59:59Z',
    deadlineLabel: '~ mid-January 2027 · estimated deadline',
    tags: ['AI'],
    url: 'https://www.ijcai.org/future_conferences',
  },
  {
    name: 'COLT 2027',
    deadline: '2027-02-05T11:59:59Z',
    deadlineLabel: '~ early February 2027 · estimated deadline',
    tags: ['AI', 'Learning Theory'],
    url: 'https://www.learningtheory.org/',
  },
  {
    name: 'UAI 2027',
    deadline: '2027-02-25T11:59:59Z',
    deadlineLabel: '~ late February 2027 · estimated deadline',
    tags: ['AI', 'Uncertainty'],
    url: 'https://www.auai.org/',
  },
  {
    name: 'EMNLP 2027',
    deadline: '2027-05-15T11:59:59Z',
    deadlineLabel: '~ mid-May 2027 · estimated ARR cutoff',
    tags: ['AI', 'NLP'],
    url: 'https://2026.emnlp.org/',
  },
  {
    name: 'KR 2027',
    deadline: '2027-02-15T11:59:59Z',
    deadlineLabel: '~ mid-February 2027 · estimated deadline',
    tags: ['AI', 'Knowledge Representation'],
    url: 'https://kr.org/',
  },

  // 추가 사진 2: AI-Adjacent
  {
    name: 'CIKM 2027',
    deadline: '2027-05-25T11:59:59Z',
    deadlineLabel: '~ mid/late May 2027 · estimated deadline',
    tags: ['AI-Adjacent', 'Data Mining', 'Information Retrieval'],
    url: 'https://www.cikmconference.org/',
  },
  {
    name: 'WSDM 2027',
    deadline: '2026-08-18T11:59:59Z',
    deadlineLabel: '~ mid-August 2026 · official/expected WSDM 2027 paper deadline',
    tags: ['AI-Adjacent', 'Web Search', 'Data Mining'],
    url: 'https://www.wsdm-conference.org/2027/',
  },
  {
    name: 'ICDM 2027',
    deadline: '2027-06-05T11:59:59Z',
    deadlineLabel: '~ early June 2027 · estimated deadline',
    tags: ['AI-Adjacent', 'Data Mining'],
    url: 'https://www.computer.org/csdl/proceedings/icdm',
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

export default function AIContent() {
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
        {aiConferences.map((conference) => (
          <article key={`${conference.name}-${conference.deadlineLabel}`} style={styles.item}>
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

              <div style={styles.tags}>
                {conference.tags.map((tag) => (
                  <span key={tag} style={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div style={styles.right}>
              <p style={styles.deadline}>
                <strong>Deadline:</strong> {conference.deadlineLabel}
              </p>

              <p style={styles.countdown}>
                <strong>Countdown:</strong> {getCountdown(conference.deadline)}
              </p>
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
    margin: '0 0 12px',
    fontSize: '22px',
    fontWeight: 500,
    color: '#111827',
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
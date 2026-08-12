export type ConferenceTab = 'ai' | 'security' | 'blockchain';

export type ConferenceItem = {
  title: string;
  year: string;
  location: string;
  date: string;
  deadline: string;
  note?: string;
  link?: string;
  tags: string[];
};

export const conferenceTabs = [
  {
    label: 'AI 컨퍼런스',
    value: 'ai',
  },
  {
    label: '보안 및 프라이버시 컨퍼런스',
    value: 'security',
  },
  {
    label: '블록체인 컨퍼런스',
    value: 'blockchain',
  },
];

export const conferenceData: Record<ConferenceTab, ConferenceItem[]> = {
  ai: [
    {
      title: 'AISTATS',
      year: '2025',
      location: 'Phuket, Thailand',
      date: 'May 03-05, 2025',
      deadline: 'Fri Oct 11 2024 20:59:59 GMT+0900',
      note: 'Abstract deadline on October 3, 2024.',
      link: 'https://aistats.org',
      tags: ['machine learning'],
    },
    {
      title: 'CVPR',
      year: '2025',
      location: 'Nashville, Tennessee, USA',
      date: 'June 10-17, 2025',
      deadline: 'Fri Nov 15 2024 15:59:59 GMT+0900',
      note: 'Mandatory paper registration deadline on November 07, 2024.',
      link: 'https://cvpr.thecvf.com',
      tags: ['computer vision'],
    },
    {
      title: 'ICLR',
      year: '2025',
      location: 'Singapore',
      date: 'Apr 24-28, 2025',
      deadline: 'Wed Oct 02 2024 20:59:59 GMT+0900',
      note: 'Mandatory abstract deadline on September 27, 2024.',
      link: 'https://iclr.cc',
      tags: [
        'machine learning',
        'automated planning',
        'robotics',
        'computer vision',
        'natural language proc',
      ],
    },
  ],

  security: [
    {
      title: 'IEEE S&P',
      year: '2025',
      location: 'San Francisco, USA',
      date: 'May 12-15, 2025',
      deadline: 'Thu Jun 06 2024 20:59:59 GMT+0900',
      note: 'Top-tier conference in security and privacy.',
      link: 'https://www.ieee-security.org',
      tags: ['security', 'privacy'],
    },
    {
      title: 'USENIX Security',
      year: '2025',
      location: 'Seattle, USA',
      date: 'August 2025',
      deadline: 'Wed Jan 22 2025 20:59:59 GMT+0900',
      note: 'Research conference on systems security and privacy.',
      link: 'https://www.usenix.org',
      tags: ['system security', 'network security', 'privacy'],
    },
    {
      title: 'ACM CCS',
      year: '2025',
      location: 'Taipei, Taiwan',
      date: 'October 2025',
      deadline: 'Mon Jan 13 2025 20:59:59 GMT+0900',
      note: 'ACM Conference on Computer and Communications Security.',
      link: 'https://www.sigsac.org/ccs.html',
      tags: ['security', 'cryptography', 'privacy'],
    },
  ],

  blockchain: [
    {
      title: 'FC',
      year: '2025',
      location: 'Okinawa, Japan',
      date: 'April 2025',
      deadline: 'Fri Sep 13 2024 20:59:59 GMT+0900',
      note: 'Financial Cryptography and Data Security.',
      link: 'https://fc.net',
      tags: ['blockchain', 'cryptography', 'finance'],
    },
    {
      title: 'IEEE ICBC',
      year: '2025',
      location: 'Pisa, Italy',
      date: 'June 2025',
      deadline: 'Mon Dec 02 2024 20:59:59 GMT+0900',
      note: 'IEEE International Conference on Blockchain and Cryptocurrency.',
      link: 'https://icbc2025.ieee-icbc.org',
      tags: ['blockchain', 'cryptocurrency', 'distributed systems'],
    },
  ],
};
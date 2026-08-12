'use client';

import { Fragment, useEffect, useState } from 'react';

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

const aiConferences: Conference[] = [] = [
  // 기존 사진의 AI 분류
  {
    name: 'EACL 2027',
    fullName: 'Conference of the European Chapter of the Association for Computational Linguistics',
    deadlines: [{
      date: '2026-08-04T11:59:59Z',
      label: 'ARR submission deadline · Aug 3, 2026 AoE',
    }],
    tags: ['AI', 'NLP'],
    url: 'https://2027.eacl.org/calls/papers/',
  },
  {
    name: 'AAMAS 2027',
    fullName: 'International Joint Conference on Autonomous Agents and Multi-agent Systems',
    deadlines: [{
      date: '2026-10-09T11:59:00Z',
      label: 'Submission deadline · Oct 9, 2026 11:59 UTC',
    }],
    tags: ['AI', 'Multi-agent'],
    url: 'https://warwick.ac.uk/fac/sci/dcs/aamas2027/',
  },
  {
    name: 'IUI 2027',
    fullName: 'ACM International Conference on Intelligent User Interfaces',
    deadlines: [{
      date: '2026-08-21T11:59:59Z',
      label: 'Full paper deadline · Aug 20, 2026 AoE',
    }],
    tags: ['AI', 'HCI'],
    url: 'https://iui.acm.org/2027/',
  },
  {
    name: 'CogSci 2027',
    fullName: 'Annual Meeting of the Cognitive Science Society',
    deadlines: [{
      date: null,
      label: 'TBA · CFP not published yet',
    }],
    tags: ['AI', 'Cognitive Science'],
    url: 'https://cognitivesciencesociety.org/',
  },
  {
    name: 'NAACL/HLT 2027',
    fullName: 'Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies',
    deadlines: [{
      date: null,
      label: 'TBA · CFP not published yet',
    }],
    tags: ['AI', 'NLP'],
    url: 'https://naacl.org/conferences/index.html',
  },
  {
    name: 'CVPR 2027',
    fullName: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    deadlines: [{
      date: '2027-03-15T11:59:59Z',
      label: '~ March 2027 · estimated paper deadline',
    }],
    tags: ['AI', 'Computer Vision', 'Spotlight'],
    url: 'https://cvpr.thecvf.com/',
  },
  {
    name: 'NeurIPS 2027',
    fullName: 'Conference on Neural Information Processing Systems',
    deadlines: [{
      date: '2027-05-15T11:59:59Z',
      label: '~ May 2027 · estimated paper deadline',
    }],
    tags: ['AI', 'Machine Learning', 'Spotlight'],
    url: 'https://neurips.cc/Conferences/FutureMeetings',
  },
  {
    name: 'ECCV',
    fullName: 'European Conference on Computer Vision',
    deadlines: [{
      date: null,
      label: 'TBA · biannual conference, next CFP not published yet',
    }],
    tags: ['AI', 'Computer Vision'],
    url: 'https://eccv.ecva.net/',
  },

  // 추가 사진 1: AI / ML & AI Security
  {
    name: 'AAAI 2028',
    fullName: 'AAAI Conference on Artificial Intelligence',
    deadlines: [{
      date: '2027-07-15T11:59:59Z',
      label: '~ July 2027 · estimated deadline for AAAI 2028',
    }],
    tags: ['AI', 'Artificial Intelligence'],
    url: 'https://aaai.org/conference/aaai/',
  },
  {
    name: 'CVPR 2028',
    fullName: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    deadlines: [{
      date: '2027-08-15T11:59:59Z',
      label: '~ June–August 2027 · estimated deadline for CVPR 2028',
    }],
    tags: ['AI', 'Computer Vision'],
    url: 'https://www.thecvf.com/?page_id=100',
  },
  {
    name: 'NeurIPS 2027',
    fullName: 'Conference on Neural Information Processing Systems',
    deadlines: [{
      date: '2027-05-15T11:59:59Z',
      label: '~ May 2027 · estimated deadline for NeurIPS 2027',
    }],
    tags: ['AI', 'Machine Learning'],
    url: 'https://neurips.cc/Conferences/FutureMeetings',
  },
  {
    name: 'ICCV 2027',
    fullName: 'IEEE/CVF International Conference on Computer Vision',
    deadlines: [{
      date: '2027-03-15T11:59:59Z',
      label: '~ March 2027 · estimated deadline for ICCV 2027',
    }],
    tags: ['AI', 'Computer Vision'],
    url: 'https://www.thecvf.com/',
  },
  {
    name: 'ICML 2027',
    fullName: 'International Conference on Machine Learning',
    deadlines: [{
      date: '2027-01-26T11:59:59Z',
      label: '~ January–February 2027 · estimated deadline for ICML 2027',
    }],
    tags: ['AI', 'Machine Learning'],
    url: 'https://icml.cc/Conferences/FutureMeetings',
  },
  {
    name: 'ICCV 2027 Spotlight',
    fullName: 'IEEE/CVF International Conference on Computer Vision, Spotlight Presentation',
    deadlines: [{
      date: '2027-03-15T11:59:59Z',
      label: '~ March 2027 · estimated deadline for ICCV 2027',
    }],
    tags: ['AI', 'Computer Vision', 'Spotlight'],
    url: 'https://www.thecvf.com/',
  },

  // 추가 사진 2: AI
  {
    name: 'IJCAI 2027',
    fullName: 'International Joint Conference on Artificial Intelligence',
    deadlines: [{
      date: '2027-01-15T11:59:59Z',
      label: '~ mid-January 2027 · estimated deadline',
    }],
    tags: ['AI'],
    url: 'https://www.ijcai.org/future_conferences',
  },
  {
    name: 'COLT 2027',
    fullName: 'Conference on Learning Theory',
    deadlines: [{
      date: '2027-02-05T11:59:59Z',
      label: '~ early February 2027 · estimated deadline',
    }],
    tags: ['AI', 'Learning Theory'],
    url: 'https://www.learningtheory.org/',
  },
  {
    name: 'UAI 2027',
    fullName: 'Conference on Uncertainty in Artificial Intelligence',
    deadlines: [{
      date: '2027-02-25T11:59:59Z',
      label: '~ late February 2027 · estimated deadline',
    }],
    tags: ['AI', 'Uncertainty'],
    url: 'https://www.auai.org/',
  },
  {
    name: 'EMNLP 2027',
    fullName: 'Conference on Empirical Methods in Natural Language Processing',
    deadlines: [{
      date: '2027-05-15T11:59:59Z',
      label: '~ mid-May 2027 · estimated ARR cutoff',
    }],
    tags: ['AI', 'NLP'],
    url: 'https://2026.emnlp.org/',
  },
  {
    name: 'KR 2027',
    fullName: 'International Conference on Principles of Knowledge Representation and Reasoning',
    deadlines: [{
      date: '2027-02-15T11:59:59Z',
      label: '~ mid-February 2027 · estimated deadline',
    }],
    tags: ['AI', 'Knowledge Representation'],
    url: 'https://kr.org/',
  },

  // 추가 사진 2: AI-Adjacent
  {
    name: 'CIKM 2027',
    fullName: 'ACM International Conference on Information and Knowledge Management',
    deadlines: [{
      date: '2027-05-25T11:59:59Z',
      label: '~ mid/late May 2027 · estimated deadline',
    }],
    tags: ['AI-Adjacent', 'Data Mining', 'Information Retrieval'],
    url: 'https://www.cikmconference.org/',
  },
  {
    name: 'WSDM 2027',
    fullName: 'ACM International Conference on Web Search and Data Mining',
    deadlines: [{
      date: '2026-08-18T11:59:59Z',
      label: '~ mid-August 2026 · official/expected WSDM 2027 paper deadline',
    }],
    tags: ['AI-Adjacent', 'Web Search', 'Data Mining'],
    url: 'https://www.wsdm-conference.org/2027/',
  },
  {
    name: 'ICDM 2027',
    fullName: 'IEEE International Conference on Data Mining',
    deadlines: [{
      date: '2027-06-05T11:59:59Z',
      label: '~ early June 2027 · estimated deadline',
    }],
    tags: ['AI-Adjacent', 'Data Mining'],
    url: 'https://www.computer.org/csdl/proceedings/icdm',
  },
];

const securityConferences: Conference[] = [] = [
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

const blockchainConferences: Conference[] = [] = [
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
];

const conferenceGroups = [
  aiConferences,
  securityConferences,
  blockchainConferences,
];

const conferenceGroupLabels = ['AI Conference', 'Security Conference'];

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

export default function TopContent() {
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
        {conferenceGroups.map((conferences, groupIndex) => (
          <Fragment key={groupIndex}>
            {conferenceGroupLabels[groupIndex] && (
              <div className="conference-groupDivider">
                <span>{conferenceGroupLabels[groupIndex]}</span>
              </div>
            )}

            {conferences.map((conference) => (
              <article
                key={`${conference.name}-${conference.deadlines[0]?.label}`}
                className="conference-item"
              >
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
          </Fragment>
        ))}
      </div>
    </section>
  );
}

'use client';

import { useEffect, useState } from 'react';

type ConferenceDeadline = {
  date: string | null;
  label: string;
};

type Conference = {
  name: string;
  fullName: string;
  deadline: string | null;
  deadlineLabel: string;
  tags: string[];
  url: string;
};

const aiConferences: Conference[] = [
  // 기존 사진의 AI 분류
  {
    name: 'EACL 2027',
    fullName: 'Conference of the European Chapter of the Association for Computational Linguistics',
    deadline: '2026-08-04T11:59:59Z',
    deadlineLabel: 'ARR submission deadline · Aug 3, 2026 AoE',
    tags: ['AI', 'NLP'],
    url: 'https://2027.eacl.org/calls/papers/',
  },
  {
    name: 'AAMAS 2027',
    fullName: 'International Joint Conference on Autonomous Agents and Multi-agent Systems',
    deadline: '2026-10-09T11:59:00Z',
    deadlineLabel: 'Submission deadline · Oct 9, 2026 11:59 UTC',
    tags: ['AI', 'Multi-agent'],
    url: 'https://warwick.ac.uk/fac/sci/dcs/aamas2027/',
  },
  {
    name: 'IUI 2027',
    fullName: 'ACM International Conference on Intelligent User Interfaces',
    deadline: '2026-08-21T11:59:59Z',
    deadlineLabel: 'Full paper deadline · Aug 20, 2026 AoE',
    tags: ['AI', 'HCI'],
    url: 'https://iui.acm.org/2027/',
  },
  {
    name: 'CogSci 2027',
    fullName: 'Annual Meeting of the Cognitive Science Society',
    deadline: null,
    deadlineLabel: 'TBA · CFP not published yet',
    tags: ['AI', 'Cognitive Science'],
    url: 'https://cognitivesciencesociety.org/',
  },
  {
    name: 'NAACL/HLT 2027',
    fullName: 'Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies',
    deadline: null,
    deadlineLabel: 'TBA · CFP not published yet',
    tags: ['AI', 'NLP'],
    url: 'https://naacl.org/conferences/index.html',
  },
  {
    name: 'CVPR 2027',
    fullName: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    deadline: '2027-03-15T11:59:59Z',
    deadlineLabel: '~ March 2027 · estimated paper deadline',
    tags: ['AI', 'Computer Vision', 'Spotlight'],
    url: 'https://cvpr.thecvf.com/',
  },
  {
    name: 'NeurIPS 2027',
    fullName: 'Conference on Neural Information Processing Systems',
    deadline: '2027-05-15T11:59:59Z',
    deadlineLabel: '~ May 2027 · estimated paper deadline',
    tags: ['AI', 'Machine Learning', 'Spotlight'],
    url: 'https://neurips.cc/Conferences/FutureMeetings',
  },
  {
    name: 'ECCV',
    fullName: 'European Conference on Computer Vision',
    deadline: null,
    deadlineLabel: 'TBA · biannual conference, next CFP not published yet',
    tags: ['AI', 'Computer Vision'],
    url: 'https://eccv.ecva.net/',
  },

  // 추가 사진 1: AI / ML & AI Security
  {
    name: 'AAAI 2028',
    fullName: 'AAAI Conference on Artificial Intelligence',
    deadline: '2027-07-15T11:59:59Z',
    deadlineLabel: '~ July 2027 · estimated deadline for AAAI 2028',
    tags: ['AI', 'Artificial Intelligence'],
    url: 'https://aaai.org/conference/aaai/',
  },
  {
    name: 'CVPR 2028',
    fullName: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    deadline: '2027-08-15T11:59:59Z',
    deadlineLabel: '~ June–August 2027 · estimated deadline for CVPR 2028',
    tags: ['AI', 'Computer Vision'],
    url: 'https://www.thecvf.com/?page_id=100',
  },
  {
    name: 'NeurIPS 2027',
    fullName: 'Conference on Neural Information Processing Systems',
    deadline: '2027-05-15T11:59:59Z',
    deadlineLabel: '~ May 2027 · estimated deadline for NeurIPS 2027',
    tags: ['AI', 'Machine Learning'],
    url: 'https://neurips.cc/Conferences/FutureMeetings',
  },
  {
    name: 'ICCV 2027',
    fullName: 'IEEE/CVF International Conference on Computer Vision',
    deadline: '2027-03-15T11:59:59Z',
    deadlineLabel: '~ March 2027 · estimated deadline for ICCV 2027',
    tags: ['AI', 'Computer Vision'],
    url: 'https://www.thecvf.com/',
  },
  {
    name: 'ICML 2027',
    fullName: 'International Conference on Machine Learning',
    deadline: '2027-01-26T11:59:59Z',
    deadlineLabel: '~ January–February 2027 · estimated deadline for ICML 2027',
    tags: ['AI', 'Machine Learning'],
    url: 'https://icml.cc/Conferences/FutureMeetings',
  },
  {
    name: 'ICCV 2027 Spotlight',
    fullName: 'IEEE/CVF International Conference on Computer Vision, Spotlight Presentation',
    deadline: '2027-03-15T11:59:59Z',
    deadlineLabel: '~ March 2027 · estimated deadline for ICCV 2027',
    tags: ['AI', 'Computer Vision', 'Spotlight'],
    url: 'https://www.thecvf.com/',
  },

  // 추가 사진 2: AI
  {
    name: 'IJCAI 2027',
    fullName: 'International Joint Conference on Artificial Intelligence',
    deadline: '2027-01-15T11:59:59Z',
    deadlineLabel: '~ mid-January 2027 · estimated deadline',
    tags: ['AI'],
    url: 'https://www.ijcai.org/future_conferences',
  },
  {
    name: 'COLT 2027',
    fullName: 'Conference on Learning Theory',
    deadline: '2027-02-05T11:59:59Z',
    deadlineLabel: '~ early February 2027 · estimated deadline',
    tags: ['AI', 'Learning Theory'],
    url: 'https://www.learningtheory.org/',
  },
  {
    name: 'UAI 2027',
    fullName: 'Conference on Uncertainty in Artificial Intelligence',
    deadline: '2027-02-25T11:59:59Z',
    deadlineLabel: '~ late February 2027 · estimated deadline',
    tags: ['AI', 'Uncertainty'],
    url: 'https://www.auai.org/',
  },
  {
    name: 'EMNLP 2027',
    fullName: 'Conference on Empirical Methods in Natural Language Processing',
    deadline: '2027-05-15T11:59:59Z',
    deadlineLabel: '~ mid-May 2027 · estimated ARR cutoff',
    tags: ['AI', 'NLP'],
    url: 'https://2026.emnlp.org/',
  },
  {
    name: 'KR 2027',
    fullName: 'International Conference on Principles of Knowledge Representation and Reasoning',
    deadline: '2027-02-15T11:59:59Z',
    deadlineLabel: '~ mid-February 2027 · estimated deadline',
    tags: ['AI', 'Knowledge Representation'],
    url: 'https://kr.org/',
  },

  // 추가 사진 2: AI-Adjacent
  {
    name: 'CIKM 2027',
    fullName: 'ACM International Conference on Information and Knowledge Management',
    deadline: '2027-05-25T11:59:59Z',
    deadlineLabel: '~ mid/late May 2027 · estimated deadline',
    tags: ['AI-Adjacent', 'Data Mining', 'Information Retrieval'],
    url: 'https://www.cikmconference.org/',
  },
  {
    name: 'WSDM 2027',
    fullName: 'ACM International Conference on Web Search and Data Mining',
    deadline: '2026-08-18T11:59:59Z',
    deadlineLabel: '~ mid-August 2026 · official/expected WSDM 2027 paper deadline',
    tags: ['AI-Adjacent', 'Web Search', 'Data Mining'],
    url: 'https://www.wsdm-conference.org/2027/',
  },
  {
    name: 'ICDM 2027',
    fullName: 'IEEE International Conference on Data Mining',
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
    <section className="conference-container">
      <div className="conference-list">
        {aiConferences.map((conference) => (
          <article key={`${conference.name}-${conference.deadlineLabel}`} className="conference-item">
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

              <div className="conference-tags">
                {conference.tags.map((tag) => (
                  <span key={tag} className="conference-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="conference-right">
              <p className="conference-deadline">
                <strong>Deadline:</strong> {conference.deadlineLabel}
              </p>

              <p className="conference-countdown">
                <strong>Countdown:</strong> {getCountdown(conference.deadline)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

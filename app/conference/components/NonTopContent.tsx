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

const nonTopConferences: Conference[] = [
  {
    "name": "AAAI 2027",
    "fullName": "AAAI Conference on Artificial Intelligence",
    "deadlines": [
      {
        "date": "2026-07-29T11:59:59Z",
        "label": "Jul 28, 2026 AoE"
      }
    ],
    "tags": [
      "Artificial Intelligence",
      "IF 4"
    ],
    "url": "https://aaai.org/conference/aaai/aaai-27/"
  },
  {
    "name": "CCS 2027",
    "fullName": "ACM Conference on Computer and Communications Security",
    "deadlines": [
      {
        "date": null,
        "label": "~ January 2027 · First Review Cycle estimated deadline"
      },
      {
        "date": null,
        "label": "~ April 2027 · Second Review Cycle estimated deadline"
      }
    ],
    "tags": [
      "Network and System Security",
      "IF 4"
    ],
    "url": "https://www.sigsac.org/ccs/CCS2026/"
  },
  {
    "name": "CHI 2027",
    "fullName": "ACM Conference on Human Factors in Computing Systems",
    "deadlines": [
      {
        "date": "2026-09-11T11:59:59Z",
        "label": "Sep 10, 2026 AoE"
      }
    ],
    "tags": [
      "Computer-Human Interaction",
      "IF 4"
    ],
    "url": "https://chi2027.acm.org/"
  },
  {
    "name": "MobiCom 2027",
    "fullName": "ACM International Conference on Mobile Computing and Networking",
    "deadlines": [
      {
        "date": null,
        "label": "~ September 2027 · Summer Deadlines estimated deadline"
      },
      {
        "date": null,
        "label": "~ March 2027 · Winter Deadlines estimated deadline"
      }
    ],
    "tags": [
      "Network System",
      "IF 4"
    ],
    "url": "https://sigmobile.org/mobicom/2026/"
  },
  {
    "name": "MM 2027",
    "fullName": "ACM Multimedia Conference",
    "deadlines": [
      {
        "date": null,
        "label": "~ April 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Graphics",
      "IF 4"
    ],
    "url": "https://2026.acmmm.org/"
  },
  {
    "name": "SIGCOMM 2027",
    "fullName": "ACM SIGCOMM Conference",
    "deadlines": [
      {
        "date": null,
        "label": "~ February 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Network System",
      "IF 4"
    ],
    "url": "https://conferences.sigcomm.org/sigcomm/2026/"
  },
  {
    "name": "SIGIR 2027",
    "fullName": "ACM SIGIR Conference on Information Retrieval",
    "deadlines": [
      {
        "date": null,
        "label": "~ January 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Database/Data Mining/Information Retrieval",
      "IF 4"
    ],
    "url": "https://sigir2026.org/en-AU"
  },
  {
    "name": "KDD 2027",
    "fullName": "ACM SIGKDD Conference on Knowledge Discovery and Data Mining",
    "deadlines": [
      {
        "date": "2026-07-27T11:59:59Z",
        "label": "1st round of 2 total rounds · Jul 26, 2026 AoE"
      }
    ],
    "tags": [
      "Database/Data Mining/Information Retrieval",
      "IF 4"
    ],
    "url": "https://kdd2027.kdd.org/"
  },
  {
    "name": "FSE 2027",
    "fullName": "ACM SIGSOFT Symposium on the Foundations of Software Engineering",
    "deadlines": [
      {
        "date": "2026-10-03T11:59:59Z",
        "label": "Oct 2, 2026 AoE"
      }
    ],
    "tags": [
      "Software Engineering/Operating System/Programming Language Design",
      "IF 4"
    ],
    "url": "https://conf.researchr.org/home/fse-2027"
  },
  {
    "name": "SOSP 2027",
    "fullName": "ACM Symposium on Operating Systems Principles",
    "deadlines": [
      {
        "date": null,
        "label": "~ April 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Software Engineering/Operating System/Programming Language Design",
      "IF 4"
    ],
    "url": "https://sigops.org/s/conferences/sosp/2026/index.html"
  },
  {
    "name": "STOC 2027",
    "fullName": "ACM Symposium on Theory of Computing",
    "deadlines": [
      {
        "date": null,
        "label": "~ November 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Computing Theory",
      "IF 4"
    ],
    "url": "https://acm-stoc.org/stoc2026/"
  },
  {
    "name": "ACL 2027",
    "fullName": "Annual Meeting of the Association for Computational Linguistics",
    "deadlines": [
      {
        "date": null,
        "label": "~ January 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Artificial Intelligence",
      "IF 4"
    ],
    "url": "https://2026.aclweb.org/"
  },
  {
    "name": "ASPLOS 2027",
    "fullName": "Architectural Support for Programming Languages and Operating Systems",
    "deadlines": [
      {
        "date": "2026-04-16T11:59:59Z",
        "label": "April Cycle Submission Deadline · Apr 15, 2026 AoE (passed)"
      },
      {
        "date": "2026-09-10T11:59:59Z",
        "label": "September Cycle Submission Deadline · Sep 9, 2026 AoE"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 4"
    ],
    "url": "https://www.asplos-conference.org/asplos2027/cfp/"
  },
  {
    "name": "CVPR 2027",
    "fullName": "Conference on Computer Vision and Pattern Recognition",
    "deadlines": [
      {
        "date": null,
        "label": "~ November 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Artificial Intelligence",
      "IF 4"
    ],
    "url": "https://cvpr.thecvf.com/Conferences/2026"
  },
  {
    "name": "NIPS 2027",
    "fullName": "Conference on Neural Information Processing Systems",
    "deadlines": [
      {
        "date": null,
        "label": "~ May 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Artificial Intelligence",
      "IF 4"
    ],
    "url": "https://neurips.cc/Conferences/2026"
  },
  {
    "name": "OOPSLA 2027",
    "fullName": "Conference on Object-Oriented Programming, System, Languages, and Applications",
    "deadlines": [
      {
        "date": null,
        "label": "~ October 2027 · Submission Deadline Round 1 estimated deadline"
      },
      {
        "date": null,
        "label": "~ March 2027 · Submission Deadline Round 2 estimated deadline"
      }
    ],
    "tags": [
      "Software Engineering/Operating System/Programming Language Design",
      "IF 4"
    ],
    "url": "https://conf.researchr.org/track/splash-2026/oopsla-2026"
  },
  {
    "name": "INFOCOM 2027",
    "fullName": "IEEE Conference on Computer Communications",
    "deadlines": [
      {
        "date": "2026-08-01T11:59:59Z",
        "label": "Jul 31, 2026 AoE"
      }
    ],
    "tags": [
      "Network System",
      "IF 4"
    ],
    "url": "https://infocom2027.ieee-infocom.org/"
  },
  {
    "name": "HPCA 2027",
    "fullName": "IEEE International Symposium on High-Performance Computer Architecture",
    "deadlines": [
      {
        "date": "2026-08-01T11:59:59Z",
        "label": "Jul 31, 2026 AoE"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 4"
    ],
    "url": "https://conf.researchr.org/home/hpca-2027"
  },
  {
    "name": "RTSS 2027",
    "fullName": "IEEE Real-Time Systems Symposium",
    "deadlines": [
      {
        "date": null,
        "label": "~ May 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Interdiscipline/Mixture/Emerging",
      "IF 4"
    ],
    "url": "http://2026.rtss.org/"
  },
  {
    "name": "FOCS 2027",
    "fullName": "IEEE Symposium on Foundations of Computer Science",
    "deadlines": [
      {
        "date": null,
        "label": "~ April 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Computing Theory",
      "IF 4"
    ],
    "url": "https://sanjeevkhanna.org/FOCS2026_CFP.html"
  },
  {
    "name": "S&P 2027",
    "fullName": "IEEE Symposium on Security and Privacy",
    "deadlines": [
      {
        "date": "2026-06-12T11:59:59Z",
        "label": "First Paper submission deadline · Jun 11, 2026 AoE (passed)"
      },
      {
        "date": "2026-11-18T11:59:59Z",
        "label": "Second Paper submission deadline · Nov 17, 2026 AoE"
      }
    ],
    "tags": [
      "Network and System Security",
      "IF 4"
    ],
    "url": "https://sp2027.ieee-security.org/index.html"
  },
  {
    "name": "VIS 2027",
    "fullName": "IEEE Visualization",
    "deadlines": [
      {
        "date": null,
        "label": "~ March 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Graphics",
      "IF 4"
    ],
    "url": "https://ieeevis.org/year/2026/welcome"
  },
  {
    "name": "MICRO 2027",
    "fullName": "IEEE/ACM International Symposium on Microarchitecture",
    "deadlines": [
      {
        "date": null,
        "label": "~ April 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 4"
    ],
    "url": "https://microarch.org/micro59/"
  },
  {
    "name": "SIGGRAPH 2027",
    "fullName": "International Conference on Computer Graphics and Interactive Techniques",
    "deadlines": [
      {
        "date": null,
        "label": "~ January 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Graphics",
      "IF 4"
    ],
    "url": "https://s2026.siggraph.org/"
  },
  {
    "name": "ICCV 2026",
    "fullName": "International Conference on Computer Vision",
    "deadlines": [
      {
        "date": null,
        "label": "~ March 2026 · estimated deadline"
      }
    ],
    "tags": [
      "Artificial Intelligence",
      "IF 4"
    ],
    "url": "https://iccv.thecvf.com/Conferences/2025"
  },
  {
    "name": "CAV 2027",
    "fullName": "International Conference on Computer-Aided Verification",
    "deadlines": [
      {
        "date": null,
        "label": "~ January 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Computing Theory",
      "IF 4"
    ],
    "url": "https://conferences.i-cav.org/2026/"
  },
  {
    "name": "ICML 2027",
    "fullName": "International Conference on Machine Learning",
    "deadlines": [
      {
        "date": null,
        "label": "~ January 2027 · Paper Submissions Open on OpenReview Jan 08 2026 12:00AM UTC-0 estimated deadline"
      }
    ],
    "tags": [
      "Artificial Intelligence",
      "IF 4"
    ],
    "url": "https://icml.cc/Conferences/2026"
  },
  {
    "name": "SIGMOD 2027",
    "fullName": "International Conference on Management of Data",
    "deadlines": [
      {
        "date": "2026-01-18T11:59:00Z",
        "label": "round 1 · Jan 17, 2026 AoE (passed)"
      },
      {
        "date": "2026-04-18T11:59:00Z",
        "label": "round 2 · Apr 17, 2026 AoE (passed)"
      },
      {
        "date": "2026-07-18T11:59:00Z",
        "label": "round 3 · Jul 17, 2026 AoE"
      },
      {
        "date": "2026-10-18T11:59:00Z",
        "label": "round 4 · Oct 17, 2026 AoE"
      }
    ],
    "tags": [
      "Database/Data Mining/Information Retrieval",
      "IF 4"
    ],
    "url": "https://2027.sigmod.org/"
  },
  {
    "name": "ICSE 2028",
    "fullName": "International Conference on Software Engineering",
    "deadlines": [
      {
        "date": null,
        "label": "~ June 2028 · Single Submission Cycle Deadline estimated deadline"
      }
    ],
    "tags": [
      "Software Engineering/Operating System/Programming Language Design",
      "IF 4"
    ],
    "url": "https://conf.researchr.org/home/icse-2027"
  },
  {
    "name": "EUROCRYPT 2027",
    "fullName": "International Conference on the Theory and Applications of Cryptographic Techniques",
    "deadlines": [
      {
        "date": "2026-09-18T11:59:59Z",
        "label": "Sep 17, 2026 AoE"
      }
    ],
    "tags": [
      "Network and System Security",
      "IF 4"
    ],
    "url": "https://eurocrypt.iacr.org/2027/"
  },
  {
    "name": "VLDB/PVLDB 2027",
    "fullName": "International Conference on Very Large Databases",
    "deadlines": [
      {
        "date": "2026-04-02T01:00:00Z",
        "label": "Cycle 1 · Apr 1, 2026 PT (passed)"
      },
      {
        "date": "2026-05-02T01:00:00Z",
        "label": "Cycle 2 · May 1, 2026 PT (passed)"
      },
      {
        "date": "2026-06-02T01:00:00Z",
        "label": "Cycle 3 · Jun 1, 2026 PT (passed)"
      },
      {
        "date": "2026-07-02T01:00:00Z",
        "label": "Cycle 4 · Jul 1, 2026 PT (passed)"
      },
      {
        "date": "2026-08-02T01:00:00Z",
        "label": "Cycle 5 · Aug 1, 2026 PT"
      },
      {
        "date": "2026-09-02T01:00:00Z",
        "label": "Cycle 6 · Sep 1, 2026 PT"
      },
      {
        "date": "2026-10-02T01:00:00Z",
        "label": "Cycle 7 · Oct 1, 2026 PT"
      },
      {
        "date": "2026-11-02T01:00:00Z",
        "label": "Cycle 8 · Nov 1, 2026 PT"
      },
      {
        "date": "2026-12-02T01:00:00Z",
        "label": "Cycle 9 · Dec 1, 2026 PT"
      },
      {
        "date": "2027-01-02T01:00:00Z",
        "label": "Cycle 10 · Jan 1, 2027 PT"
      },
      {
        "date": "2027-02-02T01:00:00Z",
        "label": "Cycle 11 · Feb 1, 2027 PT"
      },
      {
        "date": "2027-03-02T01:00:00Z",
        "label": "Cycle 12 · Mar 1, 2027 PT"
      }
    ],
    "tags": [
      "Database/Data Mining/Information Retrieval",
      "IF 4"
    ],
    "url": "https://www.vldb.org/2027/"
  },
  {
    "name": "CRYPTO 2027",
    "fullName": "International Cryptology Conference",
    "deadlines": [
      {
        "date": null,
        "label": "~ February 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Network and System Security",
      "IF 4"
    ],
    "url": "https://crypto.iacr.org/2026/"
  },
  {
    "name": "IJCAI 2027",
    "fullName": "International Joint Conference on Artificial Intelligence",
    "deadlines": [
      {
        "date": null,
        "label": "~ January 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Artificial Intelligence",
      "IF 4"
    ],
    "url": "https://2026.ijcai.org/"
  },
  {
    "name": "ISCA 2027",
    "fullName": "International Symposium on Computer Architecture",
    "deadlines": [
      {
        "date": null,
        "label": "~ November 2027 · abstract deadline estimated deadline"
      },
      {
        "date": null,
        "label": "~ November 2027 · full paper deadline estimated deadline"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 4"
    ],
    "url": "https://iscaconf.org/isca2026/"
  },
  {
    "name": "WWW 2027",
    "fullName": "International World Wide web Conference",
    "deadlines": [
      {
        "date": "2026-10-19T11:59:59Z",
        "label": "Oct 18, 2026 AoE"
      }
    ],
    "tags": [
      "Interdiscipline/Mixture/Emerging",
      "IF 4"
    ],
    "url": "https://acmweb2027.org/"
  },
  {
    "name": "PLDI 2027",
    "fullName": "SIGPLAN Conference on Programming Language Design and Implementation",
    "deadlines": [
      {
        "date": null,
        "label": "~ November 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Software Engineering/Operating System/Programming Language Design",
      "IF 4"
    ],
    "url": "https://pldi26.sigplan.org/"
  },
  {
    "name": "POPL 2028",
    "fullName": "Symposium on Principles of Programming Languages",
    "deadlines": [
      {
        "date": null,
        "label": "~ July 2028 · Submission Deadline estimated deadline"
      }
    ],
    "tags": [
      "Software Engineering/Operating System/Programming Language Design",
      "IF 4"
    ],
    "url": "https://popl27.sigplan.org/"
  },
  {
    "name": "NSDI 2027",
    "fullName": "USENIX Symposium on Networked Systems Design and Implementation",
    "deadlines": [
      {
        "date": "2026-04-24T03:59:59Z",
        "label": "Cycle 1 · Apr 23, 2026 UTC-4 (passed)"
      },
      {
        "date": "2026-09-18T03:59:59Z",
        "label": "Cycle 2 · Sep 17, 2026 UTC-4"
      }
    ],
    "tags": [
      "Network System",
      "IF 4"
    ],
    "url": "https://www.usenix.org/conference/nsdi27"
  },
  {
    "name": "OSDI 2027",
    "fullName": "USENIX Symposium on Operating Systems Design and Implementation",
    "deadlines": [
      {
        "date": "2026-12-08T22:59:59Z",
        "label": "Dec 8, 2026 UTC"
      }
    ],
    "tags": [
      "Software Engineering/Operating System/Programming Language Design",
      "IF 4"
    ],
    "url": "https://www.usenix.org/conference/osdi27"
  },
  {
    "name": "CSCW 2027",
    "fullName": "ACM Conference on Computer-Supported Cooperative Work",
    "deadlines": [
      {
        "date": null,
        "label": "~ May 2027 · MAY 2025 SUBMISSION CYCLE estimated deadline"
      }
    ],
    "tags": [
      "Computer-Human Interaction",
      "IF 3"
    ],
    "url": "https://cscw.acm.org/2026/"
  },
  {
    "name": "SenSys 2028",
    "fullName": "ACM Conference on Embedded Networked Sensor Systems",
    "deadlines": [
      {
        "date": null,
        "label": "~ June 2028 · 1st deadline estimated deadline"
      },
      {
        "date": null,
        "label": "2nd deadline · TBA"
      }
    ],
    "tags": [
      "Network System",
      "IF 3"
    ],
    "url": "https://sensys.acm.org/2027/"
  },
  {
    "name": "CIKM 2027",
    "fullName": "ACM Conference on Information and Knowledge Management",
    "deadlines": [
      {
        "date": null,
        "label": "~ May 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Database/Data Mining/Information Retrieval",
      "IF 3"
    ],
    "url": "https://cikm2026.diag.uniroma1.it/"
  },
  {
    "name": "MobiSys 2027",
    "fullName": "ACM International Conference on Mobile Systems, Application and Services",
    "deadlines": [
      {
        "date": null,
        "label": "~ December 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Network System",
      "IF 3"
    ],
    "url": "https://www.sigmobile.org/mobisys/2026/"
  },
  {
    "name": "WSDM 2027",
    "fullName": "ACM International Conference on web Search and Data Mining",
    "deadlines": [
      {
        "date": "2026-08-25T11:59:59Z",
        "label": "Aug 24, 2026 AoE"
      }
    ],
    "tags": [
      "Database/Data Mining/Information Retrieval",
      "IF 3"
    ],
    "url": "https://wsdm-conference.org/2027/"
  },
  {
    "name": "UbiComp 2026",
    "fullName": "ACM International Joint Conference on Pervasive and Ubiquitous Computing",
    "deadlines": [
      {
        "date": "2026-02-02T11:59:59Z",
        "label": "first round · Feb 1, 2026 AoE (passed)"
      },
      {
        "date": "2026-05-02T11:59:59Z",
        "label": "second round · May 1, 2026 AoE (passed)"
      },
      {
        "date": "2026-08-02T11:59:59Z",
        "label": "third round (only for resubmissions after major revisions) · Aug 1, 2026 AoE"
      },
      {
        "date": "2026-11-02T11:59:59Z",
        "label": "fourth round · Nov 1, 2026 AoE"
      }
    ],
    "tags": [
      "Computer-Human Interaction",
      "IF 3"
    ],
    "url": "https://www.ubicomp.org/ubicomp-iswc-2026"
  },
  {
    "name": "MobiHoc 2027",
    "fullName": "ACM International Symposium on Mobile Ad Hoc Networking and Computing",
    "deadlines": [
      {
        "date": null,
        "label": "~ April 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Network System",
      "IF 3"
    ],
    "url": "https://www.sigmobile.org/mobihoc/2026/"
  },
  {
    "name": "SIGMETRICS 2027",
    "fullName": "ACM SIGMETRICS International Conference on Measurement and Modeling of Computer Systems",
    "deadlines": [
      {
        "date": "2026-07-11T11:59:00Z",
        "label": "summer round · Jul 10, 2026 AoE (passed)"
      },
      {
        "date": "2026-10-10T11:59:00Z",
        "label": "fall round · Oct 9, 2026 AoE"
      },
      {
        "date": "2027-01-12T11:59:00Z",
        "label": "winter round · Jan 11, 2027 AoE"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 3"
    ],
    "url": "https://www.sigmetrics.org/sigmetrics2027/"
  },
  {
    "name": "PPoPP 2027",
    "fullName": "ACM SIGPLAN Symposium on Principles and Practice of Parallel Programming",
    "deadlines": [
      {
        "date": "2026-08-04T11:59:59Z",
        "label": "Aug 3, 2026 AoE"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 3"
    ],
    "url": "https://ppopp27.sigplan.org/"
  },
  {
    "name": "SPAA 2027",
    "fullName": "ACM Symposium on Parallelism in Algorithms and Architectures",
    "deadlines": [
      {
        "date": null,
        "label": "~ February 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 3"
    ],
    "url": "https://spaa.acm.org/"
  },
  {
    "name": "PODC 2025",
    "fullName": "ACM Symposium on Principles of Distributed Computing",
    "deadlines": [
      {
        "date": null,
        "label": "~ February 2025 · estimated deadline"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 3"
    ],
    "url": "https://www.podc.org/podc2024"
  },
  {
    "name": "IPSN 2023",
    "fullName": "ACM/IEEE Information Processing in Sensor Networks",
    "deadlines": [
      {
        "date": null,
        "label": "~ October 2023 · estimated deadline"
      }
    ],
    "tags": [
      "Network System",
      "IF 3"
    ],
    "url": "https://ipsn.acm.org/2022/"
  },
  {
    "name": "SC 2027",
    "fullName": "ACM/IEEE International Conference for High Performance Computing, Networking, Storage, and Analysis",
    "deadlines": [
      {
        "date": null,
        "label": "~ April 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 3"
    ],
    "url": "https://sc26.supercomputing.org/"
  },
  {
    "name": "LICS 2027",
    "fullName": "ACM/IEEE Symposium on Logic in Computer Science",
    "deadlines": [
      {
        "date": null,
        "label": "~ January 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Computing Theory",
      "IF 3"
    ],
    "url": "https://lics.siglog.org/lics26/"
  },
  {
    "name": "SODA 2028",
    "fullName": "ACM-SIAM Symposium on Discrete Algorithms",
    "deadlines": [
      {
        "date": null,
        "label": "~ July 2028 · estimated deadline"
      }
    ],
    "tags": [
      "Computing Theory",
      "IF 3"
    ],
    "url": "https://www.siam.org/conferences-events/siam-conferences/soda27/"
  },
  {
    "name": "COLT 2027",
    "fullName": "Annual Conference on Computational Learning Theory",
    "deadlines": [
      {
        "date": null,
        "label": "~ February 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Artificial Intelligence",
      "IF 3"
    ],
    "url": "https://learningtheory.org/colt2026/"
  },
  {
    "name": "UAI 2027",
    "fullName": "Conference on Uncertainty in Artificial Intelligence",
    "deadlines": [
      {
        "date": null,
        "label": "~ February 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Artificial Intelligence",
      "IF 3"
    ],
    "url": "https://www.auai.org/uai2026/"
  },
  {
    "name": "DAC 2027",
    "fullName": "Design Automation Conference",
    "deadlines": [
      {
        "date": null,
        "label": "~ November 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 3"
    ],
    "url": "https://dac.com/2026/call-for-contributions"
  },
  {
    "name": "EMNLP 2027",
    "fullName": "Empirical Methods in Natural Language Processing",
    "deadlines": [
      {
        "date": null,
        "label": "~ May 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Artificial Intelligence",
      "IF 3"
    ],
    "url": "https://2026.emnlp.org/"
  },
  {
    "name": "ICDE 2027",
    "fullName": "IEEE International Conference on Data Engineering",
    "deadlines": [
      {
        "date": "2026-06-12T00:00:00Z",
        "label": "first round · Jun 11, 2026 UTC-7 (passed)"
      },
      {
        "date": "2026-11-12T00:00:00Z",
        "label": "second round · Nov 11, 2026 UTC-7"
      }
    ],
    "tags": [
      "Database/Data Mining/Information Retrieval",
      "IF 3"
    ],
    "url": "https://icde2027.github.io/"
  },
  {
    "name": "ICDM 2027",
    "fullName": "IEEE International Conference on Data Mining",
    "deadlines": [
      {
        "date": null,
        "label": "~ June 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Database/Data Mining/Information Retrieval",
      "IF 3"
    ],
    "url": "http://icdm2026.neu.edu.cn/"
  },
  {
    "name": "ICDCS 2027",
    "fullName": "IEEE International Conference on Distributed Computing Systems",
    "deadlines": [
      {
        "date": null,
        "label": "~ January 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 3"
    ],
    "url": "http://icdcs2026.icdcs.org/"
  },
  {
    "name": "PerCom 2027",
    "fullName": "IEEE International Conference on Pervasive Computing and Communications",
    "deadlines": [
      {
        "date": null,
        "label": "~ October 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Computer-Human Interaction",
      "IF 3"
    ],
    "url": "https://percom.org/"
  },
  {
    "name": "ASE 2027",
    "fullName": "IEEE/ACM International Conference on Automated Software Engineering",
    "deadlines": [
      {
        "date": null,
        "label": "~ March 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Software Engineering/Operating System/Programming Language Design",
      "IF 3"
    ],
    "url": "https://conf.researchr.org/home/ase-2026"
  },
  {
    "name": "ICCAD 2027",
    "fullName": "IEEE/ACM International Conference on Computer-Aided Design",
    "deadlines": [
      {
        "date": null,
        "label": "~ April 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 3"
    ],
    "url": "https://iccad.com/2026"
  },
  {
    "name": "CoNEXT 2027",
    "fullName": "International Conference on emerging Networking EXperiments and Technologies",
    "deadlines": [
      {
        "date": null,
        "label": "~ December 2027 · December Cycle estimated deadline"
      },
      {
        "date": null,
        "label": "~ June 2027 · June Cycle estimated deadline"
      }
    ],
    "tags": [
      "Network System",
      "IF 3"
    ],
    "url": "https://conferences.sigcomm.org/co-next/2026/#!/home"
  },
  {
    "name": "PACT 2026",
    "fullName": "International Conference on Parallel Architectures and Compilation Techniques",
    "deadlines": [
      {
        "date": null,
        "label": "~ April 2026 · Abstract submission deadline estimated deadline"
      },
      {
        "date": null,
        "label": "~ April 2026 · Paper submission deadline estimated deadline"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 3"
    ],
    "url": "https://pact2025.github.io/"
  },
  {
    "name": "KR 2027",
    "fullName": "International Conference on Principles of Knowledge Representation and Reasoning",
    "deadlines": [
      {
        "date": null,
        "label": "~ February 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Artificial Intelligence",
      "IF 3"
    ],
    "url": "https://kr.org/KR2026/"
  },
  {
    "name": "ATC 2027",
    "fullName": "USENIX Annual Technical Conference",
    "deadlines": [
      {
        "date": null,
        "label": "~ June 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 3"
    ],
    "url": "https://sigops.org/s/conferences/atc/2026/index.html"
  },
  {
    "name": "FAST 2027",
    "fullName": "USENIX Conference on File and Storage Technologies",
    "deadlines": [
      {
        "date": "2026-03-18T11:59:00Z",
        "label": "Spring deadline · Mar 17, 2026 AoE (passed)"
      },
      {
        "date": "2026-09-16T11:59:00Z",
        "label": "Fall deadline · Sep 15, 2026 AoE"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 3"
    ],
    "url": "https://www.usenix.org/conference/fast27"
  },
  {
    "name": "Security 2027",
    "fullName": "USENIX Security Symposium",
    "deadlines": [
      {
        "date": "2026-08-26T11:59:59Z",
        "label": "Cycle 1 Deadline · Aug 25, 2026 AoE"
      },
      {
        "date": "2027-01-27T11:59:59Z",
        "label": "Cycle 2 Deadline · Jan 26, 2027 AoE"
      }
    ],
    "tags": [
      "Network and System Security",
      "IF 3"
    ],
    "url": "https://www.usenix.org/conference/usenixsecurity27"
  },
  {
    "name": "SoCG 2027",
    "fullName": "(ACM) Annual Symposium on Computational Geometry",
    "deadlines": [
      {
        "date": null,
        "label": "~ December 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Computing Theory",
      "IF 2"
    ],
    "url": "https://cgweek26.computational-geometry.org/contribute/"
  },
  {
    "name": "ACSAC 2027",
    "fullName": "ACM Annual Computer Security Applications Conference",
    "deadlines": [
      {
        "date": null,
        "label": "~ May 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Network and System Security",
      "IF 2"
    ],
    "url": "https://www.acsac.org/"
  },
  {
    "name": "EMSOFT 2027",
    "fullName": "ACM Conference on Embedded Software",
    "deadlines": [
      {
        "date": null,
        "label": "~ March 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Interdiscipline/Mixture/Emerging",
      "IF 2"
    ],
    "url": "https://esweek.org/emsoft/"
  },
  {
    "name": "IUI 2027",
    "fullName": "ACM International Conference on Intelligent User Interfaces",
    "deadlines": [
      {
        "date": "2026-08-21T11:59:59Z",
        "label": "Aug 20, 2026 AoE"
      }
    ],
    "tags": [
      "Computer-Human Interaction",
      "IF 2"
    ],
    "url": "https://iui.hosting.acm.org/2027/"
  },
  {
    "name": "ICS 2027",
    "fullName": "ACM International Conference on Supercomputing",
    "deadlines": [
      {
        "date": null,
        "label": "~ December 2027 · Cycle 1 estimated deadline"
      },
      {
        "date": null,
        "label": "~ February 2027 · Cycle 2 estimated deadline"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 2"
    ],
    "url": "https://dipsa-qub.github.io/ICS2026-webpage/"
  },
  {
    "name": "ISSTA 2027",
    "fullName": "ACM International Symposium on Software Testing and Analysis",
    "deadlines": [
      {
        "date": null,
        "label": "~ January 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Software Engineering/Operating System/Programming Language Design",
      "IF 2"
    ],
    "url": "https://conf.researchr.org/home/issta-2026"
  },
  {
    "name": "IMC 2027",
    "fullName": "ACM Internet Measurement Conference",
    "deadlines": [
      {
        "date": null,
        "label": "~ November 2027 · Cycle 1 Deadline estimated deadline"
      },
      {
        "date": null,
        "label": "~ April 2027 · Cycle 2 Deadline estimated deadline"
      }
    ],
    "tags": [
      "Network System",
      "IF 2"
    ],
    "url": "https://conferences.sigcomm.org/imc/2026/"
  },
  {
    "name": "LCTES 2025",
    "fullName": "ACM SIGPLAN/SIGBED Conference on Languages, Compilers and Tools for Embedded Systems",
    "deadlines": [
      {
        "date": null,
        "label": "~ February 2025 · Abstract submission estimated deadline"
      },
      {
        "date": null,
        "label": "~ February 2025 · Paper submission estimated deadline"
      }
    ],
    "tags": [
      "Software Engineering/Operating System/Programming Language Design",
      "IF 2"
    ],
    "url": "https://pldi24.sigplan.org/home/LCTES-2024"
  },
  {
    "name": "UIST 2027",
    "fullName": "ACM Symposium on User Interface Software and Technology",
    "deadlines": [
      {
        "date": null,
        "label": "~ March 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Computer-Human Interaction",
      "IF 2"
    ],
    "url": "https://uist.acm.org/2026/"
  },
  {
    "name": "MODELS 2023",
    "fullName": "ACM/IEEE International Conference on Model Driven Engineering Languages and Systems",
    "deadlines": [
      {
        "date": null,
        "label": "~ May 2023 · estimated deadline"
      }
    ],
    "tags": [
      "Software Engineering/Operating System/Programming Language Design",
      "IF 2"
    ],
    "url": "https://conf.researchr.org/home/models-2022"
  },
  {
    "name": "MIDDLEWARE 2023",
    "fullName": "ACM/IFIP/USENIX International Middleware Conference",
    "deadlines": [
      {
        "date": null,
        "label": "~ November 2023 · Submission R1 estimated deadline"
      },
      {
        "date": null,
        "label": "~ March 2023 · Submission R2 estimated deadline"
      }
    ],
    "tags": [
      "Software Engineering/Operating System/Programming Language Design",
      "IF 2"
    ],
    "url": "https://middleware-conf.github.io/2022/"
  },
  {
    "name": "CogSci 2027",
    "fullName": "Annual Meeting of the Cognitive Science Society",
    "deadlines": [
      {
        "date": null,
        "label": "~ February 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Interdiscipline/Mixture/Emerging",
      "IF 2"
    ],
    "url": "https://cognitivesciencesociety.org/cogsci-2026/"
  },
  {
    "name": "NAACL/HLT 2026",
    "fullName": "Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies",
    "deadlines": [
      {
        "date": null,
        "label": "~ October 2026 · estimated deadline"
      }
    ],
    "tags": [
      "Artificial Intelligence",
      "IF 2"
    ],
    "url": "https://2025.naacl.org/"
  },
  {
    "name": "CVPR (Spotlight) 2027",
    "fullName": "Conference on Computer Vision and Pattern Recognition (Spotlight)",
    "deadlines": [
      {
        "date": null,
        "label": "~ November 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Artificial Intelligence",
      "IF 2"
    ],
    "url": "https://cvpr.thecvf.com/Conferences/2026"
  },
  {
    "name": "NIPS (Spotlight) 2027",
    "fullName": "Conference on Neural Information Processing Systems (Spotlight)",
    "deadlines": [
      {
        "date": null,
        "label": "~ May 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Artificial Intelligence",
      "IF 2"
    ],
    "url": "https://neurips.cc/Conferences/2026"
  },
  {
    "name": "DATE 2027",
    "fullName": "Design Automation and Test in Europe Conference",
    "deadlines": [
      {
        "date": "2026-09-21T11:59:59Z",
        "label": "Sep 20, 2026 AoE"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 2"
    ],
    "url": "https://www.date-conference.com/date-2027-call-papers"
  },
  {
    "name": "Eurographics 2027",
    "fullName": "Eurographics",
    "deadlines": [
      {
        "date": null,
        "label": "~ September 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Graphics",
      "IF 2"
    ],
    "url": "https://eg2026.github.io/"
  },
  {
    "name": "EACL 2027",
    "fullName": "European Association for Computational Linguistics",
    "deadlines": [
      {
        "date": "2026-08-04T11:59:59Z",
        "label": "Aug 3, 2026 AoE"
      }
    ],
    "tags": [
      "Artificial Intelligence",
      "IF 2"
    ],
    "url": "https://2027.eacl.org/"
  },
  {
    "name": "EuroSys 2027",
    "fullName": "European Conference on Computer Systems",
    "deadlines": [
      {
        "date": "2026-05-15T11:59:59Z",
        "label": "Spring Submission Deadline · May 14, 2026 AoE (passed)"
      },
      {
        "date": "2026-09-25T11:59:59Z",
        "label": "Fall Submission Deadline · Sep 24, 2026 AoE"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 2"
    ],
    "url": "https://2027.eurosys.org/"
  },
  {
    "name": "ECCV 2027",
    "fullName": "European Conference on Computer Vision",
    "deadlines": [
      {
        "date": null,
        "label": "~ March 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Artificial Intelligence",
      "IF 2"
    ],
    "url": "https://eccv.ecva.net/"
  },
  {
    "name": "ECOOP 2026",
    "fullName": "European Conference on Object Oriented Programming",
    "deadlines": [
      {
        "date": null,
        "label": "~ January 2026 · Submission R1 estimated deadline"
      },
      {
        "date": null,
        "label": "~ March 2026 · Submission R2 estimated deadline"
      }
    ],
    "tags": [
      "Software Engineering/Operating System/Programming Language Design",
      "IF 2"
    ],
    "url": "https://2025.ecoop.org/"
  },
  {
    "name": "ESORICS 2027",
    "fullName": "European Symposium on Research in Computer Security",
    "deadlines": [
      {
        "date": null,
        "label": "~ January 2027 · First Submission deadline estimated deadline"
      },
      {
        "date": null,
        "label": "~ April 2027 · Second Submission deadline estimated deadline"
      }
    ],
    "tags": [
      "Network and System Security",
      "IF 2"
    ],
    "url": "https://sites.google.com/di.uniroma1.it/esorics2026/home"
  },
  {
    "name": "ICNP 2027",
    "fullName": "IEEE International Conference on Network Protocols",
    "deadlines": [
      {
        "date": null,
        "label": "~ May 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Network System",
      "IF 2"
    ],
    "url": "https://icnp26.cs.ucr.edu/"
  },
  {
    "name": "ICSME (ICSM) 2027",
    "fullName": "IEEE International Conference on Software Maintenance and Evolution",
    "deadlines": [
      {
        "date": null,
        "label": "~ March 2027 · Research Papers Track estimated deadline"
      }
    ],
    "tags": [
      "Software Engineering/Operating System/Programming Language Design",
      "IF 2"
    ],
    "url": "https://conf.researchr.org/home/icsme-2026"
  },
  {
    "name": "ICWS 2027",
    "fullName": "IEEE International Conference on web Services",
    "deadlines": [
      {
        "date": null,
        "label": "~ March 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Software Engineering/Operating System/Programming Language Design",
      "IF 2"
    ],
    "url": "https://services.conferences.computer.org/2026/icws-2026/"
  },
  {
    "name": "IPDPS 2027",
    "fullName": "IEEE International Parallel and Distributed Processing Symposium",
    "deadlines": [
      {
        "date": null,
        "label": "~ October 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 2"
    ],
    "url": "https://www.ipdps.org/"
  },
  {
    "name": "RE 2027",
    "fullName": "IEEE International Requirements Engineering Conference",
    "deadlines": [
      {
        "date": null,
        "label": "~ February 2027 · Research Papers estimated deadline"
      },
      {
        "date": null,
        "label": "~ April 2027 · Journal Paper estimated deadline"
      }
    ],
    "tags": [
      "Software Engineering/Operating System/Programming Language Design",
      "IF 2"
    ],
    "url": "https://conf.researchr.org/home/RE-2026"
  },
  {
    "name": "HPDC 2027",
    "fullName": "IEEE International Symposium on High Performance Distributed Computing",
    "deadlines": [
      {
        "date": null,
        "label": "~ January 2027 · abstract registration deadline estimated deadline"
      },
      {
        "date": null,
        "label": "~ February 2027 · paper submission deadline estimated deadline"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 2"
    ],
    "url": "https://hpdc.sci.utah.edu/2026/"
  },
  {
    "name": "RTAS 2027",
    "fullName": "IEEE Real-Time and Embedded Technology and Applications Symposium",
    "deadlines": [
      {
        "date": null,
        "label": "~ November 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 2"
    ],
    "url": "https://2026.rtas.org/"
  },
  {
    "name": "VR 2027",
    "fullName": "IEEE Virtual Reality Conference",
    "deadlines": [
      {
        "date": "2026-09-01T11:59:59Z",
        "label": "Aug 31, 2026 AoE"
      }
    ],
    "tags": [
      "Graphics",
      "IF 2"
    ],
    "url": "https://ieeevr.org/2027/"
  },
  {
    "name": "DSN 2027",
    "fullName": "IEEE/IFIP International Conference on Dependable Systems and Networks",
    "deadlines": [
      {
        "date": "2026-12-03T11:59:59Z",
        "label": "Dec 2, 2026 AoE"
      }
    ],
    "tags": [
      "Network and System Security",
      "IF 2"
    ],
    "url": "https://dsn2027-berlin.github.io/"
  },
  {
    "name": "PERFORMANCE 2027",
    "fullName": "IFIP WG 7.3 International Symposium on Computer Performance, Modeling, Measurements and Evaluation",
    "deadlines": [
      {
        "date": null,
        "label": "~ May 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 2"
    ],
    "url": "https://performance2026.github.io/call/"
  },
  {
    "name": "ICALP 2027",
    "fullName": "International Colloquium on Automata, Languages and Programming",
    "deadlines": [
      {
        "date": null,
        "label": "~ February 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Computing Theory",
      "IF 2"
    ],
    "url": "https://icalppodcspaa2026.cs.rhul.ac.uk/"
  },
  {
    "name": "AAMAS 2027",
    "fullName": "International Conference on Autonomous Agents and Multi-agent Systems",
    "deadlines": [
      {
        "date": "2026-10-09T11:59:00Z",
        "label": "Oct 9, 2026 UTC+0"
      }
    ],
    "tags": [
      "Artificial Intelligence",
      "IF 2"
    ],
    "url": "https://openreview.net/group?id=ifaamas.org/AAMAS/2027/Conference"
  },
  {
    "name": "COLING 2026",
    "fullName": "International Conference on Computational Linguistics",
    "deadlines": [
      {
        "date": null,
        "label": "~ September 2026 · First Call for Main Conference Papers estimated deadline"
      }
    ],
    "tags": [
      "Artificial Intelligence",
      "IF 2"
    ],
    "url": "https://coling2025.org/"
  },
  {
    "name": "ICCV (Spotlight) 2026",
    "fullName": "International Conference on Computer Vision (Spotlight)",
    "deadlines": [
      {
        "date": null,
        "label": "~ March 2026 · estimated deadline"
      }
    ],
    "tags": [
      "Artificial Intelligence",
      "IF 2"
    ],
    "url": "https://iccv.thecvf.com/Conferences/2025"
  },
  {
    "name": "EDBT 2027",
    "fullName": "International Conference on Extending Database Technology",
    "deadlines": [
      {
        "date": "2026-02-05T11:59:59Z",
        "label": "Cycle 1 · Feb 4, 2026 AoE (passed)"
      },
      {
        "date": "2026-06-11T11:59:59Z",
        "label": "Cycle 2 · Jun 10, 2026 AoE (passed)"
      },
      {
        "date": "2026-10-08T11:59:59Z",
        "label": "Cycle 3 · Oct 7, 2026 AoE"
      }
    ],
    "tags": [
      "Database/Data Mining/Information Retrieval",
      "IF 2"
    ],
    "url": "https://edbticdt2027.github.io/"
  },
  {
    "name": "ICFP 2027",
    "fullName": "International Conference on Functional Programming",
    "deadlines": [
      {
        "date": null,
        "label": "~ February 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Software Engineering/Operating System/Programming Language Design",
      "IF 2"
    ],
    "url": "https://icfp26.sigplan.org/"
  },
  {
    "name": "CODES 2027",
    "fullName": "International Conference on Hardware/Software Codesign and System Synthesis",
    "deadlines": [
      {
        "date": null,
        "label": "~ March 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 2"
    ],
    "url": "https://esweek.org/codes_isss_cfp/"
  },
  {
    "name": "ICPP 2027",
    "fullName": "International Conference on Parallel Processing",
    "deadlines": [
      {
        "date": null,
        "label": "~ May 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 2"
    ],
    "url": "https://icpp2026.github.io/"
  },
  {
    "name": "ASIACRYPT 2027",
    "fullName": "International Conference on the Theory and Application of Cryptology and Information Security",
    "deadlines": [
      {
        "date": null,
        "label": "~ May 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Network and System Security",
      "IF 2"
    ],
    "url": "https://asiacrypt.iacr.org/2026/"
  },
  {
    "name": "ISWC 2027",
    "fullName": "International Semantic web Conference",
    "deadlines": [
      {
        "date": null,
        "label": "~ May 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Database/Data Mining/Information Retrieval",
      "IF 2"
    ],
    "url": "https://iswc2026.semanticweb.org/"
  },
  {
    "name": "CGO 2027",
    "fullName": "International Symposium on Code Generation and Optimization",
    "deadlines": [
      {
        "date": "2026-06-12T11:59:59Z",
        "label": "First Submission · Jun 11, 2026 AoE (passed)"
      },
      {
        "date": "2026-09-11T11:59:59Z",
        "label": "Second Submission · Sep 10, 2026 AoE"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 2"
    ],
    "url": "https://conf.researchr.org/home/cgo-2027"
  },
  {
    "name": "RAID 2027",
    "fullName": "International Symposium on Recent Advances in Intrusion Detection",
    "deadlines": [
      {
        "date": null,
        "label": "~ April 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Network and System Security",
      "IF 2"
    ],
    "url": "https://raid2026.org"
  },
  {
    "name": "NDSS 2027",
    "fullName": "Network and Distributed System Security Symposium",
    "deadlines": [
      {
        "date": "2026-05-07T11:59:59Z",
        "label": "Summer · May 6, 2026 AoE (passed)"
      },
      {
        "date": "2026-08-20T11:59:59Z",
        "label": "Fall · Aug 19, 2026 AoE"
      }
    ],
    "tags": [
      "Network and System Security",
      "IF 2"
    ],
    "url": "https://www.ndss-symposium.org/ndss2027/"
  },
  {
    "name": "PG 2027",
    "fullName": "Pacific Conference on Computer Graphics and Applications",
    "deadlines": [
      {
        "date": null,
        "label": "~ June 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Graphics",
      "IF 2"
    ],
    "url": "https://pacificgraphics2026.github.io/"
  },
  {
    "name": "RSS 2027",
    "fullName": "Robotics: Science and Systems Conference",
    "deadlines": [
      {
        "date": null,
        "label": "~ January 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Artificial Intelligence",
      "IF 2"
    ],
    "url": "https://roboticsconference.org"
  },
  {
    "name": "SDM 2026",
    "fullName": "SIAM International Conference on Data Mining",
    "deadlines": [
      {
        "date": null,
        "label": "~ October 2026 · estimated deadline"
      }
    ],
    "tags": [
      "Database/Data Mining/Information Retrieval",
      "IF 2"
    ],
    "url": "https://www.siam.org/conferences-events/siam-conferences/sdm25"
  },
  {
    "name": "RecSys 2027",
    "fullName": "ACM Conference on Recommender Systems",
    "deadlines": [
      {
        "date": null,
        "label": "~ April 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Database/Data Mining/Information Retrieval",
      "IF 1"
    ],
    "url": "https://recsys.acm.org/recsys26"
  },
  {
    "name": "ICMR 2027",
    "fullName": "ACM International Conference on Multimedia Retrieval (Former ACM International Conference on Image and Video Retrieval)",
    "deadlines": [
      {
        "date": null,
        "label": "~ February 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Graphics",
      "IF 1"
    ],
    "url": "https://icmr2026.org/calls.html"
  },
  {
    "name": "NOSSDAV 2027",
    "fullName": "ACM Network and Operating System Support for Digital Audio and Video",
    "deadlines": [
      {
        "date": null,
        "label": "~ January 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Network System",
      "IF 1"
    ],
    "url": "https://nossdav.org/2026/"
  },
  {
    "name": "SAC 2027",
    "fullName": "ACM SIGAPP Symposium on Applied Computing",
    "deadlines": [
      {
        "date": null,
        "label": "~ February 2027 · Paper submission deadline (cycle 1) estimated deadline"
      },
      {
        "date": null,
        "label": "~ May 2027 · Paper submission deadline (cycle 2) estimated deadline"
      }
    ],
    "tags": [
      "Network and System Security",
      "IF 1"
    ],
    "url": "https://sacworkshop.org/SAC26/"
  },
  {
    "name": "VEE 2023",
    "fullName": "ACM SIGPLAN/SIGOPS International Conference on Virtual Execution Environments",
    "deadlines": [
      {
        "date": null,
        "label": "~ December 2023 · estimated deadline"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 1"
    ],
    "url": "https://conf.researchr.org/home/vee-2022"
  },
  {
    "name": "SOCC 2027",
    "fullName": "ACM Symposium on Cloud Computing",
    "deadlines": [
      {
        "date": null,
        "label": "~ February 2027 · First round estimated deadline"
      },
      {
        "date": null,
        "label": "~ July 2027 · Second round estimated deadline"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 1"
    ],
    "url": "https://acmsocc.org/2026/"
  },
  {
    "name": "ASIACCS 2027",
    "fullName": "ACM Symposium on Information, Computer and Communications Security",
    "deadlines": [
      {
        "date": "2026-08-22T11:59:59Z",
        "label": "1st round Deadline · Aug 21, 2026 AoE"
      },
      {
        "date": "2026-12-12T11:59:59Z",
        "label": "2nd round Deadline · Dec 11, 2026 AoE"
      }
    ],
    "tags": [
      "Network and System Security",
      "IF 1"
    ],
    "url": "https://asiaccs2027.cityu.edu.mo/index.html"
  },
  {
    "name": "ACCV 2027",
    "fullName": "Asian Conference on Computer Vision",
    "deadlines": [
      {
        "date": null,
        "label": "~ July 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Artificial Intelligence",
      "IF 1"
    ],
    "url": "https://accv2026.org/"
  },
  {
    "name": "SGP 2027",
    "fullName": "Eurographics symposium on Geometry Processing",
    "deadlines": [
      {
        "date": null,
        "label": "~ February 2027 · First round estimated deadline"
      },
      {
        "date": null,
        "label": "~ April 2027 · Second round estimated deadline"
      }
    ],
    "tags": [
      "Graphics",
      "IF 1"
    ],
    "url": "https://sgp26.org/"
  },
  {
    "name": "ECAI 2026",
    "fullName": "European Conference on Artificial Intelligence",
    "deadlines": [
      {
        "date": null,
        "label": "~ May 2026 · estimated deadline"
      }
    ],
    "tags": [
      "Artificial Intelligence",
      "IF 1"
    ],
    "url": "https://ecai2025.org/deadlines/"
  },
  {
    "name": "ECCV (Spotlight) 2027",
    "fullName": "European Conference on Computer Vision (Spotlight)",
    "deadlines": [
      {
        "date": null,
        "label": "~ March 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Artificial Intelligence",
      "IF 1"
    ],
    "url": "https://eccv.ecva.net/"
  },
  {
    "name": "FC 2027",
    "fullName": "Financial Cryptography and Data Security",
    "deadlines": [
      {
        "date": "2026-09-18T11:59:59Z",
        "label": "Submission deadline · Sep 17, 2026 AoE"
      }
    ],
    "tags": [
      "Network and System Security",
      "IF 1"
    ],
    "url": "https://fc27.ifca.ai/"
  },
  {
    "name": "GECCO 2027",
    "fullName": "Genetic and Evolutionary Computation Conference",
    "deadlines": [
      {
        "date": null,
        "label": "~ January 2027 · Full papers (traditional category) estimated deadline"
      },
      {
        "date": null,
        "label": "~ January 2027 · Poster-only papers estimated deadline"
      }
    ],
    "tags": [
      "Artificial Intelligence",
      "IF 1"
    ],
    "url": "https://gecco-2026.sigevo.org/HomePage"
  },
  {
    "name": "CSF 2027",
    "fullName": "IEEE Computer Security Foundation Symposium",
    "deadlines": [
      {
        "date": null,
        "label": "~ July 2027 · Summer estimated deadline"
      },
      {
        "date": null,
        "label": "~ October 2027 · Fall estimated deadline"
      },
      {
        "date": null,
        "label": "~ January 2027 · Winter estimated deadline"
      }
    ],
    "tags": [
      "Network and System Security",
      "IF 1"
    ],
    "url": "https://csf2026.ieee-security.org/"
  },
  {
    "name": "BIBM 2027",
    "fullName": "IEEE Conference on Bioinformatics and Biomedicine",
    "deadlines": [
      {
        "date": null,
        "label": "~ July 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Interdiscipline/Mixture/Emerging",
      "IF 1"
    ],
    "url": "https://ieeebibm.org/BIBM2026/"
  },
  {
    "name": "CLOUD 2027",
    "fullName": "IEEE International Conference on Cloud Computing",
    "deadlines": [
      {
        "date": null,
        "label": "~ March 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Interdiscipline/Mixture/Emerging",
      "IF 1"
    ],
    "url": "https://services.conferences.computer.org/2026/cloud/"
  },
  {
    "name": "CLUSTER 2027",
    "fullName": "IEEE International Conference on Cluster Computing",
    "deadlines": [
      {
        "date": null,
        "label": "~ May 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 1"
    ],
    "url": "https://clustercomp.org/2026"
  },
  {
    "name": "ICCD 2027",
    "fullName": "IEEE International Conference on Computer Design",
    "deadlines": [
      {
        "date": null,
        "label": "~ June 2027 · abstract and full paper deadline estimated deadline"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 1"
    ],
    "url": "https://www.iccd-conf.com/2026/home.html"
  },
  {
    "name": "MSST 2025",
    "fullName": "IEEE International Conference on Massive Storage Systems and Technology",
    "deadlines": [
      {
        "date": null,
        "label": "~ January 2025 · estimated deadline"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 1"
    ],
    "url": "https://storageconference.us/index.html"
  },
  {
    "name": "ICPR 2027",
    "fullName": "IEEE International Conference on Pattern Recognition",
    "deadlines": [
      {
        "date": null,
        "label": "~ December 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Artificial Intelligence",
      "IF 1"
    ],
    "url": "https://icpr2026.org/"
  },
  {
    "name": "ICRA 2027",
    "fullName": "IEEE International Conference on Robotics and Automation",
    "deadlines": [
      {
        "date": null,
        "label": "~ September 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Artificial Intelligence",
      "IF 1"
    ],
    "url": "https://2026.ieee-icra.org/"
  },
  {
    "name": "SECON 2027",
    "fullName": "IEEE International Conference on Sensing, Communication, and Networking",
    "deadlines": [
      {
        "date": null,
        "label": "~ December 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Network System",
      "IF 1"
    ],
    "url": "https://secon2026.ieee-secon.org/important-dates"
  },
  {
    "name": "ICST 2027",
    "fullName": "IEEE International Conference on Software Testing, Verification and Validation",
    "deadlines": [
      {
        "date": null,
        "label": "~ December 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Software Engineering/Operating System/Programming Language Design",
      "IF 1"
    ],
    "url": "https://conf.researchr.org/home/icst-2026"
  },
  {
    "name": "ISMAR 2027",
    "fullName": "IEEE International Symposium on Mixed and Augmented Reality",
    "deadlines": [
      {
        "date": null,
        "label": "~ March 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Graphics",
      "IF 1"
    ],
    "url": "https://www.ieeeismar.net/2026/"
  },
  {
    "name": "ISPASS 2027",
    "fullName": "IEEE International Symposium on Performance Analysis of Systems and Software",
    "deadlines": [
      {
        "date": null,
        "label": "~ December 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Software Engineering/Operating System/Programming Language Design",
      "IF 1"
    ],
    "url": "https://ispass.org/ispass2026/"
  },
  {
    "name": "ISSRE 2027",
    "fullName": "IEEE International Symposium on Software Reliability Engineering",
    "deadlines": [
      {
        "date": null,
        "label": "~ April 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Software Engineering/Operating System/Programming Language Design",
      "IF 1"
    ],
    "url": "https://cyprusconferences.org/issre2026/"
  },
  {
    "name": "IISWC 2027",
    "fullName": "IEEE International Symposium on Workload Characterization",
    "deadlines": [
      {
        "date": null,
        "label": "~ May 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 1"
    ],
    "url": "https://iiswc.org/iiswc2026/"
  },
  {
    "name": "SRDS 2027",
    "fullName": "IEEE Symposium on Reliable Distributed Systems",
    "deadlines": [
      {
        "date": null,
        "label": "~ May 2027 · Abstract Submission estimated deadline"
      },
      {
        "date": null,
        "label": "~ May 2027 · Full Paper Submission estimated deadline"
      }
    ],
    "tags": [
      "Network and System Security",
      "IF 1"
    ],
    "url": "https://srds-conference.org/"
  },
  {
    "name": "CCGrid 2027",
    "fullName": "IEEE/ACM International Symposium on Cluster, Cloud, and Grid Computing",
    "deadlines": [
      {
        "date": null,
        "label": "~ December 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 1"
    ],
    "url": "https://www.ccgrid2026.org/"
  },
  {
    "name": "NOMS 2027",
    "fullName": "IEEE/IFIP Network Operations and Management Symposium",
    "deadlines": [
      {
        "date": null,
        "label": "~ October 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Network and System Security",
      "IF 1"
    ],
    "url": "https://noms2026.ieee-noms.org/"
  },
  {
    "name": "SEC (IFIP-SEC) 2027",
    "fullName": "IFIP International Information Security and Privacy Conference",
    "deadlines": [
      {
        "date": null,
        "label": "~ December 2027 · Submission deadline estimated deadline"
      }
    ],
    "tags": [
      "Network and System Security",
      "IF 1"
    ],
    "url": "https://ifipsec.org/index.html"
  },
  {
    "name": "ICSOC 2026",
    "fullName": "International Conf. on Service Oriented Computing",
    "deadlines": [
      {
        "date": null,
        "label": "~ May 2026 · Early paper submissions estimated deadline"
      },
      {
        "date": null,
        "label": "~ July 2026 · Regular paper abstract submissions estimated deadline"
      },
      {
        "date": null,
        "label": "~ July 2026 · Regular paper submissions estimated deadline"
      }
    ],
    "tags": [
      "Software Engineering/Operating System/Programming Language Design",
      "IF 1"
    ],
    "url": "https://icsoc2025.hit.edu.cn/main.htm"
  },
  {
    "name": "AISTATS 2027",
    "fullName": "International Conference on Artificial Intelligence and Statistics",
    "deadlines": [
      {
        "date": null,
        "label": "~ October 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Artificial Intelligence",
      "IF 1"
    ],
    "url": "https://virtual.aistats.org/Conferences/2026"
  },
  {
    "name": "ICAPS 2027",
    "fullName": "International Conference on Automated Planning and Scheduling",
    "deadlines": [
      {
        "date": null,
        "label": "~ December 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Artificial Intelligence",
      "IF 1"
    ],
    "url": "https://icaps26.icaps-conference.org/"
  },
  {
    "name": "CONCUR 2027",
    "fullName": "International Conference on Concurrency Theory",
    "deadlines": [
      {
        "date": null,
        "label": "~ April 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Computing Theory",
      "IF 1"
    ],
    "url": "https://confest-2026.github.io/concur/"
  },
  {
    "name": "DASFAA 2027",
    "fullName": "International Conference on Database Systems for Advanced Applications",
    "deadlines": [
      {
        "date": null,
        "label": "~ October 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Database/Data Mining/Information Retrieval",
      "IF 1"
    ],
    "url": "https://dasfaa2026.github.io/"
  },
  {
    "name": "HiPEAC 2028",
    "fullName": "International Conference on High Performance and Embedded Architectures and Compilers",
    "deadlines": [
      {
        "date": null,
        "label": "~ June 2028 · estimated deadline"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 1"
    ],
    "url": "https://www.hipeac.net/2027/glasgow/#/call-for-papers/"
  },
  {
    "name": "MICCAI 2027",
    "fullName": "International Conference on Medical Image Computing and Computer Assisted Interventions",
    "deadlines": [
      {
        "date": null,
        "label": "~ February 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Interdiscipline/Mixture/Emerging",
      "IF 1"
    ],
    "url": "https://conferences.miccai.org/2026/en/IMPORTANT-DATES.html"
  },
  {
    "name": "Europar 2027",
    "fullName": "International European Conference on Parallel and Distributed Computing",
    "deadlines": [
      {
        "date": null,
        "label": "~ March 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Computer Architecture/Parallel Programming/Storage Technology",
      "IF 1"
    ],
    "url": "https://2026.euro-par.org/"
  },
  {
    "name": "IJCAR 2027",
    "fullName": "International Joint Conference on Automated Reasoning",
    "deadlines": [
      {
        "date": null,
        "label": "~ February 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Computing Theory",
      "IF 1"
    ],
    "url": "https://www.floc26.org/ijcar"
  },
  {
    "name": "SAS 2026",
    "fullName": "International Static Analysis Symposium",
    "deadlines": [
      {
        "date": null,
        "label": "~ May 2026 · Paper Submission estimated deadline"
      }
    ],
    "tags": [
      "Software Engineering/Operating System/Programming Language Design",
      "IF 1"
    ],
    "url": "https://2025.splashcon.org/home/sas-2025"
  },
  {
    "name": "ISAAC 2027",
    "fullName": "International Symposium on Algorithms and Computation",
    "deadlines": [
      {
        "date": null,
        "label": "~ June 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Computing Theory",
      "IF 1"
    ],
    "url": "https://www.algo-door.com/isaac2026/index.html"
  },
  {
    "name": "PAKDD 2027",
    "fullName": "Pacific-Asia Conference on Knowledge Discovery and Data Mining",
    "deadlines": [
      {
        "date": null,
        "label": "~ November 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Database/Data Mining/Information Retrieval",
      "IF 1"
    ],
    "url": "https://www.pakdd2026.org/"
  },
  {
    "name": "RECOMB 2027",
    "fullName": "Research in Computational Molecular Biology",
    "deadlines": [
      {
        "date": null,
        "label": "~ November 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Interdiscipline/Mixture/Emerging",
      "IF 1"
    ],
    "url": "https://recomb.org/recomb2026/"
  },
  {
    "name": "SOUPS 2027",
    "fullName": "Symposium On Usable Privacy and Security",
    "deadlines": [
      {
        "date": null,
        "label": "~ February 2027 · Mandatory Paper Registration Deadline estimated deadline"
      },
      {
        "date": null,
        "label": "~ February 2027 · Paper Submission Deadline estimated deadline"
      }
    ],
    "tags": [
      "Network and System Security",
      "IF 1"
    ],
    "url": "https://soups.page/"
  },
  {
    "name": "TCC 2027",
    "fullName": "Theory of Cryptography Conference",
    "deadlines": [
      {
        "date": null,
        "label": "~ May 2027 · estimated deadline"
      }
    ],
    "tags": [
      "Network and System Security",
      "IF 1"
    ],
    "url": "https://tcc.iacr.org/2026/"
  }
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

export default function NonTopContent() {
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
        {nonTopConferences.map((conference) => (
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
              {conference.deadlines.map((deadline, deadlineIndex) => (
                <div
                  key={`${deadline.label}-${deadlineIndex}`}
                  className="conference-deadlineGroup"
                >
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

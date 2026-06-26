'use client';

type Conference = {
  name: string;
  deadline: string;
  tags: string[];
  url?: string;
};

const aiConferences: Conference[] = [
  {
    name: 'AISTATS 2025',
    deadline: 'Fri Oct 11 2024 20:59:59 GMT+0900',
    tags: ['machine learning'],
    url: 'https://aistats.org',
  },
  {
    name: 'CVPR 2025',
    deadline: 'Fri Nov 15 2024 15:59:59 GMT+0900',
    tags: ['computer vision'],
    url: 'https://cvpr.thecvf.com',
  },
  {
    name: 'NAACL 2025',
    deadline: 'Wed Oct 16 2024 20:59:59 GMT+0900',
    tags: ['natural language proc'],
    url: 'https://2025.naacl.org',
  },
  {
    name: 'ICLR 2025',
    deadline: 'Wed Oct 02 2024 20:59:59 GMT+0900',
    tags: [
      'machine learning',
      'automated planning',
      'robotics',
      'computer vision',
      'natural language proc',
    ],
    url: 'https://iclr.cc',
  },
  {
    name: 'LoG 2024',
    deadline: 'Thu Sep 12 2024 20:59:00 GMT+0900',
    tags: ['machine learning', 'data mining', 'knowledge representation'],
    url: 'https://logconference.org',
  },
];

export default function AIContent() {
  return (
    <section style={styles.container}>
      <div style={styles.list}>
        {aiConferences.map((conference) => (
          <article key={conference.name} style={styles.item}>
            <div style={styles.left}>
              <h3 style={styles.title}>
                {conference.name}

                {conference.url && (
                  <a
                    href={conference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.link}
                    aria-label={`${conference.name} website`}
                  >
                    🌐
                  </a>
                )}
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
                <strong>Deadline:</strong> {conference.deadline}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const styles: {
  [key: string]: React.CSSProperties;
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
    margin: 0,
    fontSize: '13px',
    color: '#111827',
    lineHeight: 1.6,
  },
};
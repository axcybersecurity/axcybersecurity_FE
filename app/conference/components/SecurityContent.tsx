'use client';

type Conference = {
  name: string;
  deadline: string;
  tags: string[];
  url?: string;
};

const securityConferences: Conference[] = [
  {
    name: 'IEEE S&P 2025',
    deadline: 'Thu Jun 06 2024 20:59:59 GMT+0900',
    tags: ['security', 'privacy'],
    url: 'https://www.ieee-security.org',
  },
  {
    name: 'USENIX Security 2025',
    deadline: 'Wed Jan 22 2025 20:59:59 GMT+0900',
    tags: ['system security', 'network security', 'privacy'],
    url: 'https://www.usenix.org/conference/usenixsecurity25',
  },
  {
    name: 'ACM CCS 2025',
    deadline: 'Mon Jan 13 2025 20:59:59 GMT+0900',
    tags: ['security', 'cryptography', 'privacy'],
    url: 'https://www.sigsac.org/ccs.html',
  },
  {
    name: 'NDSS 2025',
    deadline: 'Wed Jul 10 2024 20:59:59 GMT+0900',
    tags: ['network security', 'system security'],
    url: 'https://www.ndss-symposium.org',
  },
  {
    name: 'PETS 2025',
    deadline: 'Thu Nov 30 2024 20:59:59 GMT+0900',
    tags: ['privacy', 'anonymity', 'security'],
    url: 'https://petsymposium.org',
  },
];

export default function SecurityContent() {
  return (
    <section style={styles.container}>
      <div style={styles.list}>
        {securityConferences.map((conference) => (
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
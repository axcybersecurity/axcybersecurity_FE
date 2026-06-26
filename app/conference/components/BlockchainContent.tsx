'use client';

type Conference = {
  name: string;
  deadline: string;
  tags: string[];
  url?: string;
};

const blockchainConferences: Conference[] = [
  {
    name: 'FC 2025',
    deadline: 'Fri Sep 13 2024 20:59:59 GMT+0900',
    tags: ['blockchain', 'cryptography', 'finance'],
    url: 'https://fc.net',
  },
  {
    name: 'IEEE ICBC 2025',
    deadline: 'Mon Dec 02 2024 20:59:59 GMT+0900',
    tags: ['blockchain', 'cryptocurrency', 'distributed systems'],
    url: 'https://icbc2025.ieee-icbc.org',
  },
  {
    name: 'AFT 2025',
    deadline: 'Fri Feb 07 2025 20:59:59 GMT+0900',
    tags: ['blockchain', 'financial technology', 'distributed systems'],
    url: 'https://aft.acm.org',
  },
  {
    name: 'Tokenomics 2025',
    deadline: 'Mon Mar 10 2025 20:59:59 GMT+0900',
    tags: ['tokenomics', 'blockchain', 'cryptoeconomics'],
    url: 'https://tokenomics-conference.org',
  },
  {
    name: 'DeFi Security Summit 2025',
    deadline: 'Wed Apr 16 2025 20:59:59 GMT+0900',
    tags: ['defi', 'smart contract', 'security'],
    url: 'https://defisecuritysummit.org',
  },
];

export default function BlockchainContent() {
  return (
    <section style={styles.container}>
      <div style={styles.list}>
        {blockchainConferences.map((conference) => (
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
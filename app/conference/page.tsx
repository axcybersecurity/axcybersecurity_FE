import Link from 'next/link';
import AIContent from './components/AIContent';
import SecurityContent from './components/SecurityContent';
import BlockchainContent from './components/BlockchainContent';

type ConferenceTab = 'ai' | 'security' | 'blockchain';

type ConferencePageProps = {
  searchParams: {
    tab?: string;
  };
};

const tabs: {
  label: string;
  value: ConferenceTab;
  href: string;
}[] = [
  {
    label: 'AI 컨퍼런스',
    value: 'ai',
    href: '/conference?tab=ai',
  },
  {
    label: '보안 및 프라이버시 컨퍼런스',
    value: 'security',
    href: '/conference?tab=security',
  },
  {
    label: '블록체인 컨퍼런스',
    value: 'blockchain',
    href: '/conference?tab=blockchain',
  },
];

export default function ConferencePage({ searchParams }: ConferencePageProps) {
  const tab = searchParams.tab;

  const currentTab: ConferenceTab =
    tab === 'security' || tab === 'blockchain' || tab === 'ai'
      ? tab
      : 'ai';

  return (
    <main style={styles.page}>
      <section style={styles.header}>
        <h1 style={styles.title}>Conference Deadlines</h1>

        <p style={styles.description}>
          연구 분야별 주요 컨퍼런스와 마감기한을 확인할 수 있습니다.
        </p>

        <div style={styles.tabArea}>
          <span style={styles.tabLabel}>Subject Filter:</span>

          <nav style={styles.tabs}>
            {tabs.map((item) => {
              const isActive = currentTab === item.value;

              return (
                <Link
                  key={item.value}
                  href={item.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    minHeight: '38px',
                    padding: '0 14px',
                    border: isActive
                      ? '1px solid #111827'
                      : '1px solid #d1d5db',
                    borderRadius: '4px',
                    backgroundColor: isActive ? '#f3f4f6' : '#ffffff',
                    color: isActive ? '#111827' : '#374151',
                    fontSize: '14px',
                    fontWeight: isActive ? 600 : 400,
                    textDecoration: 'none',
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </section>

      <section style={styles.content}>
        {currentTab === 'ai' && <AIContent />}
        {currentTab === 'security' && <SecurityContent />}
        {currentTab === 'blockchain' && <BlockchainContent />}
      </section>
    </main>
  );
}

const styles: {
  [key: string]: React.CSSProperties;
} = {
  page: {
    maxWidth: '950px',
    margin: '0 auto',
    padding: '40px 20px 80px',
    color: '#111827',
  },

  header: {
    marginBottom: '32px',
  },

  title: {
    margin: '0 0 12px',
    fontSize: '32px',
    fontWeight: 700,
    lineHeight: 1.2,
  },

  description: {
    margin: '0 0 28px',
    fontSize: '14px',
    color: '#374151',
    lineHeight: 1.6,
  },

  tabArea: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '24px',
  },

  tabLabel: {
    fontSize: '16px',
    color: '#111827',
    whiteSpace: 'nowrap',
  },

  tabs: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },

  content: {
    width: '100%',
  },
};
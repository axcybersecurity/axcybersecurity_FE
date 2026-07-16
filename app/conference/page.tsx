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
    <main className="conference-page">
      <section className="conference-header">
        <h1 className="conference-h1">CS Top Conferences</h1>

        <p className="conference-description">
          연구 분야별 주요 컨퍼런스와 마감기한을 확인할 수 있습니다.
        </p>

        <div className="conference-tabArea">
          <span className="conference-tabLabel">Subject Filter:</span>

          <nav className="conference-tabs">
            {tabs.map((item) => {
              const isActive = currentTab === item.value;

              return (
                <Link
                  key={item.value}
                  href={item.href}
                  className={`tab-link ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </section>

      <section className="conference-content">
        {currentTab === 'ai' && <AIContent />}
        {currentTab === 'security' && <SecurityContent />}
        {currentTab === 'blockchain' && <BlockchainContent />}
      </section>
    </main>
  );
}

 
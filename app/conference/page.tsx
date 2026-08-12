import Link from 'next/link';
import TopContent from './components/TopContent';
import NonTopContent from './components/NonTopContent';

type ConferenceTab = 'top' | 'non-top';

type ConferencePageProps = {
  searchParams: Promise<{
    tab?: string;
  }>;
};

const tabs: {
  label: string;
  value: ConferenceTab;
  href: string;
}[] = [
  {
    label: 'Top CS',
    value: 'top',
    href: '/conference?tab=top',
  },
  {
    label: 'Non-top',
    value: 'non-top',
    href: '/conference?tab=non-top',
  },
];

export default async function ConferencePage({ searchParams }: ConferencePageProps) {
  const { tab } = await searchParams;

  const currentTab: ConferenceTab = tab === 'non-top' ? 'non-top' : 'top';

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
        {currentTab === 'top' && <TopContent />}
        {currentTab === 'non-top' && <NonTopContent />}
      </section>
    </main>
  );
}

 

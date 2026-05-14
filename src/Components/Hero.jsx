import './Hero.css';

const STATS = [
  { value: '2.4M+', label: 'Customers' },
  { value: '£180B', label: 'Assets managed' },
  { value: '98.9%', label: 'Uptime SLA' },
  { value: '4.8★', label: 'App rating' },
];

export default function Hero({ onOpenAccount }) {
  return (
    <section className="hero">
      {/* Background geometry */}
      <div className="hero__bg">
        <div className="hero__grid" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__diagonal" />
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          <p className="section-label animate-fadeUp delay-1">
            Banking reimagined
          </p>

          <h1 className="hero__heading animate-fadeUp delay-2">
            Your money,
            <br />
            <em>exactly</em> where
            <br />
            it should be.
          </h1>

          <p className="hero__body animate-fadeUp delay-3">
            NotNatWest delivers modern banking with old-world trust. Seamless
            accounts, intelligent lending, and wealth tools built for the way
            you actually live.
          </p>

          <div className="hero__cta-group animate-fadeUp delay-4">
            <a href="#accounts" className="btn-primary">
              Explore Accounts
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#loans" className="btn-ghost">
              View Loan Services
            </a>
          </div>
        </div>

        {/* Dashboard card mockup */}
        <div className="hero__card-wrap animate-fadeIn delay-3">
          <div className="hero__card">
            <div className="hero__card-header">
              <span className="hero__card-tag">Current Account</span>
              <span className="hero__card-badge">● Live</span>
            </div>
            <div className="hero__card-balance">
              <span className="hero__card-label">Available Balance</span>
              <span className="hero__card-amount">£24,810.50</span>
            </div>
            <div className="hero__card-divider" />
            <div className="hero__card-stats">
              <div>
                <span className="hero__card-stat-label">Income</span>
                <span className="hero__card-stat-value hero__card-stat-value--up">
                  +£5,200
                </span>
              </div>
              <div>
                <span className="hero__card-stat-label">Spending</span>
                <span className="hero__card-stat-value hero__card-stat-value--down">
                  -£1,840
                </span>
              </div>
              <div>
                <span className="hero__card-stat-label">Savings</span>
                <span className="hero__card-stat-value">£8,100</span>
              </div>
            </div>
            {/* Mini bar chart */}
            <div className="hero__chart">
              {[40, 65, 45, 80, 60, 90, 70, 55, 85, 75, 95, 68].map((h, i) => (
                <div
                  key={i}
                  className="hero__bar"
                  style={{ '--h': `${h}%`, '--delay': `${i * 0.05}s` }}
                />
              ))}
            </div>
            <div className="hero__card-chip" />
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="hero__stats">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`hero__stat animate-fadeUp delay-${i + 2}`}
          >
            <span className="hero__stat-value">{s.value}</span>
            <span className="hero__stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

import { useState } from 'react';
import './Accounts.css';

const TABS = ['Checking', 'Savings'];

const ACCOUNTS = {
  Checking: [
    {
      name: 'Everyday Current',
      tier: 'Essential',
      rate: null,
      fee: '£0/mo',
      perks: [
        'No monthly fees, ever',
        'Contactless & Apple/Google Pay',
        'Instant transaction alerts',
        'Overdraft up to £1,000',
        '24/7 in-app support',
      ],
      cta: 'Open Checking',
      featured: false,
    },
    {
      name: 'Premier Current',
      tier: 'Signature',
      rate: null,
      fee: '£12/mo',
      perks: [
        'Worldwide fee-free spending',
        'Dedicated relationship manager',
        'Airport lounge access',
        'Multi-currency wallet',
        'Emergency cash abroad',
        'Premium travel insurance',
      ],
      cta: 'Open Premier',
      featured: true,
    },
    {
      name: 'Business Current',
      tier: 'Commercial',
      rate: null,
      fee: '£8/mo',
      perks: [
        'Unlimited UK transfers',
        'Integrated accounting tools',
        'Business overdraft facility',
        'Bulk payment processing',
        'Dedicated business helpline',
      ],
      cta: 'Open Business',
      featured: false,
    },
  ],
  Savings: [
    {
      name: 'Instant Access',
      tier: 'Flexible',
      rate: '4.10% AER',
      fee: 'No minimum',
      perks: [
        'Withdraw anytime, penalty-free',
        'Interest paid monthly',
        'FSCS protected up to £85,000',
        'Open with just £1',
        'Automated savings rules',
      ],
      cta: 'Start Saving',
      featured: false,
    },
    {
      name: 'Fixed Rate Bond',
      tier: 'Growth',
      rate: '5.25% AER',
      fee: '£500 minimum',
      perks: [
        'Market-leading fixed rate',
        '1, 2 or 3 year terms',
        'Interest paid annually',
        'FSCS protected',
        'Guaranteed returns',
        'Inflation-beating yield',
      ],
      cta: 'Lock In Rate',
      featured: true,
    },
    {
      name: 'Junior Saver',
      tier: 'Family',
      rate: '4.75% AER',
      fee: 'No minimum',
      perks: [
        'For under-18s',
        'Tax-free interest',
        'Parental controls built-in',
        'Gamified savings goals',
        'Access at 18',
      ],
      cta: 'Open Junior',
      featured: false,
    },
  ],
};

export default function Accounts() {
  const [activeTab, setActiveTab] = useState('Checking');

  return (
    <section id="accounts" className="accounts">
      <div className="accounts__inner">
        {/* Header */}
        <div className="accounts__header">
          <p className="section-label">Accounts</p>
          <h2 className="section-heading">
            Banking that <em>works for you</em>
          </h2>
          <p className="accounts__subtitle">
            Whether you need everyday flexibility or serious savings growth, we
            have an account crafted to match your life.
          </p>

          {/* Tab Toggle */}
          <div className="accounts__tabs">
            {TABS.map((tab) => (
              <button
                key={tab}
                className={`accounts__tab ${
                  activeTab === tab ? 'accounts__tab--active' : ''
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab} Accounts
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div className="accounts__grid">
          {ACCOUNTS[activeTab].map((acc) => (
            <div
              key={acc.name}
              className={`acc-card ${acc.featured ? 'acc-card--featured' : ''}`}
            >
              {acc.featured && (
                <div className="acc-card__ribbon">Most Popular</div>
              )}

              <div className="acc-card__header">
                <span className="acc-card__tier">{acc.tier}</span>
                <h3 className="acc-card__name">{acc.name}</h3>

                {acc.rate ? (
                  <div className="acc-card__rate-wrap">
                    <span className="acc-card__rate">{acc.rate}</span>
                    <span className="acc-card__rate-label">variable rate</span>
                  </div>
                ) : (
                  <div className="acc-card__fee-wrap">
                    <span className="acc-card__fee">{acc.fee}</span>
                    <span className="acc-card__fee-label">monthly fee</span>
                  </div>
                )}
              </div>

              <div className="acc-card__divider" />

              <ul className="acc-card__perks">
                {acc.perks.map((p) => (
                  <li key={p}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2 7l3.5 3.5L12 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={acc.featured ? 'btn-primary' : 'btn-ghost'}
              >
                {acc.cta}
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* FSCS note */}
        <p className="accounts__fscs">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle
              cx="7"
              cy="7"
              r="6"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M7 6v4M7 4.5v.5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
          All NotNatWest accounts are FSCS protected up to £85,000 per person.
        </p>
      </div>
    </section>
  );
}

import { useState } from 'react';
import './Loans.css';

const LOANS = [
  {
    icon: '🏠',
    category: 'Mortgage',
    name: 'Home Ownership',
    rate: 'From 4.29%',
    term: 'Up to 35 years',
    amount: 'Up to £2M',
    desc: 'Competitive fixed and tracker rates with dedicated mortgage advisers to guide every step of your property journey.',
    tags: ['Fixed Rate', 'Tracker', 'Help to Buy'],
  },
  {
    icon: '🚗',
    category: 'Auto',
    name: 'Vehicle Finance',
    rate: 'From 6.9%',
    term: '12–72 months',
    amount: '£3K – £75K',
    desc: 'Drive away sooner with flexible hire purchase, PCP, or outright loan options for new and used vehicles.',
    tags: ['PCP', 'Hire Purchase', 'EV Incentive'],
  },
  {
    icon: '💼',
    category: 'Personal',
    name: 'Personal Loan',
    rate: 'From 5.9%',
    term: '1–7 years',
    amount: '£1K – £50K',
    desc: "Fund life's big moments — from home improvements to consolidating debts — with no arrangement fees.",
    tags: ['No Fees', 'Early Repayment', 'Same-Day'],
  },
  {
    icon: '🎓',
    category: 'Education',
    name: 'Student Finance',
    rate: 'From 3.5%',
    term: 'Up to 10 years',
    amount: 'Up to £30K',
    desc: "Support your studies or a family member's future with flexible repayment that fits your post-graduation income.",
    tags: ['Deferred Start', 'Income-Linked', 'Bursaries'],
  },
  {
    icon: '🏗️',
    category: 'Business',
    name: 'Business Lending',
    rate: 'From 7.5%',
    term: '1–15 years',
    amount: '£25K – £5M',
    desc: 'Fuel expansion, manage cash flow, or invest in assets with tailored commercial lending solutions.',
    tags: ['Term Loan', 'Asset Finance', 'Revolving Credit'],
  },
  {
    icon: '♻️',
    category: 'Green',
    name: 'Green Improvement',
    rate: 'From 3.9%',
    term: '3–15 years',
    amount: '£5K – £100K',
    desc: 'Lower your bills and carbon footprint with preferential rates for solar, EV charging, insulation, and heat pumps.',
    tags: ['Solar', 'Heat Pumps', 'EV Charging'],
  },
];

export default function Loans() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="loans" className="loans">
      {/* Divider line */}
      <div className="loans__rule">
        <span />
        <span className="loans__rule-diamond" />
        <span />
      </div>

      <div className="loans__inner">
        {/* Header */}
        <div className="loans__header">
          <div className="loans__header-left">
            <p className="section-label">Loan Services</p>
            <h2 className="section-heading">
              Lending that <em>opens doors</em>
            </h2>
          </div>
          <div className="loans__header-right">
            <p className="loans__subtitle">
              From your first home to your next venture, NotNatWest offers
              transparent, flexible lending with no hidden charges and decisions
              you can trust.
            </p>
            <a href="#" className="btn-ghost">
              Talk to an Adviser
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
        </div>

        {/* Loan grid */}
        <div className="loans__grid">
          {LOANS.map((loan, i) => (
            <div
              key={loan.name}
              className={`loan-card ${
                hovered === i ? 'loan-card--hovered' : ''
              }`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="loan-card__icon">{loan.icon}</div>

              <div className="loan-card__meta">
                <span className="loan-card__category">{loan.category}</span>
                <h3 className="loan-card__name">{loan.name}</h3>
              </div>

              <div className="loan-card__figures">
                <div className="loan-card__figure">
                  <span className="loan-card__figure-value">{loan.rate}</span>
                  <span className="loan-card__figure-label">Rate APR</span>
                </div>
                <div className="loan-card__figure">
                  <span className="loan-card__figure-value">{loan.term}</span>
                  <span className="loan-card__figure-label">Term</span>
                </div>
                <div className="loan-card__figure">
                  <span className="loan-card__figure-value">{loan.amount}</span>
                  <span className="loan-card__figure-label">Amount</span>
                </div>
              </div>

              <p className="loan-card__desc">{loan.desc}</p>

              <div className="loan-card__tags">
                {loan.tags.map((tag) => (
                  <span key={tag} className="loan-card__tag">
                    {tag}
                  </span>
                ))}
              </div>

              <a href="#" className="loan-card__cta">
                Apply Now
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

        {/* Representative example */}
        <div className="loans__disclaimer">
          <p>
            <strong>Representative example:</strong> Personal loan of £10,000
            over 48 months at 5.9% APR (fixed). Monthly repayments of £234.85.
            Total amount repayable £11,272.80. Your rate may vary. Subject to
            status and eligibility.
          </p>
        </div>
      </div>
    </section>
  );
}

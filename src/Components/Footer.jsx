import './Footer.css';

const COLS = [
  {
    title: 'Accounts',
    links: [
      'Everyday Current',
      'Premier Current',
      'Business Current',
      'Instant Access',
      'Fixed Rate Bond',
      'Junior Saver',
    ],
  },
  {
    title: 'Services',
    links: [
      'Personal Loans',
      'Mortgages',
      'Vehicle Finance',
      'Business Lending',
      'Green Loans',
      'Student Finance',
    ],
  },
  {
    title: 'Company',
    links: [
      'About NotNatWest',
      'Careers',
      'Press Room',
      'Investor Relations',
      'Sustainability',
      'Contact Us',
    ],
  },
  {
    title: 'Legal',
    links: [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'Accessibility',
      'Regulatory Info',
      'Complaints',
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__brand">
          <div className="footer__mark">N</div>
          <div className="footer__name">
            Not<em>Nat</em>West
          </div>
          <p className="footer__desc">
            Straightforward banking built on transparency, security, and the
            belief that everyone deserves better.
          </p>
          <a href="tel:+448001234567" className="footer__phone">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 3h3l1.5 3.5-2 1.5a9 9 0 003.5 3.5L10.5 9 14 10.5V14a1 1 0 01-1 1C6 15 1 10 1 4a1 1 0 011-1z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            +1 866 778 9027
          </a>
        </div>

        <div className="footer__links-grid">
          {COLS.map((col) => (
            <div key={col.title}>
              <p className="footer__col-title">{col.title}</p>
              <div className="footer__col-links">
                {col.links.map((lk) => (
                  <a key={lk} href="#" className="footer__col-link">
                    {lk}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">
          © 2025 NotNatWest Bank plc. Authorised by the PRA and regulated by the
          FCA.
        </p>
        <div className="footer__fscs">
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1L2 3.5v4c0 2.5 2 4.5 5 5.5 3-1 5-3 5-5.5v-4L7 1z"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </svg>
          FSCS Protected
        </div>
        <div className="footer__legal">
          {[
            'Privacy Policy',
            'Terms of Service',
            'Cookies',
            'Accessibility',
          ].map((l) => (
            <a key={l} href="#">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

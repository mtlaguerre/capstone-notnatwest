export default function AccountsSection({ onSetModal }) {

    return (
        <>
            <section className="section accounts-section" id="accounts">
					<div className="section-label">Accounts</div>
					<div className="section-title">Find the right account for you</div>
					<p className="section-sub">From everyday spending to long-term saving, we have a straightforward account with no hidden surprises.</p>
					<div className="accounts-grid">

						<div className="account-card" onClick={() => onSetModal("checking")}>
							<div className="account-icon icon-checking">💳</div>
							<span className="account-tag tag-checking">Checking</span>
							<h3>Everyday Current Account</h3>
							<p>Your money, where you need it. Instant payments, zero monthly fees, and a debit card that works everywhere.</p>
							<ul className="account-features">
								<li>No monthly fee, ever</li>
								<li>Fee-free overseas spending up to £1,000/mo</li>
								<li>Instant bank transfers 24/7</li>
								<li>Contactless, Apple Pay & Google Pay</li>
								<li>£500 arranged overdraft available</li>
							</ul>
							<button className="account-cta" onClick={e => { e.stopPropagation(); onSetModal("checking"); }}>Open Checking Account →</button>
						</div>

						<div className="account-card featured" onClick={() => onSetModal("savings")}>
							<div className="account-icon icon-savings">📈</div>
							<span className="account-tag tag-savings">Savings</span>
							<h3>High-Yield Savings Account</h3>
							<p>Let your money work as hard as you do. Our savings rate consistently outperforms the high-street average.</p>
							<ul className="account-features">
								<li>4.85% AER — updated monthly</li>
								<li>Instant access, no lock-in period</li>
								<li>Up to £85,000 FSCS protected</li>
								<li>Interest paid monthly to your account</li>
								<li>Seamlessly linked to current account</li>
							</ul>
							<div className="account-rate">4.85% <span>AER</span></div>
							<button className="account-cta primary-cta" onClick={e => { e.stopPropagation(); onSetModal("savings"); }}>Open Savings Account →</button>
						</div>

						<div className="account-card" onClick={() => onSetModal("premium")}>
							<div className="account-icon icon-premium">✦</div>
							<span className="account-tag tag-premium">Premium</span>
							<h3>Private Banking</h3>
							<p>Bespoke financial management for clients with complex needs. A dedicated relationship manager and exclusive access.</p>
							<ul className="account-features">
								<li>Dedicated private banker, always available</li>
								<li>Priority lending decisions</li>
								<li>Wealth management services</li>
								<li>Global concierge banking</li>
								<li>Enhanced FX rates for transfers</li>
							</ul>
							<button className="account-cta" onClick={e => { e.stopPropagation(); onSetModal("premium"); }}>Enquire Now →</button>
						</div>

					</div>
				</section>
        </>
    );
}
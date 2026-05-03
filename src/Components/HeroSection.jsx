export default function HeroSection({ onScrollTo }) {

    return (
        <>
            <section className="hero" id="home">
                <div className="hero-bg" />
                <div className="hero-grid" />
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="hero-badge-dot" />
                        FSCS Protected · FCA Regulated
                    </div>
                    <h1>
                        Banking built for<br />
                        <em>your ambition.</em>
                    </h1>
                    <p className="hero-sub">
                        NotNatWest gives you the tools, rates, and service of a premium bank — without the queues, the jargon, or the small print buried on page 47.
                    </p>
                    <div className="hero-actions">
                        <button className="btn-primary" onClick={() => onScrollTo("accounts")}>Explore Accounts</button>
                        <button className="btn-ghost" onClick={() => onScrollTo("loans")}>View Loan Rates</button>
                    </div>
                </div>
                <div className="hero-stats">
                    <div className="stat-card">
                        <div className="stat-label">Savings Rate AER</div>
                        <div className="stat-value">4.85%</div>
                        <div className="stat-change">↑ Market-leading rate</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-label">Customers Served</div>
                        <div className="stat-value">2.1M+</div>
                        <div className="stat-change">↑ Across the UK</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-label">Trustpilot Score</div>
                        <div className="stat-value">4.8 / 5</div>
                        <div className="stat-change">↑ 98,000 reviews</div>
                    </div>
                </div>
            </section>
        </>
    );
}
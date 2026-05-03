export default function Footer({ onSetModal }) {

    return (
        <>
            <footer className="footer">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="fb-logo">Not<span>NatWest</span></div>
                        <p>Modern banking built on trust, transparency, and technology. Serving over 2.1 million customers across the United Kingdom since 2018.</p>
                        <div className="footer-phone">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.59 3.38 2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.49a16 16 0 0 0 5.61 5.61l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            +1 866 778 9027
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>Accounts</h4>
                        <ul>
                            <li><button onClick={() => onSetModal("checking")}>Checking Account</button></li>
                            <li><button onClick={() => onSetModal("savings")}>Savings Account</button></li>
                            <li><button onClick={() => onSetModal("premium")}>Private Banking</button></li>
                            <li><a href="#">Student Account</a></li>
                            <li><a href="#">Business Account</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press Room</a></li>
                            <li><a href="#">Investor Relations</a></li>
                            <li><a href="#">Sustainability</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                            <li><a href="#">Complaints</a></li>
                            <li><a href="#">Accessibility</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 NotNatWest plc. Authorized by the Prudential Regulation Authority and regulated by the Financial Conduct Authority (FCA No. 12345678). Registered in England & Wales No. 09876543. FSCS protected up to £85,000.</p>
                    <div className="footer-badges">
                        <span className="fscs-badge">FSCS</span>
                        <span className="fscs-badge">FCA</span>
                        <span className="fscs-badge">PRA</span>
                    </div>
                </div>
            </footer>
        </>
    );
}
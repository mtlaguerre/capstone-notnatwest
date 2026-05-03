export default function Navigation({ activeSection, onScrollTo, onSetModal }) {

    return (
        <>
            <nav className="nav">
					<div className="nav-logo">Not<span>NatWest</span></div>
					<ul className="nav-links">
						<li><button className={activeSection === "home" ? "active" : ""} onClick={() => onScrollTo("home")}>Home</button></li>
						<li><button className={activeSection === "accounts" ? "active" : ""} onClick={() => onScrollTo("accounts")}>Accounts</button></li>
						<li><button className={activeSection === "loans" ? "active" : ""} onClick={() => onScrollTo("loans")}>Loans</button></li>
						<li><button className="nav-cta" onClick={() => onSetModal("checking")}>Open Account</button></li>
					</ul>
				</nav>
        </>
    );
}
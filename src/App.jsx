import { useState } from "react";
import Navigation from './Components/Navigation';
import HeroSection from './Components/HeroSection';
import AccountsSection from './Components/AccountsSection';
import LoansSection from './Components/LoansSection';
import Footer from './Components/Footer';
import './App.css'

function App() {

	const [modal, setModal] = useState(null);
		const [toast, setToast] = useState(null);
		const [activeSection, setActiveSection] = useState("home");
	
		const showToast = (msg) => {
			setToast(msg);
			setTimeout(() => setToast(null), 3200);
		};
	
		const handleSubmit = (action) => {
			setModal(null);
			showToast(`${action} submitted — we'll be in touch shortly.`);
		};
	
		const scrollTo = (id) => {
			setActiveSection(id);
			document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
		};
	
		return (
			<>
				<div className="nnw-root">
	
					{/* NAV */}
					<Navigation activeSection={activeSection} onScrollTo={scrollTo} onSetModal={setModal} />
	
					{/* HERO */}
					<HeroSection onScrollTo={scrollTo} />
	
					{/* ACCOUNTS */}
					<AccountsSection onSetModal={setModal} />
	
					{/* LOANS */}
					<LoansSection onSetModal={setModal} />
	
					{/* FOOTER */}
					<Footer onSetModal={setModal} />
	
					{/* MODAL */}
					{modal && <Modal type={modal} onClose={() => setModal(null)} onSubmit={handleSubmit} />}
	
					{/* TOAST */}
					{toast && (
						<div className="toast">
							<span className="toast-dot" />
							{toast}
						</div>
					)}
	
				</div>
			</>
		);
}

export default App

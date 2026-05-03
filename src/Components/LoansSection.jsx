import { useState } from "react";

const LOAN_TYPES = [
	{ icon: "🏠", label: "Home Loan", desc: "Competitive fixed and variable rates to help you get into the property market sooner.", rate: "5.49%", term: "Up to 30 yrs", amount: "Up to £1.5M" },
	{ icon: "🚗", label: "Auto Loan", desc: "Flexible repayment terms for new and pre-owned vehicles with fast approval decisions.", rate: "6.9%", term: "Up to 7 yrs", amount: "Up to £75K" },
	{ icon: "🎓", label: "Student Loan", desc: "Invest in your future with low-interest financing for tuition, housing, and education costs.", rate: "3.75%", term: "Up to 10 yrs", amount: "Up to £50K" },
	{ icon: "💼", label: "Business Loan", desc: "Fund your next chapter — from startup capital to expansion financing for established firms.", rate: "7.2%", term: "Up to 15 yrs", amount: "Up to £5M" },
];

function LoanCalculator() {
    const [amount, setAmount] = useState(25000);
    const [rate, setRate] = useState(6.9);
    const [years, setYears] = useState(5);

    const monthly = (() => {
        const r = rate / 100 / 12;
        const n = years * 12;
        if (r === 0) return amount / n;
        return (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    })();

    const total = monthly * years * 12;
    const interest = total - amount;

    return (
        <div className="calc-panel">
            <h3>Loan Repayment Estimator</h3>
            <div className="calc-grid">
                <div className="calc-field">
                    <label>Loan Amount (£)</label>
                    <input type="number" value={amount} min={1000} max={5000000} step={500} onChange={e => setAmount(+e.target.value)} />
                </div>
                <div className="calc-field">
                    <label>Interest Rate (%)</label>
                    <input type="number" value={rate} min={1} max={20} step={0.1} onChange={e => setRate(+e.target.value)} />
                </div>
                <div className="calc-field">
                    <label>Term (Years)</label>
                    <select value={years} onChange={e => setYears(+e.target.value)}>
                        {[1, 2, 3, 5, 7, 10, 15, 20, 25, 30].map(y => <option key={y} value={y}>{y} years</option>)}
                    </select>
                </div>
            </div>
            <div className="calc-result">
                <div className="calc-result-main">
                    <div className="cr-label">Monthly Payment</div>
                    <div className="cr-value">£{monthly.toFixed(2)}</div>
                </div>
                <div className="calc-result-detail">
                    <div className="crd-item">
                        <div className="crd-label">Total Repayable</div>
                        <div className="crd-value">£{total.toLocaleString('en-GB', { maximumFractionDigits: 0 })}</div>
                    </div>
                    <div className="crd-item">
                        <div className="crd-label">Total Interest</div>
                        <div className="crd-value">£{interest.toLocaleString('en-GB', { maximumFractionDigits: 0 })}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function LoansSection({ onSetModal }) {

    return (
        <>
            <section className="section loans-section" id="loans">
                <div className="section-label">Loan Services</div>
                <div className="section-title">Lending on your terms</div>
                <p className="section-sub">Transparent rates, no arrangement fees, and decisions in as little as 60 seconds.</p>
                <div className="loans-grid">
                    {LOAN_TYPES.map(loan => (
                        <div className="loan-card" key={loan.label} onClick={() => onSetModal("loan")}>
                            <div className="loan-icon">{loan.icon}</div>
                            <h3>{loan.label}</h3>
                            <p>{loan.desc}</p>
                            <div className="loan-meta">
                                <div className="loan-meta-item">
                                    <div className="lm-label">From</div>
                                    <div className="lm-value">{loan.rate}</div>
                                </div>
                                <div className="loan-meta-item">
                                    <div className="lm-label">Term</div>
                                    <div className="lm-value">{loan.term}</div>
                                </div>
                                <button className="loan-apply" onClick={e => { e.stopPropagation(); onSetModal("loan"); }}>Apply →</button>
                            </div>
                        </div>
                    ))}
                </div>
                <LoanCalculator />
            </section>
        </>
    );
}
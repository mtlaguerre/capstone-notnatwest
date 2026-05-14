import { useState } from 'react';
import './OpenAccount.css';

const ACCOUNT_TYPES = [
  {
    id: 'everyday-current',
    label: 'Everyday Current',
    category: 'Checking',
    desc: 'No monthly fees, instant alerts, overdraft up to £1,000.',
    icon: '💳',
  },
  {
    id: 'premier-current',
    label: 'Premier Current',
    category: 'Checking',
    desc: 'Worldwide fee-free spending, lounges, multi-currency wallet.',
    icon: '✦',
  },
  {
    id: 'business-current',
    label: 'Business Current',
    category: 'Checking',
    desc: 'Unlimited UK transfers, accounting tools, bulk payments.',
    icon: '💼',
  },
  {
    id: 'instant-access',
    label: 'Instant Access Savings',
    category: 'Savings',
    desc: '4.10% AER — withdraw anytime, interest paid monthly.',
    icon: '📈',
  },
  {
    id: 'fixed-rate-bond',
    label: 'Fixed Rate Bond',
    category: 'Savings',
    desc: '5.25% AER — guaranteed returns over 1, 2 or 3 year terms.',
    icon: '🔒',
  },
  {
    id: 'junior-saver',
    label: 'Junior Saver',
    category: 'Savings',
    desc: '4.75% AER — tax-free savings for under-18s.',
    icon: '🎓',
  },
];

const STEPS = ['Personal Details', 'Account Type', 'Review'];

export default function OpenAccount({ onBack }) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    city: '',
    accountType: '',
  });
  const [errors, setErrors] = useState({});

  const update = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: '' }));
  };

  const validateStep0 = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'First name is required.';
    if (!form.lastName.trim()) e.lastName = 'Last name is required.';
    if (!form.city.trim()) e.city = 'City is required.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep1 = () => {
    if (!form.accountType) {
      setErrors({ accountType: 'Please select an account type.' });
      return false;
    }
    return true;
  };

  const next = () => {
    if (step === 0 && !validateStep0()) return;
    if (step === 1 && !validateStep1()) return;
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const back = () => {
    if (step === 0) {
      onBack();
      return;
    }
    setStep((s) => s - 1);
  };

  const submit = () => setSubmitted(true);

  const selectedAccount = ACCOUNT_TYPES.find((a) => a.id === form.accountType);

  if (submitted) {
    return (
      <div className="oa-wrap">
        <div className="oa-success">
          <div className="oa-success__icon">✦</div>
          <h2 className="oa-success__heading">Application Received</h2>
          <p className="oa-success__body">
            Welcome,{' '}
            <strong>
              {form.firstName} {form.lastName}
            </strong>
            . Your <strong>{selectedAccount?.label}</strong> application has
            been submitted. We'll be in touch within 1 business day.
          </p>
          <button className="btn-primary oa-success__btn" onClick={onBack}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="oa-wrap">
      {/* Background geometry */}
      <div className="oa-bg">
        <div className="oa-bg__grid" />
        <div className="oa-bg__orb" />
      </div>

      <div className="oa-shell">
        {/* Left panel */}
        <aside className="oa-aside">
          <button className="oa-back" onClick={back}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 3L5 8l5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {step === 0 ? 'Back to site' : 'Previous step'}
          </button>

          <div className="oa-aside__brand">
            <span className="oa-aside__mark">N</span>
            <span className="oa-aside__name">
              Not<em>Nat</em>West
            </span>
          </div>

          <h1 className="oa-aside__heading">
            Open your
            <br />
            <em>account</em>
            <br />
            today.
          </h1>

          <p className="oa-aside__body">
            It takes under 3 minutes. No paperwork, no branch visit — just a
            straightforward application built around you.
          </p>

          {/* Step indicators */}
          <div className="oa-steps">
            {STEPS.map((label, i) => (
              <div
                key={label}
                className={`oa-step ${i === step ? 'oa-step--active' : ''} ${
                  i < step ? 'oa-step--done' : ''
                }`}
              >
                <div className="oa-step__dot">
                  {i < step ? (
                    <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2 7l3.5 3.5L12 3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <span>{i + 1}</span>
                  )}
                </div>
                {i < STEPS.length - 1 && <div className="oa-step__line" />}
                <span className="oa-step__label">{label}</span>
              </div>
            ))}
          </div>

          <div className="oa-aside__security">
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1L2 3.5v4c0 2.5 2 4.5 5 5.5 3-1 5-3 5-5.5v-4L7 1z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
            256-bit encrypted · FSCS protected
          </div>
        </aside>

        {/* Form panel */}
        <div className="oa-form-panel">
          <div className="oa-progress">
            <div
              className="oa-progress__bar"
              style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
            />
          </div>

          <div className="oa-form-inner">
            <p className="oa-step-label">
              Step {step + 1} of {STEPS.length}
            </p>

            {/* ── Step 0: Personal Details ── */}
            {step === 0 && (
              <div className="oa-section animate-fadeUp">
                <h2 className="oa-form-heading">Tell us about yourself</h2>
                <p className="oa-form-sub">
                  We'll use these details to set up your account profile.
                </p>

                <div className="oa-field-row">
                  <div
                    className={`oa-field ${
                      errors.firstName ? 'oa-field--error' : ''
                    }`}
                  >
                    <label className="oa-label">First Name</label>
                    <input
                      className="oa-input"
                      type="text"
                      placeholder="e.g. James"
                      value={form.firstName}
                      onChange={(e) => update('firstName', e.target.value)}
                      autoFocus
                    />
                    {errors.firstName && (
                      <span className="oa-error">{errors.firstName}</span>
                    )}
                  </div>

                  <div
                    className={`oa-field ${
                      errors.lastName ? 'oa-field--error' : ''
                    }`}
                  >
                    <label className="oa-label">Last Name</label>
                    <input
                      className="oa-input"
                      type="text"
                      placeholder="e.g. Pemberton"
                      value={form.lastName}
                      onChange={(e) => update('lastName', e.target.value)}
                    />
                    {errors.lastName && (
                      <span className="oa-error">{errors.lastName}</span>
                    )}
                  </div>
                </div>

                <div
                  className={`oa-field ${errors.city ? 'oa-field--error' : ''}`}
                >
                  <label className="oa-label">City of Residence</label>
                  <input
                    className="oa-input"
                    type="text"
                    placeholder="e.g. London"
                    value={form.city}
                    onChange={(e) => update('city', e.target.value)}
                  />
                  {errors.city && (
                    <span className="oa-error">{errors.city}</span>
                  )}
                </div>
              </div>
            )}

            {/* ── Step 1: Account Type ── */}
            {step === 1 && (
              <div className="oa-section animate-fadeUp">
                <h2 className="oa-form-heading">Choose your account</h2>
                <p className="oa-form-sub">
                  Select the account that fits your needs. You can always
                  upgrade later.
                </p>

                {errors.accountType && (
                  <p className="oa-error oa-error--block">
                    {errors.accountType}
                  </p>
                )}

                {['Checking', 'Savings'].map((cat) => (
                  <div key={cat} className="oa-account-group">
                    <p className="oa-account-group__label">{cat} Accounts</p>
                    <div className="oa-account-options">
                      {ACCOUNT_TYPES.filter((a) => a.category === cat).map(
                        (acc) => (
                          <label
                            key={acc.id}
                            className={`oa-acc-option ${
                              form.accountType === acc.id
                                ? 'oa-acc-option--selected'
                                : ''
                            }`}
                          >
                            <input
                              type="radio"
                              name="accountType"
                              value={acc.id}
                              checked={form.accountType === acc.id}
                              onChange={() => {
                                update('accountType', acc.id);
                                setErrors({});
                              }}
                            />
                            <span className="oa-acc-option__icon">
                              {acc.icon}
                            </span>
                            <span className="oa-acc-option__body">
                              <span className="oa-acc-option__name">
                                {acc.label}
                              </span>
                              <span className="oa-acc-option__desc">
                                {acc.desc}
                              </span>
                            </span>
                            <span className="oa-acc-option__check">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 14 14"
                                fill="none"
                              >
                                <path
                                  d="M2 7l3.5 3.5L12 3"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </label>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ── Step 2: Review ── */}
            {step === 2 && (
              <div className="oa-section animate-fadeUp">
                <h2 className="oa-form-heading">Review your application</h2>
                <p className="oa-form-sub">
                  Everything look right? Submit to open your account.
                </p>

                <div className="oa-review">
                  <div className="oa-review__group">
                    <p className="oa-review__label">Personal Details</p>
                    <div className="oa-review__row">
                      <span>Full Name</span>
                      <span>
                        {form.firstName} {form.lastName}
                      </span>
                    </div>
                    <div className="oa-review__row">
                      <span>City</span>
                      <span>{form.city}</span>
                    </div>
                  </div>

                  <div className="oa-review__group">
                    <p className="oa-review__label">Selected Account</p>
                    <div className="oa-review__account">
                      <span className="oa-review__account-icon">
                        {selectedAccount?.icon}
                      </span>
                      <span>
                        <strong>{selectedAccount?.label}</strong>
                        <em>{selectedAccount?.category}</em>
                      </span>
                    </div>
                  </div>

                  <div className="oa-review__notice">
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
                    By submitting you agree to NotNatWest's{' '}
                    <a href="#">Terms of Service</a> and{' '}
                    <a href="#">Privacy Policy</a>.
                  </div>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="oa-nav">
              {step < 2 ? (
                <button className="btn-primary oa-nav__next" onClick={next}>
                  {step === 1 ? 'Review Application' : 'Continue'}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7h10M8 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  className="btn-primary oa-nav__next oa-nav__submit"
                  onClick={submit}
                >
                  Register Account
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7l3.5 3.5L12 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

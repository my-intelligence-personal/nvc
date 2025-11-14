import './Plans.css'

function Plans() {
  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const plans = [
    {
      name: 'STARTER',
      subtitle: 'For parents trying Yume for the first time.',
      price: '£9',
      features: [
        'Limited story library (e.g., 5 rotating stories per month)',
        'Basic co-creation (2 decision points per story)',
        'Standard AI visuals',
        'Parent or app narration (no custom parent voice)'
      ],
      bgColor: 'var(--blue-100)',
      textColor: 'var(--navy-800)'
    },
    {
      name: 'PLUS',
      subtitle: 'For parents who want a tailored bedtime experience.',
      price: '£19',
      features: [
        'Full story library access',
        'Enhanced co-creation (multiple decision points)',
        'Enhanced visuals',
        'Parent voice recording for narration',
        'Custom story length',
        'Sound effects',
        'Progress insights (sleep onset patterns & story engagement)',
        'Download stories for offline nights'
      ],
      bgColor: 'var(--blue-300)',
      textColor: 'var(--text-inverse)'
    },
    {
      name: 'INFINITE',
      subtitle: 'For parents who want every night to feel uniquely crafted.',
      price: '£29',
      features: [
        'Unlimited co-creation paths (branching stories with adaptive complexity)',
        "Personalized story worlds based on child's preferences",
        'Advanced sleep sensing (if available later)',
        'Adaptive bedtime rhythm (adjusts pacing to nightly patterns)',
        'Multi-child profiles',
        'Exclusive monthly story drops',
        'Priority access to new features'
      ],
      bgColor: 'var(--navy-600)',
      textColor: 'var(--text-inverse)',
      highlighted: true
    }
  ]

  const sharedFeatures = [
    { icon: '✨', label: 'Sleep Mode Lock' },
    { icon: '🌙', label: 'Blue-light–free mode' },
    { icon: '💤', label: 'Automatic soft ending' },
    { icon: '🔊', label: 'White noise after the story' }
  ]

  return (
    <section id="plans" className="plans">
      <div className="plans-container">
        <h2 className="plans-heading">
          Unlock the <em>magic</em>
        </h2>
        <div className="plans-cards">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`plan-card ${plan.highlighted ? 'highlighted' : ''}`}
              style={{
                background: plan.bgColor,
                color: plan.textColor
              }}
            >
              <div className="plan-header">
                <span className="plan-dream">dream</span>
                <span className="plan-name">{plan.name}</span>
              </div>
              <p className="plan-subtitle">{plan.subtitle}</p>
              <div className="plan-price">
                <span className="plan-amount">{plan.price}</span>
                <span className="plan-period">/ month</span>
              </div>
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="plan-feature">
                    <span className="plan-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="shared-features">
          <h3 className="shared-features-title">All plans include:</h3>
          <div className="shared-features-grid">
            {sharedFeatures.map((feature, index) => (
              <div key={index} className="shared-feature">
                <span className="shared-feature-icon">{feature.icon}</span>
                <span className="shared-feature-label">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="plans-cta">
          <button className="cta-primary-large" onClick={() => scrollTo('plans')}>
            Start your free bedtime trial
          </button>
          <button className="cta-secondary-large" onClick={() => scrollTo('plans')}>
            Or join the waitlist →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Plans


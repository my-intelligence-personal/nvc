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
      price: 'Free',
      isFree: true,
      features: [
        'Limited story library (5 rotating stories per month)',
        'Basic co-creation (2 decision points per story)',
        'Standard AI visuals'
      ],
      bgColor: 'var(--blue-100)',
      textColor: 'var(--navy-800)'
    },
    {
      name: 'PLUS',
      subtitle: 'For parents who want a tailored bedtime experience for their child.',
      price: '£5.99',
      features: [
        'Full story library access',
        'Enhanced co-creation (multiple decision points)',
        'Enhanced AI visuals',
        'Custom story length',
        'Sound effects',
        'Download stories for offline nights'
      ],
      bgColor: 'var(--blue-300)',
      textColor: 'var(--text-inverse)'
    },
    {
      name: 'INFINITE',
      subtitle: 'For parents who want every night to feel uniquely crafted for their child.',
      price: '£11.99',
      features: [
        'Unlimited co-creation paths (branching stories with adaptive complexity)',
        'Personalized story worlds based on child\'s preferences (animals, space, fairies, etc.)',
        'Multi-child profiles (for siblings)',
        'Exclusive story drops',
        'Priority access to new features'
      ],
      bgColor: 'var(--navy-600)',
      textColor: 'var(--text-inverse)',
      highlighted: true
    }
  ]

  const sharedFeatures = [
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
              <p className={`plan-subtitle ${plan.name === 'STARTER' ? 'plan-subtitle-single-line' : ''}`}>{plan.subtitle}</p>
              <div className="plan-price">
                <span className="plan-amount">{plan.price}</span>
                {!plan.isFree && <span className="plan-period">/ month</span>}
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
          <button className="cta-primary-large" onClick={() => scrollTo('waitlist')}>
            Join the waitlist
          </button>
        </div>
      </div>
    </section>
  )
}

export default Plans


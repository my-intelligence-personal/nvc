import './Testimonials.css'

// Customer testimonials - 4 total
const testimonials = [
  {
    name: 'Abir',
    parentOf: 'parent',
    image: '/assets/person 1.jpg',
    testimonial: 'What I find remarkable about Yume is that it does not simply remove technology, it transforms it.'
  },
  {
    name: 'Arzu',
    parentOf: 'parent',
    image: '/assets/person 2.jpg',
    testimonial: 'By turning any device into a soothing, e-ink–like tool, Yume respects the child\'s natural sensory needs and supports their transition into sleep in a gentle, developmentally aligned way.'
  },
  {
    name: 'Din',
    parentOf: 'parent',
    image: '/assets/person 3.jpg',
    testimonial: 'The calming colors, slow pace, and structured storytelling reduce sensory overload and create the kind of predictable routine that children need to feel safe and ready to rest.'
  },
  {
    name: 'Narmin',
    parentOf: 'parent',
    image: '/assets/person 4.jpg',
    testimonial: 'This transforms bedtime from a passive screen habit into a mindful experience that strengthens the parent–child bond.'
  }
]

// Data for the expert/specialist cards
const expertTestimonials = [
  {
    name: 'Mirna Ladkani',
    role: 'Clinical Psychologist and Behavioral Therapist',
    image: '/assets/specialist 1.jpg',
    testimonial: 'As a psychologist, I find Yume\'s approach well aligned with proven bedtime-routine strategies. Its calming stories, limited choices, and gentle cues support healthy sleep.'
  },
  {
    name: 'Soumaya Kawass',
    role: 'Psychomotor Therapist and Family Coach',
    image: '/assets/specialist 2.jpg',
    testimonial: 'As a psychomotor therapist with extensive experience working with children and supporting families, I see Yume as a deeply valuable and innovative solution to a very real problem in early childhood. Bedtime has increasingly become a source of overstimulation for young children due to bright screens, rapid visuals, and the constant flow of digital content. These elements directly affect sleep quality, emotional regulation, attention and overall development.'
  }
];


function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-heading">
          Turning imagination into <em>evidence.</em>
        </h2>

        {/* Expert Testimonials Section */}
        <div className="expert-testimonials">
          {expertTestimonials.map((expert, index) => (
            <div key={index} className="expert-card">
              <div className="expert-portrait-wrapper">
                <img src={expert.image} alt={expert.name} className="expert-portrait" />
              </div>
              <h3 className="expert-name">{expert.name}</h3>
              <p className="expert-role">{expert.role}</p>
              <p className="expert-quote">"{expert.testimonial}"</p>
            </div>
          ))}
        </div>

        {/* Divider Heading */}
        <h3 className="parents-heading">
          Ready to transform the lives of real parents
        </h3>

        {/* Parent Testimonials Grid */}
        <div className="parent-testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="parent-testimonial-tile">
              <div className="parent-portrait-wrapper">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name}, parent`}
                  className="parent-portrait"
                />
              </div>
              <div className="parent-info">
                <span className="parent-name">{testimonial.name}</span>
              </div>
              <p className="parent-quote">"{testimonial.testimonial}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials


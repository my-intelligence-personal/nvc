import './Testimonials.css'

function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      parentOf: 'parent of two',
      image: '/assets/father-daughter-using-yume.jpg', // Placeholder - replace with actual parent image
      testimonial: 'Yume has completely transformed our bedtime routine. My daughter actually looks forward to sleep now, and I love that we can still connect through stories even when I\'m traveling for work.'
    },
    {
      name: 'James Chen',
      parentOf: 'parents of one',
      image: '/assets/father-daughter-using-yume.jpg', // Placeholder - replace with actual parent image
      testimonial: 'The sleep mode lock is a game-changer. No more late-night app switching, and the blue-light filter means my son falls asleep faster. We\'ve seen a real difference in his sleep quality.'
    },
    {
      name: 'Emma Rodriguez',
      parentOf: 'soon to be a parent',
      image: '/assets/father-daughter-using-yume.jpg', // Placeholder - replace with actual parent image
      testimonial: 'As a busy parent, recording my voice for stories means everything. My kids hear me even when I\'m working late, and the AI visuals are so gentle and calming. Yume feels like magic.'
    }
  ]

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-heading">
          Stories from <em>real families</em>
        </h2>
        <div className="testimonials-cards">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">"{testimonial.testimonial}"</p>
              <div className="testimonial-footer">
                <div className="testimonial-portrait-wrapper">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name}, parent`}
                    className="testimonial-portrait"
                  />
                </div>
                <div className="testimonial-author">
                  <span className="testimonial-name">{testimonial.name}</span>
                  <span className="testimonial-parent-of">{testimonial.parentOf}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials


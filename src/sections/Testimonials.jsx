import { useEffect, useRef } from 'react'
import './Testimonials.css'

// Customer testimonials - 10 total
const testimonials = [
  {
    name: 'Michael',
    parentOf: 'parent of Saraha',
    image: '/assets/p1.jpg',
    testimonial: 'I can consider using Yume with my baby Saraha'
  },
  {
    name: 'David',
    parentOf: 'parent of one',
    image: '/assets/p2.jpg',
    testimonial: 'What I find remarkable about Yume is that it does not simply remove technology, it transforms it.'
  },
  {
    name: 'James',
    parentOf: 'parent of two',
    image: '/assets/p3.jpg',
    testimonial: 'By turning any device into a soothing, e-ink–like tool, Yume respects the child\'s natural sensory needs and supports their transition into sleep in a gentle, developmentally aligned way.'
  },
  {
    name: 'Sarah',
    parentOf: 'parent of one',
    image: '/assets/p4.jpg',
    testimonial: 'The calming colors, slow pace, and structured storytelling reduce sensory overload and create the kind of predictable routine that children need to feel safe and ready to rest.'
  },
  {
    name: 'Emma',
    parentOf: 'parent of two',
    image: '/assets/p5.jpg',
    testimonial: 'From a psychomotor perspective, the interactive storytelling component is especially meaningful.'
  },
  {
    name: 'Olivia',
    parentOf: 'parent of one',
    image: '/assets/p6.jpg',
    testimonial: 'Allowing the child to choose between story options awakens imagination, encourages symbolic play and supports cognitive and emotional expressional within a calm, regulated environment.'
  },
  {
    name: 'Robert & Jessica',
    parentOf: 'parents of two',
    image: '/assets/p7.jpg',
    testimonial: 'This transforms bedtime from a passive screen habit into a mindful experience that strengthens the parent–child bond.'
  },
  {
    name: 'Daniel & Emily',
    parentOf: 'parents of one',
    image: '/assets/p8.jpg',
    testimonial: 'Yume\'s ability to track non-invasive cues, adjust the pacing and end the story softly aligns beautifully with what we know about the nervous system and sleep onset.'
  },
  {
    name: 'Sophia',
    parentOf: 'parent of two',
    image: '/assets/p9.jpg',
    testimonial: 'Transitioning into white, pink, or brown noise afterward is another element that supports healthy sensory regulation and deep sleep.'
  },
  {
    name: 'Amanda & Christopher',
    parentOf: 'parents of two',
    image: '/assets/p10.jpg',
    testimonial: 'In my professional view, Yume is much more than a bedtime app, it is a thoughtful, research-informed tool that can truly support children\'s well-being, help parents build healthier routines, and enhance the quality of family life.'
  }
]

// Data for the expert/specialist cards
const expertTestimonials = [
  {
    name: 'Psychologist',
    role: 'Psychologist',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'As a psychologist, I find Yume\'s approach well aligned with proven bedtime-routine strategies. Its calming stories, limited choices, and gentle cues support healthy sleep.'
  },
  {
    name: 'Psychomotor Therapist',
    role: 'Psychomotor Therapist',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'As a psychomotor therapist with extensive experience working with children and supporting families, I see Yume as a deeply valuable and innovative solution to a very real problem in early childhood. Bedtime has increasingly become a source of overstimulation for young children due to bright screens, rapid visuals, and the constant flow of digital content. These elements directly affect sleep quality, emotional regulation, attention and overall development.'
  }
];

// Create arrays with 5 cards each for the two rows, then duplicate for infinite scroll effect
// Note: We have 11 testimonials total (including Saraha), so we'll use 5 in row1 and 5 in row2
const row1Cards = testimonials.slice(0, 5)
const row2Cards = testimonials.slice(5, 10)

// Duplicate each row to create seamless infinite scroll
const row1 = [...row1Cards, ...row1Cards]
const row2 = [...row2Cards, ...row2Cards]

// A single card component for reusability
const TestimonialCard = ({ testimonial, row, index }) => (
  <div key={`row${row}-${index}-${testimonial.name}`} className="testimonial-card">
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
)

function Testimonials() {
  const sectionRef = useRef(null)
  const row1Ref = useRef(null)
  const row2Ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const { top, height } = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate progress: 0 when section enters, 1 when it exits
      const progress = Math.max(0, Math.min(1, (windowHeight - top) / (windowHeight + height)))

      // Calculate translation distance
      // Each row has 5 cards duplicated, so we scroll through 5 cards worth
      const cardWidth = 360
      const gap = 32 // 2rem
      const totalWidth = (cardWidth + gap) * 5 // 5 cards per row
      const scrollDistance = totalWidth - window.innerWidth + 200

      const translate1 = -progress * scrollDistance
      const translate2 = (progress * scrollDistance) - scrollDistance
      
      if (row1Ref.current) {
        row1Ref.current.style.transform = `translateX(${translate1}px)`
      }
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translateX(${translate2}px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <section id="testimonials" className="testimonials" ref={sectionRef}>
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
          Already transforming the lives of real parents
        </h3>

        <div className="testimonials-rows">
          <div className="testimonials-row" ref={row1Ref}>
            {row1.map((testimonial, index) => (
              <TestimonialCard testimonial={testimonial} row={1} index={index} />
            ))}
          </div>
          <div className="testimonials-row" ref={row2Ref}>
            {row2.map((testimonial, index) => (
              <TestimonialCard testimonial={testimonial} row={2} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials


import { useEffect, useRef } from 'react'
import './Testimonials.css'

// Testimonials data is kept as is
const testimonials = [
  {
    name: 'Sarah Mitchell',
    parentOf: 'parent of two',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'Yume has completely transformed our bedtime routine. My daughter actually looks forward to sleep now, and I love that we can still connect through stories even when I\'m traveling for work.'
  },
  {
    name: 'James Chen',
    parentOf: 'parent of one',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'The sleep mode lock is a game-changer. No more late-night app switching, and the blue-light filter means my son falls asleep faster. We\'ve seen a real difference in his sleep quality.'
  },
  {
    name: 'Emma Rodriguez',
    parentOf: 'parent of three',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'As a busy parent, recording my voice for stories means everything. My kids hear me even when I\'m working late, and the AI visuals are so gentle and calming. Yume feels like magic.'
  },
  {
    name: 'Michael Thompson',
    parentOf: 'parent of two',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'The co-creation feature is brilliant. My kids love choosing what happens next, and it keeps them engaged without overstimulating them. Bedtime has become our favorite time together.'
  },
  {
    name: 'Lisa Park',
    parentOf: 'parent of one',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'We\'ve tried everything for bedtime, but Yume is the only thing that consistently works. The soft visuals and calming sounds help my daughter drift off naturally every single night.'
  },
  {
    name: 'David Martinez',
    parentOf: 'parent of two',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'The offline download feature is perfect for our camping trips. My kids get their bedtime stories even without WiFi, and it helps maintain our routine no matter where we are.'
  },
  {
    name: 'Jennifer Lee',
    parentOf: 'parent of one',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'I was skeptical about screen time before bed, but Yume changed my mind. The blue-light filter and sleep mode make it feel completely different from regular apps. It\'s designed for rest.'
  },
  {
    name: 'Robert Kim',
    parentOf: 'parent of three',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'The progress insights are fascinating. Seeing how different stories affect sleep onset times helps me choose the right content for each child. It\'s like having a sleep coach built in.'
  },
  {
    name: 'Amanda White',
    parentOf: 'parent of two',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'My son used to fight bedtime every night. Now he asks for Yume stories and falls asleep peacefully. The transformation in our evenings has been incredible.'
  },
  {
    name: 'Christopher Brown',
    parentOf: 'parent of one',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'The custom voice recording feature means I can be part of bedtime even when I\'m away. My daughter loves hearing my voice tell her stories, and it makes us both feel connected.'
  },
  {
    name: 'Nicole Garcia',
    parentOf: 'parent of two',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'Yume has replaced all our other bedtime apps. The combination of storytelling, gentle visuals, and sleep sounds creates the perfect environment for rest. Highly recommend!'
  },
  {
    name: 'Thomas Wilson',
    parentOf: 'parent of one',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'The adaptive bedtime rhythm feature is genius. It learns my daughter\'s patterns and adjusts the story pacing to help her fall asleep faster. Technology that actually understands sleep.'
  },
  {
    name: 'Rachel Taylor',
    parentOf: 'parent of three',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'As a single parent, Yume has been a lifesaver. I can record stories ahead of time, and my kids get quality bedtime content even when I\'m exhausted. It\'s become essential.'
  },
  {
    name: 'Daniel Anderson',
    parentOf: 'parent of two',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'The branching stories keep my kids engaged without overstimulating them. They love making choices, and I love that it all leads to peaceful sleep. Perfect balance.'
  },
  {
    name: 'Michelle Clark',
    parentOf: 'parent of one',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'Yume has improved my son\'s sleep quality dramatically. He falls asleep faster, sleeps deeper, and wakes up more rested. The science behind it really works.'
  },
  {
    name: 'Kevin Moore',
    parentOf: 'parent of two',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'The multi-child profiles are perfect for our family. Each kid gets personalized stories based on their preferences, and the app remembers what works for each one.'
  },
  {
    name: 'Stephanie Harris',
    parentOf: 'parent of one',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'I love how Yume respects bedtime. The sleep mode lock means no late-night scrolling, and the automatic soft ending ensures stories don\'t go on too long. Thoughtful design.'
  },
  {
    name: 'Brian Jackson',
    parentOf: 'parent of three',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'The exclusive monthly story drops keep things fresh. My kids always have something new to look forward to, and the quality is consistently excellent.'
  },
  {
    name: 'Lauren Martin',
    parentOf: 'parent of two',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'Yume has made bedtime something we all enjoy instead of dread. The stories are beautiful, the technology is smart, and the results speak for themselves.'
  },
  {
    name: 'Ryan Davis',
    parentOf: 'parent of one',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'The white noise feature after stories is perfect. It helps my daughter transition from story time to deep sleep seamlessly. Everything is designed with sleep in mind.'
  },
  {
    name: 'Jessica Miller',
    parentOf: 'parent of two',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'As a pediatric sleep consultant, I recommend Yume to all my clients. It\'s the only app I\'ve found that truly supports healthy sleep patterns in children.'
  },
  {
    name: 'Matthew Lewis',
    parentOf: 'parent of one',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'The personalized story worlds feature creates such unique experiences. My daughter feels like each story is made just for her, which makes bedtime special.'
  },
  {
    name: 'Ashley Walker',
    parentOf: 'parent of three',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'Yume has become our family\'s bedtime ritual. Even my oldest, who thought they were too old for bedtime stories, loves the interactive elements.'
  },
  {
    name: 'Joshua Hall',
    parentOf: 'parent of two',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'The sound effects add so much to the stories without being overwhelming. They\'re subtle and enhance the experience without disrupting sleep.'
  },
  {
    name: 'Emily Young',
    parentOf: 'parent of one',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'I appreciate how Yume balances technology with human connection. It enhances our bedtime routine rather than replacing it. It feels like a tool, not a replacement.'
  },
  {
    name: 'Andrew King',
    parentOf: 'parent of two',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'The unlimited co-creation paths mean bedtime never gets boring. My kids can explore different story branches every night, keeping things fresh and engaging.'
  },
  {
    name: 'Samantha Wright',
    parentOf: 'parent of three',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'Yume has transformed our evenings. What used to be a struggle is now peaceful and enjoyable. The whole family benefits from better sleep routines.'
  },
  {
    name: 'Brandon Lopez',
    parentOf: 'parent of one',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'The advanced sleep sensing feature is incredible. It adapts to my son\'s nightly patterns and optimizes the experience for better sleep. Truly innovative.'
  },
  {
    name: 'Olivia Hill',
    parentOf: 'parent of two',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'Yume understands that bedtime isn\'t just about sleep—it\'s about connection, calm, and creating positive memories. It shows in every detail.'
  },
  {
    name: 'Nathan Green',
    parentOf: 'parent of one',
    image: '/assets/father-daughter-using-yume.jpg',
    testimonial: 'The priority access to new features means we always get the latest improvements first. It\'s clear the team is constantly innovating and listening to families.'
  }
]

// Data for the new expert cards
const expertTestimonials = [
  {
    name: 'Dr. Alistair Reed',
    role: 'Pediatric Sleep Specialist',
    image: '/assets/father-daughter-using-yume.jpg', // Using placeholder image
    testimonial: 'Yume is a breakthrough in pediatric sleep technology. By aligning screen time with natural circadian rhythms, it turns a common obstacle into a powerful tool for healthier, more restorative sleep.'
  },
  {
    name: 'Dr. Evelyn Sato',
    role: 'Child Psychologist',
    image: '/assets/father-daughter-using-yume.jpg', // Using placeholder image
    testimonial: 'The app’s co-creation model is brilliant. It empowers children by giving them agency in their bedtime routine, which can significantly reduce bedtime anxiety and foster a positive, lifelong relationship with sleep.'
  }
];

// Create arrays with 10 cards each for the two rows
const row1 = testimonials.slice(0, 10)
const row2 = testimonials.slice(10, 20)

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
      const cardWidth = 360
      const gap = 32 // 2rem
      const totalWidth = (cardWidth + gap) * 10
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


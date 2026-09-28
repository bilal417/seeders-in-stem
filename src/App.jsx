import { useEffect, useState } from 'react'

const Arrow = ({ diagonal = false }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d={diagonal ? 'M7 17 17 7M8 7h9v9' : 'M5 12h14M14 7l5 5-5 5'} />
  </svg>
)

const LeafMark = () => (
  <svg className="leaf-mark" viewBox="0 0 100 100" aria-hidden="true">
    <path d="M51 88V43" />
    <path d="M50 58C24 56 15 41 14 21c22-1 39 8 39 32" />
    <path d="M51 46c2-22 16-33 36-35 3 22-8 38-36 43" />
    <circle cx="51" cy="89" r="6" />
  </svg>
)

const stories = [
  {
    number: '01',
    label: 'EXPLAINED',
    title: 'Why do leaves follow the light?',
    copy: 'A simple look at phototropism—and the tiny chemical signals that help plants find their way.',
    tone: 'plum',
    icon: '☼',
  },
  {
    number: '02',
    label: 'FIELD NOTES',
    title: 'Building a water filter from everyday materials',
    copy: 'Layers, flow and filtration become visible in an experiment designed for any classroom.',
    tone: 'sand',
    icon: '≈',
  },
  {
    number: '03',
    label: 'PEOPLE IN STEM',
    title: 'Meet the minds making science more open',
    copy: 'Stories from educators and young researchers turning curiosity into community change.',
    tone: 'sage',
    icon: '✦',
  },
]

const disciplines = [
  { letter: 'S', name: 'Science', copy: 'Observe closely. Ask better questions.', symbol: '⌁' },
  { letter: 'T', name: 'Technology', copy: 'Understand the tools shaping tomorrow.', symbol: '⌘' },
  { letter: 'E', name: 'Engineering', copy: 'Design, test, rebuild and improve.', symbol: '△' },
  { letter: 'M', name: 'Mathematics', copy: 'Find the patterns hiding in plain sight.', symbol: '∞' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const close = () => setMenuOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <div className="site-shell">
      <div className="top-note">
        <span>SEEDING CURIOSITY</span>
        <p>Open ideas for growing minds.</p>
        <span>EST. 2026</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Seeders in STEM home">
          <img src="/seeders-logo.png" alt="Seeders in STEM" />
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>
          <span />
          <span />
          <span />
          <b>{menuOpen ? 'CLOSE' : 'MENU'}</b>
        </button>
        <nav className={menuOpen ? 'open' : ''}>
          <a href="#explore" onClick={() => setMenuOpen(false)}>Explore</a>
          <a href="#pathways" onClick={() => setMenuOpen(false)}>STEM pathways</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>Our purpose</a>
          <a className="nav-pill" href="#latest" onClick={() => setMenuOpen(false)}>
            Latest stories <Arrow diagonal />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <div className="eyebrow"><span /> STEM EDUCATION, ROOTED IN ACCESS</div>
            <h1>Ideas take<br /><em>root</em> here.</h1>
            <p>Clear, thoughtful STEM stories for curious minds—made to turn “I wonder” into “I understand.”</p>
            <a className="primary-link" href="#explore">
              Start exploring <span><Arrow /></span>
            </a>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="orbit orbit-one"><i /></div>
            <div className="orbit orbit-two"><i /></div>
            <div className="orbit orbit-three"><i /></div>
            <div className="seed-core"><LeafMark /></div>
            <span className="formula formula-a">H₂O</span>
            <span className="formula formula-b">πr²</span>
            <span className="formula formula-c">0101</span>
            <span className="formula formula-d">E = mc²</span>
          </div>

          <div className="hero-side-note">
            <span>SCROLL TO DISCOVER</span>
            <i />
          </div>
        </section>

        <section className="ticker" aria-label="Our approach">
          <div>
            <span>SCIENCE FOR EVERYONE</span><b>✦</b>
            <span>IDEAS THAT GROW</span><b>✦</b>
            <span>CURIOSITY WITHOUT BARRIERS</span><b>✦</b>
            <span>SCIENCE FOR EVERYONE</span><b>✦</b>
          </div>
        </section>

        <section className="stories section-wrap" id="explore">
          <div className="section-heading">
            <div>
              <span className="section-index">01 / EXPLORE</span>
              <h2>Start with a <em>question.</em></h2>
            </div>
            <p>Fresh explanations, practical experiments and human stories from across the STEM world.</p>
          </div>

          <div className="story-grid" id="latest">
            {stories.map((story) => (
              <article className={`story-card ${story.tone}`} key={story.number}>
                <div className="story-visual">
                  <span>{story.icon}</span>
                  <b>{story.number}</b>
                  <div className="visual-lines" />
                </div>
                <div className="story-content">
                  <span>{story.label}</span>
                  <h3>{story.title}</h3>
                  <p>{story.copy}</p>
                  <a href="#about" aria-label={`Read ${story.title}`}><Arrow diagonal /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pathways" id="pathways">
          <div className="section-wrap pathways-inner">
            <div className="pathways-intro">
              <span className="section-index light">02 / THE BIG FOUR</span>
              <h2>Four ways to look at the <em>same world.</em></h2>
              <p>STEM is not four separate subjects. It is a connected way of noticing, understanding and shaping what is around us.</p>
            </div>
            <div className="discipline-list">
              {disciplines.map((item, index) => (
                <article key={item.letter}>
                  <span className="discipline-number">0{index + 1}</span>
                  <span className="discipline-letter">{item.letter}</span>
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.copy}</p>
                  </div>
                  <b>{item.symbol}</b>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="manifesto section-wrap" id="about">
          <div className="manifesto-mark"><LeafMark /></div>
          <div className="manifesto-copy">
            <span className="section-index">03 / WHY WE EXIST</span>
            <p className="big-copy">Talent is everywhere.<br /><em>Access is not.</em></p>
            <p className="body-copy">Seeders in STEM exists to make big ideas feel reachable. We translate complex concepts into inviting stories, grounded examples and useful learning journeys—so more people can see a place for themselves in STEM.</p>
            <div className="values">
              <div><b>01</b><span>Clear over complicated</span></div>
              <div><b>02</b><span>Curiosity over credentials</span></div>
              <div><b>03</b><span>Access over assumption</span></div>
            </div>
          </div>
        </section>

        <section className="closing">
          <div className="closing-orbit" aria-hidden="true" />
          <p>ONE QUESTION CAN CHANGE A PATH.</p>
          <h2>Keep wondering.<br /><em>Keep growing.</em></h2>
          <a href="#top">Back to the beginning <Arrow /></a>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <img src="/seeders-logo.png" alt="Seeders in STEM" />
          <p>STEM education, rooted in access.</p>
        </div>
        <div className="footer-nav">
          <a href="#explore">Explore</a>
          <a href="#pathways">STEM pathways</a>
          <a href="#about">Our purpose</a>
        </div>
        <p className="copyright">© 2026 Seeders in STEM</p>
      </footer>
    </div>
  )
}

export default App

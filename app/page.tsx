const highlights = [
  "Daily hand-flow rituals",
  "Breath-led focus sequences",
  "Calm, energy, and clarity tracks",
];

const cards = [
  {
    title: "Ground",
    text: "Begin with quiet, tactile mudra practices that settle attention and slow internal noise.",
  },
  {
    title: "Align",
    text: "Move through guided breath patterns matched to chakra-inspired intentions and body states.",
  },
  {
    title: "Radiate",
    text: "Finish with a short integration flow designed to carry steadiness into work, study, and rest.",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Chakra Mudra</p>
          <h1>Ancient gesture work, designed for a modern daily reset.</h1>
          <p className="lede">
            Chakra Mudra is a demo wellness landing page that pairs hand mudras,
            guided breath, and intentional rhythm into one clear digital ritual.
          </p>
          <div className="actions">
            <a className="button button-primary" href="#experience">
              Explore the flow
            </a>
            <a className="button button-secondary" href="#details">
              See details
            </a>
          </div>
          <ul className="highlight-list">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="mudra-panel">
            <span>01</span>
            <strong>Breath x Gesture</strong>
            <p>Center your hands. Match your breath. Let your focus lock in.</p>
          </div>
          <div className="mudra-ring">
            <div />
            <div />
            <div />
          </div>
        </div>
      </section>

      <section className="cards-section" id="experience">
        {cards.map((card) => (
          <article className="info-card" key={card.title}>
            <p>{card.title}</p>
            <h2>{card.title} your practice</h2>
            <span>{card.text}</span>
          </article>
        ))}
      </section>

      <section className="details-section" id="details">
        <div className="details-copy">
          <p className="section-label">Why it stands out</p>
          <h2>A landing page demo with a distinct visual system.</h2>
          <p>
            Built in Next.js with the App Router, this demo leans into earthy
            gradients, intentional spacing, and editorial typography rather than
            generic startup UI.
          </p>
        </div>

        <div className="stats-grid">
          <div>
            <strong>7</strong>
            <span>chakra-inspired themes</span>
          </div>
          <div>
            <strong>12 min</strong>
            <span>average ritual length</span>
          </div>
          <div>
            <strong>3-step</strong>
            <span>habit-building structure</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>responsive Next.js layout</span>
          </div>
        </div>
      </section>
    </main>
  );
}

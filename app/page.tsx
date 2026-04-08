const highlights = [
  "Boho ritual-inspired visuals",
  "Sage-led calm and breathwork",
  "Grounding daily reset sequences",
];

const cards = [
  {
    title: "Ground",
    text: "Begin with slow hand gestures, soft breath pacing, and a grounded rhythm that quiets mental clutter.",
  },
  {
    title: "Align",
    text: "Layer intention, posture, and breath into a centered mid-practice flow shaped by earthy ceremonial cues.",
  },
  {
    title: "Settle",
    text: "Close with a warm, restorative finish that carries steadiness into study, work, and evening rest.",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Chakra Mudra</p>
          <h1>Boho ritual energy, shaped into a calm modern reset.</h1>
          <p className="lede">
            Chakra Mudra is a demo wellness landing page wrapped in sage green,
            burnt terracotta, and soft desert light. It pairs mudras, guided
            breath, and intentional pacing into one grounded digital ritual.
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
          <div className="boho-charm boho-charm-top" />
          <div className="boho-charm boho-charm-bottom" />
          <div className="boho-dots" />
          <div className="mudra-panel">
            <span>01</span>
            <strong>Sage x Terracotta</strong>
            <p>Center your hands, slow your breath, and settle into a warmer visual rhythm.</p>
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
          <h2>A landing page demo with a softer boho editorial system.</h2>
          <p>
            Built in Next.js with the App Router, this version leans into sage
            hues, burnt terracotta accents, layered light lines, and a quieter
            handmade mood instead of generic startup polish.
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

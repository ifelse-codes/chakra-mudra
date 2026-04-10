const highlights = [
  "Local = You environment parity",
  "Seamless state synchronization",
  "Zero-config pipeline alignment",
];

const cards = [
  {
    title: "Conceive",
    text: "Your local environment is the source of truth. Every change reflects your intent, perfectly synced with the pipeline.",
  },
  {
    title: "Sync",
    text: "A frictionless bridge between your machine and the cloud. Code, state, and secrets flow in perfect harmony.",
  },
  {
    title: "Manifest",
    text: "The final deployment is but a reflection of your local brilliance. It just works, every single time.",
  },
];

const agileStages = [
  { label: "Plan", class: "label-plan" },
  { label: "Code", class: "label-code" },
  { label: "Build", class: "label-build" },
  { label: "Test", class: "label-test" },
  { label: "Release", class: "label-release" },
  { label: "Deploy", class: "label-deploy" },
  { label: "Operate", class: "label-operate" },
  { label: "Monitor", class: "label-monitor" },
];

export default function Home() {
  return (
    <main className="page-shell">
      {/* Background Watermarks */}
      <div className="watermark-mandala wm-1" aria-hidden="true" />
      <div className="watermark-mandala wm-2" aria-hidden="true" />

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Chakra CI/CD</p>
          <h1>Local = You. Sync everything. Manifest reality.</h1>
          <p className="lede">
            Chakra CI/CD brings your local development environment into perfect alignment with your production pipeline. 
            No more "it works on my machine"—because your machine <em>is</em> the environment.
          </p>
          <div className="actions">
            <a className="button button-primary" href="#manifest">
              Align Your Pipeline
            </a>
            <a className="button button-secondary" href="#details">
              Deep Sync
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
            <strong>The Agile Mandala</strong>
            <p>Your workflow, circular and eternal. Synchronized across the cosmic cloud.</p>
          </div>
          
          <div className="mandala-container">
            <div className="agile-wheel-container">
              <div className="agile-ring">
                {agileStages.map((stage) => (
                  <div key={stage.label} className={`agile-label ${stage.class}`}>
                    {stage.label}
                  </div>
                ))}
              </div>
              <div className="mudra-ring spinning">
                <div />
                <div />
                <div />
              </div>
              <div className="mandala-core">
                <div className="core-dot" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cards-section" id="manifest">
        {cards.map((card) => (
          <article className="info-card" key={card.title}>
            <p>{card.title}</p>
            <h2>{card.title} your code</h2>
            <span>{card.text}</span>
          </article>
        ))}
      </section>

      <section className="details-section" id="details">
        <div className="details-copy">
          <p className="section-label">The Digital Dharma</p>
          <h2>A CI/CD pipeline that mirrors your consciousness.</h2>
          <p>
            We've built a delivery system that treats your local workspace as the sacred center of development. 
            Through automated synchronization and environment mirroring, your code transcends the boundaries of local and remote.
          </p>
        </div>

        <div className="stats-grid">
          <div>
            <strong>∞</strong>
            <span>environment parity</span>
          </div>
          <div>
            <strong>0 ms</strong>
            <span>sync latency intent</span>
          </div>
          <div>
            <strong>1-step</strong>
            <span>enlightenment script</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>deterministic bliss</span>
          </div>
        </div>
      </section>
    </main>
  );
}

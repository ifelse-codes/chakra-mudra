const launchPoints = [
  "Monochrome chakra system",
  "Faint mandala watermark fields",
  "2026 launch-direction narrative",
];

const pillars = [
  {
    label: "Signal",
    title: "Minimal without becoming empty.",
    text: "Sharp spacing, dense hierarchy, and deliberate contrast make the interface feel premium instead of sterile.",
  },
  {
    label: "Structure",
    title: "Chakra geometry as product language.",
    text: "Circular grids, orbital lines, and subtle mandala logic build identity without sliding into decorative noise.",
  },
  {
    label: "Momentum",
    title: "Designed to feel early to the next cycle.",
    text: "The goal is not to echo 2023 product minimalism, but to extend it into something calmer, more spiritual, and more exact.",
  },
];

const metrics = [
  { value: "2026", label: "launch-frame concept" },
  { value: "7", label: "chakra-inspired layers" },
  { value: "01", label: "monochrome visual system" },
  { value: "Next.js", label: "app-router build" },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Chakra Mudra / Black and White</p>
          <h1>A monochrome chakra homepage built to define the next five years.</h1>
          <p className="lede">
            This concept reframes Chakra Mudra as a 2026 launch: black, white,
            disciplined, and unmistakably modern. The system uses chakra rhythm,
            mandala geometry, and product-grade restraint to push beyond soft
            wellness tropes into something sharper.
          </p>
          <div className="actions">
            <a className="button button-primary" href="#pillars">
              Enter the system
            </a>
            <a className="button button-secondary" href="#launch">
              See launch notes
            </a>
          </div>
          <ul className="highlight-list">
            {launchPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="hero-watermark hero-watermark-one" />
          <div className="hero-watermark hero-watermark-two" />
          <div className="chakra-orbit chakra-orbit-one" />
          <div className="chakra-orbit chakra-orbit-two" />
          <div className="chakra-orbit chakra-orbit-three" />
          <div className="hero-axis hero-axis-vertical" />
          <div className="hero-axis hero-axis-horizontal" />
          <div className="hero-badge">
            <span>Launch Theme</span>
            <strong>Chakra / Monochrome</strong>
            <p>Minimalist, meditative, and product-sharp.</p>
          </div>
          <div className="hero-grid-label hero-grid-label-top">Root to Crown</div>
          <div className="hero-grid-label hero-grid-label-bottom">2026-2030 Direction</div>
        </div>
      </section>

      <section className="cards-section" id="pillars">
        {pillars.map((pillar) => (
          <article className="info-card" key={pillar.label}>
            <p>{pillar.label}</p>
            <h2>{pillar.title}</h2>
            <span>{pillar.text}</span>
          </article>
        ))}
      </section>

      <section className="details-section" id="launch">
        <div className="details-copy">
          <p className="section-label">Launch Position</p>
          <h2>A homepage concept for a newly launched 2026 UI theme.</h2>
          <p>
            The interface is intentionally monochrome and minimalist, but not
            passive. It uses spiritual geometry the way leading product teams
            use systems thinking: as a repeatable structure that shapes rhythm,
            clarity, and memory.
          </p>
          <p>
            If the last wave of product minimalism optimized for calm utility,
            this direction adds presence. That is the move: less decoration,
            more identity.
          </p>
        </div>

        <div className="stats-grid">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

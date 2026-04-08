const launchPoints = [
  "Prismatic chakra palette",
  "Layered mandala depth fields",
  "Spatial launch-direction narrative",
];

const pillars = [
  {
    label: "Signal",
    title: "Minimal, but charged with atmosphere.",
    text: "The layout stays disciplined while color temperature, glow, and shadow give every section a pulse instead of a blank stare.",
  },
  {
    label: "Structure",
    title: "Chakra geometry turned into real space.",
    text: "Orbital rings, glass planes, and nested gradients create volume so the symbolic system feels architectural rather than ornamental.",
  },
  {
    label: "Momentum",
    title: "Designed to move, not just sit there.",
    text: "The interface now reads like a living object: luminous at the center, grounded at the edges, and clearly pointed toward a premium launch.",
  },
];

const metrics = [
  { value: "2026", label: "launch-frame concept" },
  { value: "7", label: "chakra energy bands" },
  { value: "3D", label: "spatial visual system" },
  { value: "Next.js", label: "app-router build" },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Chakra Mudra / Luminous Depth</p>
          <h1>A chakra homepage with pulse, color, and real dimensionality.</h1>
          <p className="lede">
            This concept moves Chakra Mudra away from flat monochrome and into a
            richer launch language: luminous gradients, glass surfaces, orbital
            geometry, and grounded shadows that make the brand feel tactile,
            elevated, and alive.
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
          <div className="hero-ambient hero-ambient-top" />
          <div className="hero-ambient hero-ambient-bottom" />
          <div className="hero-stage" />
          <div className="hero-watermark hero-watermark-one" />
          <div className="hero-watermark hero-watermark-two" />
          <div className="chakra-orbit chakra-orbit-one" />
          <div className="chakra-orbit chakra-orbit-two" />
          <div className="chakra-orbit chakra-orbit-three" />
          <div className="orbit-node orbit-node-one" />
          <div className="orbit-node orbit-node-two" />
          <div className="orbit-node orbit-node-three" />
          <div className="hero-axis hero-axis-vertical" />
          <div className="hero-axis hero-axis-horizontal" />
          <div className="energy-stack">
            <div className="energy-shadow" />
            <div className="energy-disc energy-disc-outer" />
            <div className="energy-disc energy-disc-middle" />
            <div className="energy-disc energy-disc-inner" />
            <div className="energy-core">
              <span />
            </div>
          </div>
          <div className="hero-badge">
            <span>Launch Theme</span>
            <strong>Chakra / Prismatic Depth</strong>
            <p>Glass, glow, and orbital geometry replace the old monochrome stillness.</p>
          </div>
          <div className="hero-insight hero-insight-top">
            <strong>Depth Layer</strong>
            <span>Glass panels and atmospheric bloom create foreground and horizon.</span>
          </div>
          <div className="hero-insight hero-insight-bottom">
            <strong>Energy Core</strong>
            <span>Nested discs anchor the page like a suspended object, not a flat emblem.</span>
          </div>
          <div className="hero-grid-label hero-grid-label-top">Root to Crown</div>
          <div className="hero-grid-label hero-grid-label-bottom">Living Launch System</div>
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
          <h2>A homepage concept that feels immersive instead of merely minimal.</h2>
          <p>
            The interface still uses disciplined spiritual geometry, but now it
            carries warmth, contrast, and layered material cues. The result is a
            brand language that feels premium and embodied rather than distant.
          </p>
          <p>
            If the previous version optimized for restraint, this one adds
            presence. That is the move: not more decoration, but more depth.
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

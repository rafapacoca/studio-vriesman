const InstagramIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.6" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3.5 20.5l1.4-4.3a8.5 8.5 0 1 1 15.6-4.6Z" />
    <path d="M8.2 7.8c.3-.5.6-.5.9-.5h.5c.2 0 .4.1.5.4l.8 2c.1.3 0 .5-.2.7l-.7.8c-.2.2-.1.4 0 .6.7 1.3 1.7 2.3 3 3 .2.1.4.2.6 0l.9-1.1c.2-.2.4-.3.7-.2l2 .9c.3.1.4.3.4.5 0 .4-.2 1.5-.8 2-.6.6-1.5.9-2.3.7-1.3-.3-3.5-1.1-5.3-2.8-1.5-1.4-2.6-3.3-2.9-4.6-.2-.9.1-1.8.6-2.4l.3-.3" />
  </svg>
);

export default function Home() {
  const whatsappUrl =
    "https://wa.me/5542991133602?text=Ol%C3%A1%2C%20Sellyne!%20Vim%20pelo%20site%20do%20Studio%20Vriesman%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

  return (
    <main className="coming-soon">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Studio Vriesman — início">
          <span className="brand-mark">SV</span>
          <span className="brand-name">
            Studio <strong>Vriesman</strong>
          </span>
        </a>

        <a
          className="social-link"
          href="https://www.instagram.com/studio_vriesman/"
          target="_blank"
          rel="noreferrer"
          aria-label="Acompanhe o Studio Vriesman no Instagram"
        >
          <InstagramIcon />
          <span>Instagram</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Uma nova experiência está chegando</p>

          <h1>
            Beleza que revela
            <em>a sua essência.</em>
          </h1>

          <p className="intro">
            Nosso novo espaço digital está sendo criado com o mesmo cuidado,
            elegância e atenção aos detalhes que fazem parte de cada atendimento.
          </p>

          <div className="launch-row">
            <a
              className="primary-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Falar com o Studio Vriesman pelo WhatsApp"
            >
              <WhatsAppIcon />
              Fale pelo WhatsApp
            </a>

            <div className="status" aria-label="Site em construção">
              <span className="status-dot" />
              <span>
                Site em construção
                <strong>Em breve</strong>
              </span>
            </div>
          </div>
        </div>

        <div className="visual">
          <div className="portrait-frame">
            <img
              className="portrait-photo"
              src="/sellyne-vriesman.webp"
              alt="Sellyne Vriesman, fundadora do Studio Vriesman"
              width="1080"
              height="1080"
              fetchPriority="high"
            />
            <span className="vertical-label" aria-hidden="true">
              Studio Vriesman · Beauty Experience
            </span>
            <div className="signature" aria-hidden="true">Sellyne Vriesman</div>
          </div>
          <span className="fine-line" />
          <p>Curitiba · PR</p>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Studio Vriesman</p>
        <p>Beleza · Cuidado · Exclusividade</p>
      </footer>
    </main>
  );
}

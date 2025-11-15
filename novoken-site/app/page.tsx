import React from "react";
import "./landing.css"; // adjust path to your setup

const LandingPage: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <div className="nk-page">
      {/* Header */}
      <header className="nk-header">
        <div className="nk-header-inner">
          <a href="/" className="nk-brand">
            <span className="nk-wordmark">Novoken</span>
          </a>

          <nav className="nk-nav">
            <a href="/platform">Platform</a>
            <a href="/scudio">Scudio</a>
            <a href="/company">Company</a>
            <a href="/careers">Careers</a>
          </nav>

          <div className="nk-header-actions">
            <a href="/signin" className="nk-link">
              Login
            </a>
            <a href="/early-access" className="nk-btn nk-btn-primary">
              early access btn?
            </a>
          </div>
        </div>
      </header>

      <main className="nk-main">
        <section className="nk-hero">
          <div className="nk-hero-content">
            <p className="nk-kicker">We are Novoken.</p>
            <h1 className="nk-hero-title">
              put something good here
            </h1>
            <p className="nk-hero-subtitle">
              put smth good here about novoken
            </p>

            <div className="nk-hero-actions">
              <a href="/early-access" className="nk-btn nk-btn-primary">
                btn_pri
              </a>
              <a href="/platform" className="nk-btn nk-btn-ghost">
                btn_idkputsomethingherelol
              </a>
            </div>

            <p className="nk-hero-footnote">
              Currently in development. Products launching soon.
            </p>
          </div>

          <div className="nk-hero-visual">
            <div className="nk-hero-card">
              <div className="nk-pill-row">
                <span className="nk-pill">keywords explaining our products. eg: 'ground-breaking', etc.</span>
                <span className="nk-pill">keyword</span>
                <span className="nk-pill">keyword</span>
              </div>
              <div className="nk-hero-grid">
                <div className="nk-hero-tile">
                  <h3>Scudio</h3>
                  <p>
                    put here explaining in brief what it is along with the key features such as obviously storing securely, but also
                    related to the networking, etc.
                  </p>
                </div>
                <div className="nk-hero-tile">
                  <h3>product</h3>
                  <p>
                    product explanation yada yada yada
                  </p>
                </div>
                <div className="nk-hero-tile">
                  <h3>ding ding ding</h3>
                  <p>
                    ring ding bong.
                  </p>
                </div>
                <div className="nk-hero-tile nk-hero-tile-outline">
                  <p className="nk-hero-tile-label">
                    put something good here i dont know?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Short 3-card strip */}
        <section className="nk-quick-strip">
          <div className="nk-quick-item">
            <h3>this section is abt the keywords that define what we are. replace this with a keyword.</h3>
            <p>keyword explanation</p>
          </div>
          <div className="nk-quick-item">
            <h3>keyword</h3>
            <p>keyword explanation</p>
          </div>
          <div className="nk-quick-item">
            <h3>keyword</h3>
            <p>keyword explanation</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="nk-footer">
        <div className="nk-footer-inner">
          <span>© {year} novoken</span>
          <div className="nk-footer-links">
            <a href="/company">About</a>
            <a href="/legal/privacy">Privacy</a>
            <a href="/legal/terms">Terms</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

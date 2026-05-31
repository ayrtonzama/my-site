export default function ContactComponent() {
  return (
    <section className="section contact" id="contact">
      <span className="section__idx">SEC.03 / TRANSMISSION</span>
      <h2 className="contact__title">LET'S TALK.</h2>
      <p className="contact__lead">
        Open to senior frontend roles in Zurich / Zug. Fastest contact is email
        or LinkedIn.
      </p>
      <div className="contact__links">
        <a className="btn btn--primary" href="mailto:ayrtonzama@gmail.com">
          ayrtonzama@gmail.com
        </a>
        <a
          className="btn btn--ghost"
          href="https://linkedin.com/in/ayrton-zamarian"
          target="_blank"
          rel="noreferrer"
        >
          LINKEDIN ↗
        </a>
      </div>
    </section>
  );
}

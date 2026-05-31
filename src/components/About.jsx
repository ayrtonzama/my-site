import Cross from './Cross'
export default function AboutComponent(){
    return (<section className="section section--split" id="about">
          <div className="split__left">
            <div className="section__head">
              <h2 className="section__title"><Cross /> ABOUT</h2>
            </div>
            <span className="section__idx">SEC.02 / SPECIFICATION</span>
          </div>
          <div className="split__right">
            <p>
              Senior Frontend Developer based in Zurich, currently at Perk
              (formerly Yokoy), where I spent the last few years as the sole
              frontend engineer owning a TypeScript / Angular codebase end-to-end.
            </p>
            <p>
              My focus is frontend architecture and design systems — the
              foundational work that keeps teams fast and products consistent.
              I care about maintainability, accessibility, and the small UX
              details that matter most when the data on screen has to be exactly right.
            </p>
            <p>
              Earlier: ~4 years consulting across React, React Native, Vue,
              Flutter and Node — and ~3 years leading mobile on Flutter.
              Italian / EU citizen with full Swiss work authorisation.
            </p>
            <div className="skills">
              <div className="skills__group">
                <h4><Cross /> FRONTEND</h4>
                <p>Angular · TypeScript · RxJS · HTML5 · CSS3/SCSS · React</p>
              </div>
              <div className="skills__group">
                <h4><Cross /> MOBILE</h4>
                <p>Swift · Kotlin · React Native · Flutter · Ionic</p>
              </div>
              <div className="skills__group">
                <h4><Cross /> TOOLING</h4>
                <p>Git · GitHub Actions · Jest · ESLint · Agile/Scrum</p>
              </div>
            </div>
          </div>
        </section>)
}
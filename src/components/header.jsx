export default function Header() {
  return (
    <header className="hero-section">
      <img src="../src/icons/aurora.svg" alt="aurora" id="aurora" loading="lazy" />
      <nav>
        <div id="logo">
          <img src="../src/icons/icon-chain.svg" alt="icon-chain" />
          <img src="../src/icons/icon-line.svg" alt="icon-line" />
          <h1 id="name">Scissor</h1>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#" className="nav-link blue-text">
              My URLs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" id="features" className="nav-link">
              Features
              <img src="../src/icons/icon-down.svg" alt="icon-down" />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Analytics
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              FAQs
            </a>
          </li>
        </ul>
        <div className="cta">
          <a href="#" className="blue-text">
            Log In
          </a>
          <button className="btn">Try for free</button>
        </div>
      </nav>
      <section className="intro-container">
        <div className="intro-text ">
          <h2>
            Optimize Your Online Experience with Our Advanced
            <strong id="important" className="blue-text">
              URL Shortening
              <img src="../src/icons/icon-underline.svg" alt="icon-underline" />
            </strong>
            Solution
          </h2>
          <p>
            Personalize your shortened URLs to align with your brand identity.
            Utilize custom slugs, branded links, and domain customization
            options to reinforce your brand presence and enhance user
            engagement.
          </p>
        </div>
        <div className="cta">
          <button className="btn">Sign Up</button>
          <a href="#" className="blue-text">
            Learn More
          </a>
        </div>
      </section>
      <section className="group-2 ">
        <div>
          <img src="../src/icons/icon-link.svg" alt="icon-link" />
          <p>
            Seamlessly transform your long URLs into concise
            <br />
            and shareable links with just few clicks.
          </p>
        </div>
        <img src="../src/icons/Vector 2.svg" alt="" />
      </section>
      <section className="group-3 ">
        <img src="../src/icons/ellipse.png" alt="ellipse.png" id="ellipse" />
        <img src="../src/icons/rectangle.svg" alt="rectangle.svg" id="rectangle" />
      </section>
    </header>
  );
}

export default function Faq() {
  return (
    <section className="faq">
      <img
        src="../src/assets/icons/faq-pattern-1.svg"
        alt="faq-pattern-1"
        id="faq-pattern-1"
      />
      <img
        src="../src/assets/icons/faq-pattern-2.svg"
        alt="faq-pattern-2"
        id="faq-pattern-2"
      />
      <div>
        <h2>
          <img src="../src/assets/icons/icon-stroke.svg" alt="icon-stroke" />
          FAQs
        </h2>
        <div className="questions">
          <div className="question-container">
            <div className="question">
              <p>How does URL shortening work?</p>
              <img src="../src/assets/icons/icon-minus.svg" alt="icon-plus" />
            </div>
            <div className="answer">
              URL shortening works by taking a long URL and creating a shorter,
              condensed version that redirects to the original URL. When a user
              clicks on the shortened link, they are redirected to the intended
              destination.
            </div>
          </div>
          <div className="question-container">
            <div className="question">
              <p>
                Is it necesary to create an account to use the shortening
                service?
              </p>
              <img src="../src/assets/icons/icon-plus.svg" alt="icon-plus" />
            </div>
          </div>
          <div className="question-container">
            <div className="question">
              <p>Are the shortened links permanent? Will they expire?</p>
              <img src="../src/assets/icons/icon-plus.svg" alt="icon-plus" />
            </div>
          </div>
          <div className="question-container">
            <div className="question">
              <p>
                Are there any limitations on the number of URLs I can shorten?
              </p>
              <img src="../src/assets/icons/icon-plus.svg" alt="icon-plus" />
            </div>
          </div>
          <div className="question-container">
            <div className="question">
              <p>
                Can I customize the shorteneed URL to represent my brand or
                content?
              </p>
              <img src="../src/assets/icons/icon-plus.svg" alt="icon-plus" />
            </div>
          </div>
          <div className="question-container">
            <div className="question">
              <p>Can I track the performance of my shortened URLs?</p>
              <img src="../src/assets/icons/icon-plus.svg" alt="icon-plus" />
            </div>
          </div>
          <div className="question-container">
            <div className="question">
              <p>
                How secure is the URL shortening service? Are the shortened
                lists protected against spam or malicious content?
              </p>
              <img src="../src/assets/icons/icon-plus.svg" alt="icon-plus" />
            </div>
          </div>
          <div className="question-container">
            <div className="question">
              <p>What is a QR code and what can it do?</p>
              <img src="../src/assets/icons/icon-plus.svg" alt="icon-plus" />
            </div>
          </div>
          <div className="question-container">
            <div className="question">
              <p>
                Is there an API available for integrating the URL shortening
                service into my own applications or websites?
              </p>
              <img src="../src/assets/icons/icon-plus.svg" alt="icon-plus" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

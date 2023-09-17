import Services from "./services";

export default function Choose() {
  return (
    <div>
      <div className="choose-us">
        <div>
          <img src="../src/icons/icon-stroke.svg" alt="icon-stroke" />
          <h2>
            Why Choose <span className="blue-text">Scissors</span>
          </h2>
        </div>
        <p>
          Scissors is the hub of everything that has to do with your link
          management. We shorten your URLs, allow you creating custom ones for
          your personal, business, event usage. Our swift QR code creation,
          management and usage tracking with advance analytics for all of these
          is second to none.
        </p>
      </div>
      <Services />
    </div>
  );
}

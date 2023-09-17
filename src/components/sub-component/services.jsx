export default function Services() {
  return (
    <div className="services">
      <div className="services-group-1">
        <div className="service">
          <img src="../src/icons/service-icon-link.svg" alt="service-icon-link" />
          <div>
            <h3>URL Shortening</h3>
            <p>
              Scissor allows you to shorten URLs of your business, events.
              Shorten your URL at scale, URL redirects.
            </p>
          </div>
        </div>
        <div className="service">
          <img src="../src/icons/service-icon-edit.svg" alt="service-icon-edit" />
          <div>
            <h3>Custom URLs</h3>
            <p>
              With Scissor, you can create custom URLs, with the length you
              want! A solution for socials and businesses.
            </p>
          </div>
        </div>
      </div>
      <div className="services-group-2">
        <div className="service">
          <img
            src="../src/icons/service-icon-qr-code.svg"
            alt="service-icon-qr-code"
          />
          <div>
            <h3>QR Codes</h3>
            <p>
              Generate QR codes to your business, events. Bring your audience
              and customers to your doorstep with this scan and go solution.
            </p>
          </div>
        </div>
        <div className="service">
          <img
            src="../src/icons/service-icon-analytics.svg"
            alt="service-icon-analytics"
          />
          <div>
            <h3>Data Analytics</h3>
            <p>
              Receive data on the usage of either your shortened URL, custom
              URLs or generated QR codes. Embedded to monitor progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

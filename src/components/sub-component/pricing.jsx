export default function Pricing() {
  return (
    <section className="pricing">
      <div className="pricing-header">
        <img src="../src/icons/icon-stroke.svg" alt="icon-stroke" />
        <div>
          <h2>
            A <span className="blue-text">price perfect</span> for your needs.
          </h2>
          <p>
            From catering for your personal, business, event, socials needs, you
            can be rest assured we have you in mind in our pricing.
          </p>
        </div>
      </div>
      <div className="pricing-body">
        <div className="pricing-plan">
          <p>Basic</p>
          <div className="pricing-info">
            <div>
              <h4>FREE</h4>
              <p>Free plan for all users</p>
            </div>
            <ul className="benefits">
              <li>
                <img
                  src="../src/icons/icon-check-circle.svg"
                  alt="icon-check-circle"
                />
                Unlimited URL Shortening
              </li>
              <li>
                <img
                  src="../src/icons/icon-check-circle.svg"
                  alt="icon-check-circle"
                />
                Basic Link Analytics
              </li>
              <li>
                <img
                  src="../src/icons/icon-check-circle.svg"
                  alt="icon-check-circle"
                />
                Customizable Short Links
              </li>
              <li>
                <img
                  src="../src/icons/icon-check-circle.svg"
                  alt="icon-check-circle"
                />
                Standard Support
              </li>
              <li>
                <img
                  src="../src/icons/icon-check-circle.svg"
                  alt="icon-check-circle"
                />
                Ad-supported
              </li>
            </ul>
          </div>
        </div>
        <div className="pricing-plan recommended">
          <p>Professional</p>
          <div className="pricing-info">
            <div>
              <h4>$15/month</h4>
              <p>Ideal for business creators</p>
            </div>
            <ul className="benefits">
              <li>
                <img
                  src="../src/icons/white-icon-check-circle.svg"
                  alt="icon-check-circle"
                />
                Enhanced Link Analytics
              </li>
              <li>
                <img
                  src="../src/icons/white-icon-check-circle.svg"
                  alt="icon-check-circle"
                />
                Custom Branded Domains
              </li>
              <li>
                <img
                  src="../src/icons/white-icon-check-circle.svg"
                  alt="icon-check-circle"
                />
                Advanced Link customization
              </li>
              <li>
                <img
                  src="../src/icons/white-icon-check-circle.svg"
                  alt="icon-check-circle"
                />
                Priority Support
              </li>
              <li>
                <img
                  src="../src/icons/white-icon-check-circle.svg"
                  alt="icon-check-circle"
                />
                Ad-free Experience
              </li>
            </ul>
          </div>
        </div>
        <div className="pricing-plan">
          <p>Teams</p>
          <div className="pricing-info">
            <div>
              <h4>$25/month</h4>
              <p>Share with up to 10 users</p>
            </div>
            <ul className="benefits">
              <li>
                <img
                  src="../src/icons/icon-check-circle.svg"
                  alt="icon-check-circle"
                />
                Team Collaboration
              </li>
              <li>
                <img
                  src="../src/icons/icon-check-circle.svg"
                  alt="icon-check-circle"
                />
                User Roles and Permissions
              </li>
              <li>
                <img
                  src="../src/icons/icon-check-circle.svg"
                  alt="icon-check-circle"
                />
                Enhanced Security
              </li>
              <li>
                <img
                  src="../src/icons/icon-check-circle.svg"
                  alt="icon-check-circle"
                />
                API Access
              </li>
              <li>
                <img
                  src="../src/icons/icon-check-circle.svg"
                  alt="icon-check-circle"
                />
                Dedicated Account Manager
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pricing-cta">
        <button className="btn">Get Custom Pricing</button>
        <button className="btn">Select Pricing</button>
      </div>
    </section>
  );
}

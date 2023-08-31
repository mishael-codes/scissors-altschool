export default function Stat() {
  return (
    <div>
      <h2>
        One Stop.
        <br />
        Four <span className="blue-text">Possibilities</span>
      </h2>
      <div className="stats-container">
        <div className="stats">
          <div id="users">
            <h4 className="stat-num">3M</h4>
            <p className="stat-desc">Active Users</p>
            {/* desc means description in stat-desc */}
          </div>
          <div id="links-created">
            <h4 className="stat-num">60M</h4>
            <p className="stat-desc">Links &amp; QR codes created</p>
          </div>
        </div>
        <div className="stats">
          <div id="clicked">
            <h4 className="stat-num">1B</h4>
            <p className="stat-desc">Clicked &amp; Scanned connections</p>
          </div>
          <div id="integrations">
            <h4 className="stat-num">300K</h4>
            <p className="stat-desc">App Integrations</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Trim() {
  return (
    <section className="trim-url">
      <img
        src="../src/icons/trim-pattern-1.svg"
        alt="trim-pattern-1"
        id="trim-pattern-1"
      />
      <img
        src="../src/icons/trim-pattern-2.svg"
        alt="trim-pattern-2"
        id="trim-pattern-2"
      />
      <div>
        <form>
          <input type="text" id="input-url" placeholder="Paste URL here..." />
          <br />
          <select id="domain">
            <option value="">Choose Domain</option>
            <option value="">Domain 1</option>
            <option value="">Domain 2</option>
            <option value="">Domain 3</option>
            <option value="">Domain 4</option>
          </select>
          <input type="text" id="input-alias" placeholder="Type Alias Here" />
        </form>
        <div>
          <button className="btn">
            Trim URL
            <img src="../src/icons/icon-magic wand.svg" alt="icon-magic wand" />
          </button>
          <p>
            By clicking TrimURL, I agree to the
            <span className="policy">Terms of Service</span>,
            <span className="policy">Privacy Policy</span> and Use of Cookies.
          </p>
        </div>
      </div>
    </section>
  );
}

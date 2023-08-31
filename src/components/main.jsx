import Stat from "./sub-component/stats";
import Choose from "./sub-component/choose";
import Pricing from "./sub-component/pricing";
import Trim from "./sub-component/trim";
import Faq from "./sub-component/faq";
import Start from "./sub-component/get-started";

export default function () {
  return (
    <main>
      <section className="container">
        <Stat />
        <Choose />
      </section>
      <Pricing />
      <Trim />
      <Faq />
      <Start />
    </main>
  );
}

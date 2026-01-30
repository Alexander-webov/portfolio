import PortfolioSlider from "./PortfolioSlider";

function SectionThree() {
  return (
    <section data-anchor="reviews" className="page-section">
      <div className="reviews">
        <div className="reviews-title">
          <h2 className="title">
            My <span>Projects</span>
          </h2>
        </div>
        <div className="reviews-slider">
          <PortfolioSlider />
        </div>
      </div>
    </section>
  );
}

export default SectionThree;

function SectionTwo() {
  return (
    <section className="page-section">
      <div className="about">
        <div className="about-left-img"></div>
        <div className="about-content">
          <div className="about-content-subtitle">
            <div className="about-content__title">
              <h2 className="title">About me</h2>
            </div>

            <p className="about-content-smallText">
              I’m a software engineer specializing in creating user-friendly
              websites. I have more than four years of experience. My experience
              included Wildberries company, a large marketpalce company, where I
              developed corporate portals. My bachelor's degree in Computer
              Science has significantly contributed to my work. Web development
              is my passion,{" "}
              <span className="about-content-smallText--color">
                and I truly enjoy what I do.
              </span>
            </p>
          </div>
          <div className="about-content__title"></div>

          <div className="about-content-item">
            My Experience
            <ul className="about-content-list">
              <li>
                <span>Full Stack Engineer | Freelance | Self-Employed</span>
                <span className="about-content-list--data">
                  September 2022 - Present
                </span>
              </li>

              <li>
                <span>Frontend Developer | Wildberries</span>
                <span className="about-content-list--data">
                  May 2021 - September 2022
                </span>
              </li>

              <li>
                <span>Frontend Developer | IT Region corp.</span>
                <span className="about-content-list--data">
                  Jun 2020 - April 2021
                </span>
              </li>

              <li>
                <span>Frontend Web Developer | Freelance | Self-Employed</span>
                <span className="about-content-list--data">
                  Jan 2019 - May 2020
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;

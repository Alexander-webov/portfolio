import Link from "next/link";

function SectionFour() {
  return (
    <section data-anchor="contacts" className="page-section">
      <div className="contacts">
        <div className="contacts-content">
          <h3 className="title">
            My <span>Contacts</span>
          </h3>
          <ul className="contacts-content__list wow animate__animated animate__lightSpeedInRight">
            <li className="contacts-content__mail">
              <Link href="mailto:programm.aleks@gmail.com">
                programm.aleks@gmail.com
              </Link>
            </li>
            <li className="contacts-content__phone">
              <Link href="tel:+19296327966">(929) 632-79-66</Link>
            </li>
            <li className="contacts-content__linkedin">
              <Link
                className=""
                href="https://www.linkedin.com/in/alexzhukovhtml/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </Link>
            </li>
            <li
              className="contacts-content__github wow animate__animated animate__lightSpeedInRight"
              data-wow-delay="1s"
            >
              <Link
                className=""
                href="https://github.com/Alexander-webov"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Link>
            </li>
          </ul>
        </div>
        <div className="contacts-bg"></div>
      </div>
    </section>
  );
}

export default SectionFour;

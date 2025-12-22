import Image from "next/image";
import Link from "next/link";

function SectionFour() {
  return (
    <section data-anchor="contacts" className="page-section">
      <div className="contacts">
        <div className="contacts-content">
          <h3 className="title">
            My <span>Contacts</span>
          </h3>
          <ul className="contacts-content__list">
            <li className="contacts-content__mail">
              <Link href="mailto:programm.aleks@gmail.com">
                programm.aleks@gmail.com
              </Link>
            </li>
            <li className="contacts-content__phone">
              <Link href="tel:+19296327966">(929) 632-79-66</Link>
              <Image
                src="/img/icons/WA.svg"
                alt="icons"
                width={10}
                height={10}
              />
              <Image
                src="/img/icons/Viber.svg"
                alt="icons"
                width={10}
                height={10}
              />
              <Image
                src="/img/icons/Teleg.svg"
                alt="icons"
                width={10}
                height={10}
              />
            </li>
          </ul>
        </div>
        <div className="contacts-bg"></div>
        <div className="arrow__down">
          <a href="#firstPage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="16"
              viewBox="0 0 37 16"
            >
              <defs>
                <style>
                  {`
                           .cls-1 {
                              fill: #fff;
                              fillOpacity: 0.5;
                              fillRule: evenodd;
                           }`}
                </style>
              </defs>
              <path
                id="up"
                className="cls-1"
                d="M19,0L37,16s-10.965-3-18-3S0,16,0,16Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SectionFour;

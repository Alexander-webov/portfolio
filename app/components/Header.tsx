import Image from "next/image";
import Link from "next/link";
import logo from "@/public/img/logo+favicon/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header-top" id="menu">
        <div className="header-logo">
          <Link
            className="wow animate__animated animate__lightSpeedInLeft"
            data-wow-delay="1s"
            data-menuanchor="firstPage"
            href="#firstPage"
          >
            <Image src={logo} alt="Zhukov" priority width={228} height={80} />
          </Link>
        </div>
        <div className="header-menu">
          <ul className="header-menu__list">
            <li
              className="wow animate__animated animate__lightSpeedInRight"
              data-wow-delay="1s"
            >
              <Link
                className="header-menu__link"
                href="https://github.com/Alexander-webov"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Link>
            </li>
            <li
              className="wow animate__animated animate__lightSpeedInRight"
              data-wow-delay="2s"
              data-menuanchor="contacts"
            >
              <Link
                className="header-menu__link"
                href="https://www.linkedin.com/in/alexzhukovhtml/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;

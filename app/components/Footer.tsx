import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <Link href="https://github.com/Alexander-webov">
        zhukov web developer
      </Link>{" "}
      © 2019-2026 | powered by{" "}
      <Link href="https://www.linkedin.com/in/alexzhukovhtml/">Alex</Link>
    </footer>
  );
}

export default Footer;

import React from "react";
import Link from "next/link";
import IconFacebook from "../../../public/images/icon-facebook.svg";
import IconTwitter from "../../../public/images/icon-twitter.svg";
import IconDribble from "../../../public/images/icon-dribble.svg";
import IconLinkedin from "../../../public/images/icon-linkedin.svg";
import IconInstagram from "../../../public/images/icon-instagram.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-blue-900">
      <div className="container px-4 mx-auto flex flex-col justify-between py-6 sm:flex-row">
        <p className="text-center font-body text-white md:text-left">
          &copy; Copyright {new Date().getFullYear()} &middot; All Rights
          Reserved &middot; Alchie Tagudin
        </p>
        <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
          <Link href="https://www.facebook.com/chesteralan">
            <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow">
              <Image src={IconFacebook} alt="Facebook" width={25} height={25} />
            </i>
          </Link>
          <Link href="/" className="pl-4">
            <i className="bx bxl-twitter text-2xl text-white hover:text-yellow">
              <Image src={IconTwitter} alt="Twitter" width={25} height={25} />
            </i>
          </Link>
          <Link href="/" className="pl-4">
            <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow">
              <Image src={IconDribble} alt="Dribbble" width={25} height={25} />
            </i>
          </Link>
          <Link
            href="https://www.linkedin.com/in/chesteralan/"
            className="pl-4"
          >
            <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow">
              <Image src={IconLinkedin} alt="Linkedin" width={25} height={25} />
            </i>
          </Link>
          <Link href="/" className="pl-4">
            <i className="bx bxl-instagram text-2xl text-white hover:text-yellow">
              <Image
                src={IconInstagram}
                alt="Instagram"
                width={25}
                height={25}
              />
            </i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

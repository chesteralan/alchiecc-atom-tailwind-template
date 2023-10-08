import { SOCIAL_MEDIA_FACEBOOK, SOCIAL_MEDIA_LINKEDIN } from "@/utils/constants/links";
import Image from "next/image";
import Link from "next/link";
import IconFacebook from "public/images/icon-facebook.svg";
import IconLinkedin from "public/images/icon-linkedin.svg";

const Footer = () => {
  return (
    <div className="bg-blue-900">
      <div className="container mx-auto flex flex-col justify-between px-4 py-6 sm:flex-row">
        <p className="font-body text-center text-white md:text-left">
          &copy; Copyright {new Date().getFullYear()} &middot; All Rights Reserved &middot; Alchie
          Tagudin
        </p>
        <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
          <Link href={SOCIAL_MEDIA_FACEBOOK} target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-facebook-square hover:text-yellow text-2xl text-white">
              <Image src={IconFacebook} alt="Facebook" width={25} height={25} />
            </i>
          </Link>

          <Link
            href={SOCIAL_MEDIA_LINKEDIN}
            className="pl-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin hover:text-yellow text-2xl text-white">
              <Image src={IconLinkedin} alt="Linkedin" width={25} height={25} />
            </i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

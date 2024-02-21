/* eslint-disable @next/next/no-img-element */
import logo from "src/assets/logo.png";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer px-12 lg:px-20 md:px-18 sm:px-16">
      <div className="flex flex-wrap items-start justify-between gap-4 my-6">
        <div>
          <Link className="text-[#565acf] uppercase inconsolata font-extrabold text-[28px]" href={"/"}>
            safehealth
          </Link>
          <div className="text-[16px] mb-8">
            <p>Protecting and Taking Care To Of Your Health</p>
          </div>
        </div>
        <div className="flex flex-wrap w-[600px] items-start justify-evenly gap-20">
          <div>
            <h3 className="text-[24px] underline underline-offset-8 text-[#565acf] font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="hover:text-[#565acf] transition-all duration-300">
                <Link href={"/ourteam"}>
                  <span>Doctors</span>
                </Link>
              </li>
              <li className="hover:text-[#565acf] transition-all duration-300 my-4">
                <Link href={"/team"}>
                  <span>Creators</span>
                </Link>
              </li>
              <li className="hover:text-[#565acf] transition-all duration-300">
                <Link href={"/about"}>
                  <span>About Us</span>
                </Link>
              </li>
              <li className="hover:text-[#565acf] transition-all duration-300 my-4">
                <Link href={"/service"}>
                  <span>Services</span>
                </Link>
              </li>
              <li className="hover:text-[#565acf] transition-all duration-300">
                <Link href={"/booking"}>
                  <span>Booking</span>
                </Link>
              </li>

            </ul>
          </div>
          <div>
            <h3 className="text-[24px] underline underline-offset-8 text-[#565acf] font-bold mb-4">Our Services</h3>
            <ul>
              <li className="hover:text-[#565acf] transition-all duration-300">
                <Link href="/">
                  <span>Dental Care</span>
                </Link>
              </li>
              <li className="hover:text-[#565acf] transition-all duration-300 my-4">
                <Link href="/">
                  <span>ENT Clinic</span>
                </Link>
              </li>
              <li className="hover:text-[#565acf] transition-all duration-300">
                <Link href="/">
                  <span>Cardiology</span>
                </Link>
              </li>
              <li className="my-4 hover:text-[#565acf] transition-all duration-300">
                <Link href="/">
                  <span>Precise Diagnosis</span>
                </Link>
              </li>
              <li className="hover:text-[#565acf] transition-all duration-300">
                <Link href="/">
                  <span>Ambulance Services</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-20 text-center">
        <p className="copyright-text">
          Copyright © 2023 Redesign & Redeveloped by
          <a
            href="https://github.com/piyush-agrawal6"
            className="text-secondary"
            target="_blank"
          >
            Piyush Agrawal
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import {
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoGithub,
} from "react-icons/io";

const Footer = ({to}) => {
  return (
    <div>
      <footer className="bg-sasakazi-gray">
        <div className="container flex flex-wrap justify-between items-center mx-auto pt-2 pb-2">
          <div className="flex flex-row items-center">
            <ul className="flex flex-row ">
              <li>
                <Link to={to} className="mr-4 hover:underline md:mr-6 ">
                  Terms
                </Link>
              </li>
              <li>
                <Link to={to} className="mr-4 hover:underline md:mr-6 ">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to={to} className="mr-4 hover:underline md:mr-6 ">
                  Licensing
                </Link>
              </li>
              <li>
                <Link to={to} className="mr-4 hover:underline md:mr-6 ">
                  Policy
                </Link>
              </li>
            </ul>
            <div className="flex flex-row items-center px-4">
            <Link to={to}>
              <IoLogoFacebook className="rounded-full fill-sasakazi-blue m-1 h-[23px] w-[23px]" />
            </Link>
            <Link to={to}>
              <IoLogoGithub className="rounded-full fill-sasakazi-blue m-1 h-[23px] w-[23px]" />
            </Link>
            <Link to={to}>
              <IoLogoTwitter className="rounded-full fill-sasakazi-blue m-1 h-[23px] w-[23px]" />
            </Link>
            <Link to={to}>
              <IoLogoLinkedin className="rounded-full fill-sasakazi-blue m-1 h-[23px] w-[23px]" />
            </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

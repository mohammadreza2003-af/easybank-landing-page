import { LogoLight } from "../assets";
import { footerLinks, socialIcons } from "../constants";
import Button from "./Button";

const Footer = () => (
  <div className="flex md:flex-row flex-col py-16 justify-between">
    <div className="flex md:flex-row flex-col justify-center items-center">
      <div className="md:mr-20 md:mb-0 mb-6 mr-0 flex flex-col justify-center items-center">
        <img src={LogoLight} className="md:mb-8 mb-6" />
        <div className="flex">
          {socialIcons.map((item, index) => (
            <a
              href="# w-[64px] h-[64px]"
              className={`w-full ${
                index === socialIcons.length - 1 ? "mr-0" : "mr-4"
              }`}
            >
              <img src={item.path} className="w-[full] " alt={item.alt} />
            </a>
          ))}
        </div>
      </div>
      <div className="flex md:flex-row flex-col">
        <ul className="md:mr-20 md:mb-0 mb-2 md:text-left text-center">
          {footerLinks.map((item, index) => {
            if (index <= 2) {
              return (
                <li
                  className={`text-slate-200 hover:text-sec transition-all duration-200 ease-in-out font-normal text-sm ${
                    index === 2 ? "mb-0" : "mb-2"
                  }`}
                >
                  <a href={item.href}>{item.title}</a>
                </li>
              );
            }
          })}
        </ul>
        <ul className="md:text-left text-center">
          {footerLinks.map((item, index) => {
            if (index > 2 && index <= footerLinks.length - 1) {
              return (
                <li
                  className={`text-slate-200 hover:text-sec transition-all duration-200 ease-in-out font-normal text-sm ${
                    index === 2 ? "mb-0" : "mb-2"
                  }`}
                >
                  <a href={item.href}>{item.title}</a>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
    <div className="flex flex-col justify-center md:items-end items-center md:mt-0 mt-8">
      <Button costume="mb-6" />
      <p className="text-slate-400">© Easybank. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;

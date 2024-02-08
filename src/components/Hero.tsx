import { HeroImg } from "../assets";
import Button from "./Button";

const Hero = () => (
  <div className="flex md:flex-row relative justify-center items-center flex-col-reverse overflow-hidden">
    <div className="flex justify-center md:text-left text-center md:items-start items-center flex-col flex-1  md:pl-20  mt-[-180px] md:mt-0">
      <h1 className="font-medium lg:text-5xl text-4xl text-slate-800 mb-8">
        Next generation <br /> digital banking
      </h1>
      <p className="text-slate-500 mb-8">
        Take your financial life online. Your Easybank account <br /> will be a
        one-stop-shop for spending, saving,
        <br /> budgeting, investing, and much more.
      </p>
      <Button costume="" />
    </div>
    <div className="overflow-hidden relative">
      <img
        src={HeroImg}
        alt="hero"
        className="translate-x-[0] md:translate-x-[80px] translate-y-[-230px] md:w-[400px] lg:w-[750px] md:translate-y-[-100px]"
      />
      <div className="absolute lg:w-[1150px] lg:h-[1000px] lg:top-[-100px] lg:right-[-420px] md:w-[800px] md:h-[500px] md:top-[-80px] md:right-[-400px] xl:right-[-340px] -z-20 overflow-hidden md:bg-heroBackDesk bg-contain bg-no-repeat" />
      <div className="absolute md:hidden sm:w-[800px] sm:h-[900px] sm:top-[-100px] sm:right-[-10px] -z-20 overflow-hidden bg-heroBackMob bg-contain bg-no-repeat w-[600px] h-[900px] top-[-290px] right-[-10px]" />
    </div>
  </div>
);

export default Hero;

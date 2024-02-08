import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import IconBox from "./components/IconBox";
import Navbar from "./components/Navbar";

const App = () => (
  <div className="w-full overflow-hidden font-pub">
    <div className="sm:px-16 px-6 flex justify-center items-center shadow-md">
      <div className="xl:max-w-[1280px] w-full">
        <Navbar />
      </div>
    </div>
    <div className="flex justify-center items-start mb-20 md:mb-0">
      <div className="w-full">
        <Hero />
      </div>
    </div>
    <div className="sm:px-16 px-6 flex justify-center items-center bg-slate-100 -z-30">
      <div className="xl:max-w-[1280px] w-full">
        <IconBox />
      </div>
    </div>
    <div className="sm:px-16 px-6 flex justify-center items-center bg-white">
      <div className="xl:max-w-[1280px] w-full">
        <Articles />
      </div>
    </div>
    <div className="sm:px-16 px-6 flex justify-center items-center bg-pri">
      <div className="xl:max-w-[1280px] w-full">
        <Footer />
      </div>
    </div>
  </div>
);

export default App;

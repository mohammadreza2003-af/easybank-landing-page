import { iconList } from "../constants";

const IconBox = () => (
  <div className="flex flex-col py-24">
    <div className="mb-16 md:text-left text-center">
      <h2 className="text-4xl text-slate-700 font-medium mb-6">
        Why choose Easybank?
      </h2>
      <p className="text-slate-500">
        We leverage Open Banking to turn your bank account into your financial
        hub.
        <br />
        Control your finances like never before.
      </p>
    </div>
    <div>
      <ul className="flex md:flex-row flex-col">
        {iconList.map((item, index) => (
          <li
            key={item.title}
            className={`flex flex-col justify-start lg:items-start lg:text-left text-center  items-center ${
              index === iconList.length - 1 ? "md:mr-0 mb-0" : "md:mr-8 mb-8"
            }`}
          >
            <img
              src={item.icon.path}
              alt={item.icon.alt}
              className="w-[64px] mb-6"
            />
            <h2 className="text-xl text-slate-700 font-medium mb-6">
              {item.title}
            </h2>
            <p className="text-slate-500">{item.dis}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default IconBox;

import { articlesList } from "../constants";

const Articles = () => (
  <div className="flex flex-col justify-center items-start py-24">
    <h2 className="text-4xl text-slate-700 font-medium mb-12">
      Latest Articles
    </h2>
    <div>
      <ul className="flex md:flex-row flex-col gap-8">
        {articlesList.map((item) => (
          <li
            key={item.title}
            className={`flex flex-col justify-start lg:text-left text-center items-center bg-white shadow-lg rounded-md overflow-hidden`}
          >
            <img src={item.icon.path} alt={item.icon.alt} />
            <div className="sm:p-6 p-4">
              <h2 className="text-xl text-slate-700 hover:text-sec transition-all duration-200 cursor-pointer ease-in-out font-medium mb-6">
                {item.title}
              </h2>
              <p className="text-slate-500">{item.dis}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Articles;

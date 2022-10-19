import { MdCalendarToday } from "react-icons/md";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className=" w-full bg-blue-600 flex items-center justify-center relative z-[-1] py-16">
      <img
        src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/09/Bleach-Thousand-Year-Blood-War-Feature.jpg"
        alt="Bleach"
        className="w-full object-contain absolute top-0 left-0 opacity-10"
      />
      <div className="max-w-[1024px] text-white flex rounded-lg overflow-hidden z-10 my-10">
        <img
          src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/09/Bleach-Thousand-Year-Blood-War-Feature.jpg"
          alt="Bleach"
          className="w-2/3"
        />
        <div className="bg-white text-black w-1/3 p-10 flex flex-col justify-around">
          <div className="flex gap-2 items-center">
            <p className="bg-blue-600 py-1 px-3 text-sm rounded-2xl text-white font-semibold">
              Featured
            </p>
            <p className="bg-blue-600 py-1 px-3 text-sm rounded-2xl text-white font-semibold">
              News
            </p>
          </div>
          <h1 className="font-bold text-2xl my-5">Bleach Has Returned!</h1>
          <div className="flex items-center gap-2">
            <MdCalendarToday size={28} />
            <p className="text-gray-600 font-semibold text-sm">10/18/2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

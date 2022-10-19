import { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose, MdSearch } from "react-icons/md";

type Props = {};

const Header = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='w-full flex items-center justify-center sticky top-0 bg-white/90'>
      <header className="py-6 px-6 text-black flex items-center justify-between max-w-[1024px] w-full">
        <Link to='/' className="text-2xl font-bold">MyAnimeList</Link>
        <div className="hidden sm:flex">
          <ul className="flex gap-4 items-center">
            <li className="font-bold text-lg">Anime</li>
            <li className="font-bold text-lg">Manga</li>
            <li className="bg-current flex items-center rounded-full p-1">
              <MdSearch size={24} color={'white'} />
            </li>
          </ul>
        </div>
        <div className="sm:hidden">
          {isMenuOpen ? (
            <MdClose
              size={28}
              onClick={() => {
                setIsMenuOpen((prev) => !prev);
              }}
            />
          ) : (
            <MdMenu
              size={28}
              onClick={() => {
                setIsMenuOpen((prev) => !prev);
              }}
            />
          )}
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } p-6 border items-center justify-center absolute top-20 right-0 mx-4 min-w-[140px] rounded`}
          >
            <ul className='flex flex-col gap-4 items-center'>
              <li className="font-bold text-lg hover:border-y-2 border-spacing-y-px">Anime</li>
              <li className="font-bold text-lg hover:border-y-2 border-spacing-y-px">Manga</li>
              <li className="bg-current flex items-center rounded-full p-1">
              <MdSearch size={24} color={'white'} />
            </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

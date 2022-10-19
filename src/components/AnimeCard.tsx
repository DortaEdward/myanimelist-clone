import { Link } from "react-router-dom";
type Props = {
  animeId: string;
  image: string;
  title: string;
};

const AnimeCard = ({ animeId, image, title }: Props) => {
  return (
    <Link to={`/anime/${animeId}`}>
      <div className="h-72 w-48 rounded-lg relative hover:outline outline-blue-600 cursor-pointer overflow-hidden group">
        <img
          src={image}
          alt="Anime Cover"
          className="object-cover h-full w-full rounded-lg group-hover:scale-105 transition duration-150 ease-out"
        />
        <div className="absolute bottom-0 text-white text-sm text-center bg-blue-600 w-full h-14 hidden group-hover:flex items-center justify-center font-bold p-2 transition duration-150 ease-out overflow-hidden">
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;

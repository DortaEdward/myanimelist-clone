import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import AnimeCard from "./AnimeCard";

type Props = {
  header: string;
  href: string;
  apiUrl: string;
  query: string;
};

const HomeLists = ({ header, href, apiUrl, query }: Props) => {
  const { isLoading, isError, data } = useQuery([`${query}`], async () => {
    const res = await fetch(apiUrl);
    const { data } = await res.json();
    return data;
  });

  if (isLoading) return <div>...Loading</div>;

  return (
    <div className=' bg-white w-full flex items-center justify-center py-10'>
      <div className="w-full max-w-[1024px] ">
        <div className="flex gap-5 items-center my-4">
          <h2 className="whitespace-nowrap text-xl font-bold">{header}</h2>
          <div className="w-full bg-gray-200 h-[4px] rounded px-10"></div>
          <Link to={href} className="uppercase whitespace-nowrap font-bold">
            View All
          </Link>
        </div>
        <div className="flex gap-2 w-full justify-between">
          {data.map((anime: any) => {
            return (
              <AnimeCard
                key={anime.mal_id}
                animeId={anime.mal_id}
                image={anime.images.jpg.image_url}
                title={anime.titles[0].title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeLists;

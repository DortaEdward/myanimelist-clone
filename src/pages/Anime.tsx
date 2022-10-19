import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

type Props = {};

const Anime = (props: Props) => {
  const { id } = useParams();
  const { isLoading, isError, data } = useQuery([`getAnime`], async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
    const { data } = await res.json();
    return data;
  });

  if (isLoading) return <div>Loading...</div>;

  // https://dribbble.com/shots/14879802-MyAnimeList-Website-Redesign/attachments/6591878?mode=media

  return (
    <div className="w-full flex items-center justify-center bg-blue-600 py-10">
      <div className="max-w-[1024px] w-full bg-blue-500 p-4 flex flex-col gap-4 text-white">
        <div className="w-full flex items-center">
          <img
            src={data.images.jpg.image_url}
            alt={data.title}
            className="rounded-2xl h-full"
          />
          <div className="px-4">
            <p className="font-bold text-3xl">{data.title}</p>
            <p className="font-bold text-lg">{data.titles[1].title}</p>
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">Synopsis</h3>
                <div className="flex gap-2">
                  <p className="font-semibold">
                    Ranked{" "}
                    <span className="text-sm font-medium ml-[2px]">
                      #{data.rank}
                    </span>
                  </p>
                  <p className="font-semibold">
                    Popularity{" "}
                    <span className="text-sm font-medium ml-[2px]">
                      #{data.popularity}
                    </span>
                  </p>
                  <p className="font-semibold">
                    Members
                    <span className="text-sm font-medium ml-[2px]">
                      {data.members}
                    </span>
                  </p>
                </div>
              </div>
              <p className="text-sm">{data.synopsis}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-amber-500 w-20 h-20 flex flex-col items-center justify-center rounded-2xl text-white">
            <p className="font-semibold">Score</p>
            <p className="font-bold text-lg">{data.score}</p>
          </div>
          <div className="outline outline-blue-600 outline-2 rounded-lg w-full flex flex-col justify-between">
            <div className="flex gap-4 p-1 items-center justify-around h-1/2">
              <p className='font-bold'>
                Type: <span className='font-normal'>{data.type}</span>
              </p>
              <p className='font-bold'>
                Episodes: <span className='font-normal'>{data.episodes}</span>
              </p>
              <p className='font-bold'>
                Genres:{" "}
                {data.genres.map((genre: any, i: number) => {
                  return (
                    <span className='font-normal' key={i}>
                      {genre.name}
                      {i != data.genres.length - 1 && ", "}
                    </span>
                  );
                })}
              </p>
              <p className='font-bold'>Status: {data.status}</p>
            </div>
            <div className='h-[2px] bg-blue-600'></div>
            <div className="flex gap-4 items-center justify-around h-1/2">
              <p className='font-bold'>
                Aired:{" "}
                <span className='font-normal'>
                  {data.aired.prop.from.month}/{data.aired.prop.from.day}/
                  {data.aired.prop.from.year} -{" "}
                  {data.aired.prop.to.day === null
                    ? "?/?/?"
                    : `${data.aired.prop.to.month}/${data.aired.prop.to.day}/${data.aired.prop.to.year}`}
                </span>
              </p>
              <p className='font-bold'>
                Broadcast <span className='font-normal'>{data.broadcast.string}</span>
              </p>
              <p className='font-bold'>
                Broadcast <span className='font-normal'>{data.studios[0].name}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anime;

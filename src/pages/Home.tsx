type Props = {};
import Hero from "../components/Hero";
import HomeLists from "../components/HomeLists";
const Home = (props: Props) => {
  return (
  <div className='flex flex-col items-center'>
    <Hero />
    <HomeLists header={'Winter 2022 Anime'} href={'/winter'} apiUrl={'https://api.jikan.moe/v4/seasons/now?limit=5'} query={'winterAnime'} />
    <HomeLists header={'Top Airing Anime'} href={'/top'} apiUrl={'https://api.jikan.moe/v4/top/anime?limit=5&filter=airing'} query={'topAiring'} />
    <div className='my-10'></div>
  </div>
  );
};

export default Home;

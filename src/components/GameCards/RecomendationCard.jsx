export const RecomendationCard = () => {
  return (
    <div className="max-w-[16rem] h-[24rem] bg-[#1182a4] rounded-md">
      <figure className="h-[10rem] px-4 pb-2 pt-4">
        <img
          src={'https://imgs.search.brave.com/WStuyaqp1ABullS8QtLmfNZVe2qQkHjmB1HOuQ3z5Pc/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly93d3cu/bWFzZ2FtZXJzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wOS9tYXJpby1j/b2NoZXMtLmpwZw'}
          alt='Mario Kart Live: Home Circuit'
          className="w-full h-full object-cover rounded-lg"
        />
      </figure>
      <div className="h-[14rem]">
        <h1 className="font-semibold px-6 text-gray-50">Mario Kart Live: Home Circuit</h1>
        <h2 className="italic text-xs text-gray-50 px-6">28th Apr 2017</h2>
        <p className="px-6 pt-1 text-justify text-gray-50 max-h-[9rem] overflow-hidden">Mario Kart Live: Home Circuit is a racing game for the Nintendo Switch. The game is an augmented reality Mario Kart game played using RC Karts controlled via the Switch. The race is set up four gates placed around the room with the path directed by driving the included kart. The game comes in two different sets, one including Mario, the other including Luigi. The game itself has to be downloaded from the eShop, but it only displays a video without the accessories.</p>
      </div>
    </div>
  )
}

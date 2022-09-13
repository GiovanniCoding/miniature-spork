export const RecomendationCard = () => {
  return (
    <div className="flex flex-col w-[250px] h-[400px] bg-green-300">
      <figure className="w-[200px] h-[220px] mx-auto my-2">
        <img
          src={'https://imgs.search.brave.com/WStuyaqp1ABullS8QtLmfNZVe2qQkHjmB1HOuQ3z5Pc/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly93d3cu/bWFzZ2FtZXJzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wOS9tYXJpby1j/b2NoZXMtLmpwZw'}
          alt='Mario Kart Live: Home Circuit'
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="mx-2">
        <h1 className="font-semibold">Mario Kart Live: Home Circuit</h1>
        <h2>28th Apr 2017</h2>
        <p>Mario Kart Live: Home Circuit is a racing game for the Nintendo Switch. The game is an augmented reality Mario Kart game played using RC Karts controlled via the Switch. The race is set up four gates placed around the room with the path directed by driving the included kart. The game comes in two different sets, one including Mario, the other including Luigi. The game itself has to be downloaded from the eShop, but it only displays a video without the accessories.</p>
      </div>
    </div>
  )
}

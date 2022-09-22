import { useEffect, useState } from "react"

export const RecomendationCard = ( { card } ) => {

  const [gameInfo, setGameInfo] = useState({})

  useEffect(() => {
    
    fetch(
      `https://api.egiovanni.com/db/?games=${ card }`
    )
      .then( response => response.json() )
      .then( data => setGameInfo({ title: data[0][1], release_date: data[0][2], image: data[0][3], description: data[0][4] }) )

  }, [ card ])

  return (
    <div className="min-w-[16rem] h-[24rem] bg-[#1182a4] rounded-md basis-[16rem] flex-grow">
      <figure className="h-[10rem] px-4 pb-2 pt-4">
        <img
          src={ gameInfo.image }
          alt={ gameInfo.title }
          className="w-full h-full object-cover rounded-lg"
        />
      </figure>
      <div className="h-[14rem]">
        <h1 className="font-semibold text-[1.2rem] px-6 text-gray-50">{ gameInfo.title }</h1>
        <h2 className="italic text-xs text-gray-50 px-6">{ gameInfo.release_date }</h2>
        <p className="px-6 pt-1 text-[0.9rem] text-justify text-gray-50 max-h-[9rem] overflow-hidden">{ gameInfo.description }</p>
      </div>
    </div>
  )
}

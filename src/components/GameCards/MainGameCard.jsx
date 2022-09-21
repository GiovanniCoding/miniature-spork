import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { EmptyCard } from "./EmptyCard"

export const MainGameCard = () => {
  const { id, title } = useSelector( state => state.games.favoriteGame )
  const [gameInfo, setGameInfo] = useState( {} )

  useEffect(() => {
    if ( id != '' ) {
      fetch(
        `http://api.egiovanni.com/db/?games=${ id }`
      )
        .then( response => response.json() )
        .then( data => { setGameInfo( {
          release_date: data[0][2],
          image_url: data[0][3],
          description: data[0][4]

          // Llamar a las recomendaciones
        } ) }
      )
    }
  }, [ id ])

  return (
    title != ''
      // Card to show the selected's game info
    ? <div className="max-w-[70rem] mx-auto">
        <div className="mx-8 flex border rounded-lg bg-[#006d77] mobile:flex-col">
          <figure className="min-w-[150px] h-[200px] mx-4 mb-2 mt-4">
            <img
              src={ gameInfo.image_url }
              alt="Mario Kart 8 Delux"
              className="w-full h-full object-cover rounded-bl-3xl rounded-tr-3xl"
            />
          </figure>
          <div className="my-4 mr-4 mobile:m-4">
              <div className="flex mobile:flex-col justify-between mb-4">
                <h1 className="text-2xl text-white ml-6">{ title }</h1>
                <h2 className="text-sm text-gray-100 italic ml-6">{ gameInfo.release_date }</h2>
              </div>
              <p className="bg-[#138089] p-2 text-gray-50 rounded-md max-h-[8rem] overflow-hidden text-justify">{ gameInfo.description }</p>
          </div>
        </div>
      </div>
    : <EmptyCard />

  )
}

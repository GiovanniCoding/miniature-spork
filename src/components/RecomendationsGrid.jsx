import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { RecomendationCard } from "./GameCards/RecomendationCard"

export const RecomendationsGrid = () => {
  const { id } = useSelector( state => state.games.favoriteGame )
  const [recommendedGames, setRecommendedGames] = useState([])
  const client = algoliasearch('OC6BAJ631K', '61dd445490707d6dd3452f38fc137fb0')
  const index = client.initIndex('switch_games')

  useEffect(() => {
    if ( id != '') {
      index.search( id , {
        attributesToRetrieve: ['id', 'title']
      }).then(
        ({ hits }) => { setGamesOptions( hits ) }
      )
      // fetch(
      //   `https://api.egiovanni.com/model/?id=${id}`
      // )
      //   .then( response => response.json() )
      //   .then( data => setRecommendedGames( data ) )
    }
    
  }, [ id ])

  return (
    recommendedGames.length > 0
    &&
    <div className="max-w-[70rem] mx-auto mt-4 mb-8">
      <div className="mx-8 flex flex-wrap gap-y-4 gap-x-2 justify-evenly">
        {
          recommendedGames.map( card => {
            return <RecomendationCard key={card} card={ card } />
          } )
        }
      </div>
    </div>
  )
}

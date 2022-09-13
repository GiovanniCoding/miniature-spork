import { RecomendationCard } from "./GameCards/RecomendationCard"

export const RecomendationsGrid = () => {
  
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className="max-w-[70rem] mx-auto mt-4 mb-8">
      <div className="mx-8 flex flex-wrap gap-y-4 gap-x-2 justify-evenly">
        {
          data.map( card => {
            return <RecomendationCard key={card} />
          } )
        }
      </div>
    </div>
  )
}

import { MainGameCard } from "../components/GameCards/MainGameCard"
import { RecomendationsGrid } from "../components/RecomendationsGrid"

export const Recomendations = () => {
  return (
    <>
      <h1 className="flex justify-center my-1 text-gray-500">You selected the game:</h1>
      <MainGameCard />
      <h2 className="flex justify-center my-1 text-gray-500">Some games you might like:</h2>
      <RecomendationsGrid />
    </>
  )
}

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { setFavoriteGame } from '../redux/slices/gamesSlice'

export const Search = () => {

  const [gamesOptions, setGamesOptions] = useState([])
  const dispatch = useDispatch()

  const handleOnSearch = (string, results) => {
    fetch(
      `https://api.egiovanni.com/meilisearch?collection=switch_games&query=${string}`
    )
      .then( response => response.json() )
      .then( data => setGamesOptions( data.hits ) )
  }

  const handleOnSelect = (item) => {
    dispatch( setFavoriteGame( item ) )
  }

  return (
    <div className='w-96 mr-16 my-auto mobile:mx-4'>
      <ReactSearchAutocomplete
        items={ gamesOptions }
        fuseOptions={{ keys: ["title"] }}
        resultStringKeyName='title'
        onSearch={ handleOnSearch }
        onSelect={ handleOnSelect }
      />
    </div>
  )
}

import MeiliSearch from 'meilisearch'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { setFavoriteGame } from '../redux/slices/gamesSlice'

export const Search = () => {

  const client = new MeiliSearch({ host: 'api.egiovanni.com:7700', apiKey: 'red-project' })
  const [gamesOptions, setGamesOptions] = useState([])
  const dispatch = useDispatch()

  const handleOnSearch = (string, results) => {
    client.index( 'switch_games' ).search( string )
      .then( (res) => {
        setGamesOptions(res.hits)
      } )
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

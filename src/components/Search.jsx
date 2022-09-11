import MeiliSearch from 'meilisearch'
import { useState } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

export const Search = () => {

  const client = new MeiliSearch({ host: 'http://34.71.114.220:7700', apiKey: 'red-project' })
  const [gamesOptions, setGamesOptions] = useState([])

  const handleOnSearch = (string, results) => {
    client.index( 'switch_games' ).search( string )
      .then( (res) => setGamesOptions(res.hits) )
  }

  const handleOnSelect = (item) => {
    console.log(item)
  }

  return (
    <div className='w-96 mr-16 my-auto mobile:mx-4'>
      <ReactSearchAutocomplete
        items={ gamesOptions }
        onSearch={ handleOnSearch }
        onSelect={ handleOnSelect }
      />
    </div>
  )
}

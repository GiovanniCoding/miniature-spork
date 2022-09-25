import algoliasearch from 'algoliasearch'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { setFavoriteGame } from '../redux/slices/gamesSlice'

export const Search = () => {
  const [gamesOptions, setGamesOptions] = useState([])
  const dispatch = useDispatch()

  const client = algoliasearch('OC6BAJ631K', '61dd445490707d6dd3452f38fc137fb0')
  const index = client.initIndex('switch_games')

  const handleOnSearch = (string, results) => {
    if ( string != '') {
      index.search(string, {
        attributesToRetrieve: ['id', 'title']
      }).then(
        ({ hits }) => { setGamesOptions( hits ) }
      )
    }
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
        inputDebounce={ 250 }
      />
    </div>
  )
}

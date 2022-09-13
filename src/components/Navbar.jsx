import { CgGames } from 'react-icons/cg';
import { Search } from './Search';

export const Navbar = () => {

  return (
    <nav className='flex justify-between h-16 mb-4 max-w-[70rem] mx-auto mobile:justify-center'>
        <CgGames className='text-6xl ml-16 mobile:hidden my-auto' />
        <Search />
    </nav>
  )
}
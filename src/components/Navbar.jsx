import { CgGames } from 'react-icons/cg';
import { Search } from './Search';

export const Navbar = () => {

  return (
    <div className='flex justify-between h-16 max-w-[60rem] mx-auto mobile:justify-center'>
        <CgGames className='text-6xl ml-8 mobile:hidden my-auto' />
        <Search />
    </div>
  )
}
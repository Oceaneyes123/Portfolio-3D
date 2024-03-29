import { NavLink } from'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to="/" className='flex items-center justify-center w-10 h-10 font-bold bg-white rounded-lg shadow-md'>
            <p className='blue-gradient_text'>JDS</p>
        </NavLink>
        <nav className='flex text-lg font-medium gap-7'>
            <NavLink to="https://jezreldave.com/#experiences" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>Experiences</NavLink>
            <NavLink to="https://jezreldave.com/#portfolio" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>Projects</NavLink>
        </nav>
    </header>
  )
}

export default Navbar
import Logo from '../B14-A05-DevStack/assets/logo-text.png'

const Nav = () => {
    return <nav className=' hidden md:flex flex justify-between container mx-auto py-4 border-b border-b-blue-100 sticky top-0 z-50'>
        <img className='w-[130px] h-[32px] mt-4' src={Logo} alt="" />
        <ul className="flex items-center gap-6 font-medium text-sm text-gray-600">
        <li className='text-fuchsia-600'> <a href="URL_GOES_HERE">Home</a> </li>
        <li> <a href="URL_GOES_HERE">Technologies</a> 
        </li>
        <li> <a href="URL_GOES_HERE">Projects</a> </li>
        <li> <a href="URL_GOES_HERE">About</a> </li>
        <li> <a href="URL_GOES_HERE">Contact</a> </li>
       </ul>
       <div className='flex justify-between gap-4'>
       <button>Sign In</button>
       <button className='h-15 w-25 bg-fuchsia-600 text-white p-4 rounded-[99px] border-2'>Sign Up</button>
       </div>
    </nav>
};

export default Nav;
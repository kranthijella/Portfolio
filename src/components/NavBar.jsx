import {NavLink} from "react-router-dom";

function NavBar({color}){
    return (
        <header className='header'>
        <NavLink to = '/' className=" font-semibold m w-12 h-7 text-[20px] rounded-lg">
            <p className={`text-${color}`}>Kranthi</p>
        </NavLink>
            <nav className="flex text-lg lg:gap-15 gap-7  font-medium">
                <NavLink to='/Portfolio/about' className={({isActive}) => isActive ? `text-${color}` : 'text-gray-400' }>
                    About
                </NavLink>
                <NavLink to='/Portfolio/projects' className={({isActive}) => isActive ? `text-${color}` : 'text-gray-400'}>
                    Projects
                </NavLink>
            </nav>
        </header>

    )
}

export default NavBar
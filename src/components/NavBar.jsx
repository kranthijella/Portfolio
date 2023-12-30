import {NavLink} from "react-router-dom";

function NavBar({color,component}){
    return (
        <header className='header'>
        <NavLink to = '/' className=" font-semibold m w-12 h-7 text-[20px] rounded-lg">
            <p className={`text-${color}`}>Kranthi</p>
        </NavLink>
            <nav className="flex text-lg lg:gap-15 gap-7  font-medium">
                <NavLink to='/about' className={({isActive}) => isActive ? `text-${color}` :  component === 'island'? 'text-black': 'text-gray-400' }>
                    About
                </NavLink>
                <NavLink to='/projects' className={({isActive}) => isActive ? `text-${color}` : component === 'island'? 'text-black': 'text-gray-400' }>
                    Projects
                </NavLink>
            </nav>
        </header>

    )
}

export default NavBar
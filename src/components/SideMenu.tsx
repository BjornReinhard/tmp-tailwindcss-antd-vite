import { NavLink } from "react-router-dom";

function SideMenu() {
    return <nav className="flex flex-col p-4 w-60 items-end">
        <div className="custom-nav-container">
            <NavLink to="one"
               className="flex justify-start no-underline ps-6 pe-3 py-2 text-sm text-black font-light transition-colors duration-300 rounded hover:bg-dustyBlue-dark hover:bg-opacity-35">Item
                one</NavLink>
            <NavLink to="two"
               className="flex justify-start no-underline ps-6 pe-3 py-2 text-sm text-black font-light transition-colors duration-300 rounded hover:bg-dustyBlue-dark hover:bg-opacity-35">Item
                two</NavLink>
            <NavLink to="three"
               className="flex justify-start no-underline ps-6 pe-3 py-2 text-sm text-black font-light transition-colors duration-300 rounded hover:bg-dustyBlue-dark hover:bg-opacity-35">Item
                three</NavLink>
            <NavLink to="four"
               className="flex justify-start no-underline ps-6 pe-3 py-2 text-sm text-black font-light transition-colors duration-300 rounded hover:bg-dustyBlue-dark hover:bg-opacity-35">Item
                four</NavLink>
        </div>
    </nav>
}

export default SideMenu

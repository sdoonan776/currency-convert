import {JSX, useState} from 'react';
import { FaLeaf } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import HeaderLink from "../ui/HeaderLink";

function Header(): JSX.Element
{
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <header>
                <nav className={`flex flex-wrap border border-gray-200 py-6 justify-between items-center md:py-2 md:px-6`}>
                    <div className="flex items-center px-6 md:px-0">
                        <FaLeaf className="mr-2 text-blue-400 text-2xl" />
                        <a className="text-blue-400 font-semibold" href="/">Currency Convert</a>
                    </div>
                    <div className="flex items-center px-6 md:px-0 md:hidden">
                        <FaBars className="text-gray-500 text-2xl cursor-pointer" onClick={(): void => setIsOpen(!isOpen) } aria-controls="navbar-nav"/>
                    </div>
                    <ul className={`
                         text-center w-full transform
                         transition-all duration-300
                         ease-in-out me-auto overflow-hidden
                         ${isOpen ? 'max-h-screen opacity-100 mt-6 border-t border-gray-200' : 'max-h-0 opacity-0 mt-0 border-none'}
                         md:me-0 md:w-auto md:flex
                         md:opacity-100 md:max-h-100
                         md:border-none md:mt-0
                        `}
                         id="navbar-nav"
                    >
                        <HeaderLink name="Home"/>
                        <HeaderLink name="About"/>
                        <HeaderLink name="Services"/>
                        <HeaderLink name="Contact"/>
                    </ul>
                </nav>
            </header>
        </>
    ); 
}

export default Header;

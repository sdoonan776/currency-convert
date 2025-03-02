import {JSX, useEffect, useState} from 'react';

function Header(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        console.log(isOpen);
    }, [isOpen]);

    return (
        <>
            <header>
                <nav className="flex flex-wrap p-6 justify-around items-center">
                    <div className="flex items-center">
                        <i className="fa-solid fa-leaf mr-4 text-blue-400 text-3xl"></i>
                        <a className="text-blue-400 font-semibold" href="/">Currency Convert</a>
                    </div>
                    <div>
                        <div className="flex items-center md:hidden">
                            <i className="fa-solid fa-bars text-gray-500 text-2xl cursor-pointer" onClick={(): void => setIsOpen(!isOpen) } aria-controls="navbar-nav"></i>
                        </div>
                        <ul className={`transform transition-transform duration-300 ease-in-out me-auto ${isOpen ? 'block' : 'hidden'} md:flex`} id="navbar-nav">
                            <li><a className="mx-2 text-gray-500 hover:text-gray-700" href="/">Home</a></li>
                            <li><a className="mx-2 text-gray-500 hover:text-gray-700" href="/about">About</a></li>
                            <li><a className="mx-2 text-gray-500 hover:text-gray-700" href="/services">Services</a></li>
                            <li><a className="mx-2 text-gray-500 hover:text-gray-700" href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    ); 
}

export default Header;

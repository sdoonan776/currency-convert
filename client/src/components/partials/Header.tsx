import { JSX } from 'react';

function Header(): JSX.Element {
    return (
        <>
            <header className='header'>
                <nav>
                    <div className="container flex p-6 justify-content">
                        <nav className="flex w-full">
                            <div className="flex-grow-1">
                                <a className="" href="/client/public/public">Currency Convert</a>
                            </div>
                            <div className="flex-grow-1">
                                <div aria-controls="navbar-nav"></div>
                                <div id="basic-navbar-nav">
                                    <ul className="me-auto md:flex md:justify-content">
                                        <li><a className="mx-2 text-gray-500 hover:text-gray-700" href="/client/public/public">Home</a></li>
                                        <li><a className="mx-2 text-gray-500 hover:text-gray-700" href="/about">About</a></li>
                                        <li><a className="mx-2 text-gray-500 hover:text-gray-700" href="/about">About</a></li>
                                        <li><a className="mx-2 text-gray-500 hover:text-gray-700" href="/contact">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </nav>
            </header>
        </>
    ); 
}

export default Header;

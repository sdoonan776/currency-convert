import { JSX } from 'react';
import {Link} from "@inertiajs/react";


interface HeaderLinkProps {
    name: string,
}

function HeaderLink(props: HeaderLinkProps): JSX.Element
{
    return (
        <>
            <li className="border-b border-gray-400 py-4
                           cursor-pointer md:border-none md:my-0">
                <Link className="mx-4 text-gray-500 hover:text-gray-700"
                      href={props.name == 'Home' ? '/' : props.name.toLowerCase()
                }>
                    { props.name }
                </Link>
            </li>
        </>
    );
};

export default HeaderLink;
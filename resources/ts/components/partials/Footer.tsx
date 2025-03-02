import {ReactElement, useEffect, useState} from 'react';

function Footer(): ReactElement {
    const [date, setDate] = useState<number>(0);

    useEffect(() => {
        setDate(new Date().getFullYear());
    }, [date]);

    return (
        <>
            <footer>
                <div className='text-center py-8 w-full fixed bottom-0'>
                    <p className='text-gray-500'>
                        { date } Currency Convert &copy; All Rights Reserved
                    </p>
                </div>
            </footer>
        </>
    ); 
}

export default Footer;

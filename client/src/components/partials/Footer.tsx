import {ReactElement, useEffect, useState} from 'react';

function Footer(): ReactElement {
    const [date, setDate] = useState<number>(0);

    useEffect(() => {
        setDate(new Date().getFullYear());
    }, [date]);

    return (
        <>
            <footer>
                <div className='flex justify-center p-6 fixed-bottom-0'>
                    <p className=''>
                        { date } Currency Convert &copy; All Rights Reserved
                    </p>
                </div>
            </footer>
        </>
    ); 
}

export default Footer;

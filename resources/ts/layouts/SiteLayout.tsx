import {JSX, ReactNode} from 'react';
import Header from '../components/partials/Header';
import Footer from '../components/partials/Footer';
import {Head} from "@inertiajs/react";

interface AppLayoutProps {
    children: ReactNode;
}

function SiteLayout({ children }: AppLayoutProps): JSX.Element {
    return (
        <>
            <Head title="Currency Convert | "/>
            <Header/>
            <div>
                {children}
            </div>
            <Footer/>
        </>
    );
};

export default SiteLayout;

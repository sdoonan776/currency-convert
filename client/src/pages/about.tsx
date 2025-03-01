import { ReactElement } from 'react';
// import ReactDOM from 'react-dom';

function About(): ReactElement {
    return (
        <>
            <div className="container flex w-full h-100 justify-center">
                <div className="flex-grow-1 bg-blue-400"></div>
                <div className="flex-grow-1">
                    lorem ipsum dolor sit amet, consectetur
                </div>
            </div>
            <div className="container flex w-full">
                <div className="flex-grow-1">
                    lorem ipsum dolor sit amet, consectetur adipis
                </div>
                <div className="flex-grow-1 bg-blue-400"></div>
            </div>
            <div className="container flex w-full">
                <div className="flex-grow-1 bg-blue-400"></div>
                <div className="flex-grow-1">
                    Lorem ipsum dolor sit amet, consectetur adipi
                </div>
            </div>
        </>
    );
}

export default About;
import { JSX } from 'react';
import SiteLayout from "../layouts/SiteLayout";
// import ReactDOM from 'react-dom';

function About(): JSX.Element {
    return (
        <>
            <SiteLayout>
                <div className="container mx-auto my-6">
                    <div className="flex h-100 justify-center item-center">
                        <p className="flex-1/2 order-2 leading-12 p-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                        </p>
                        <div className="flex-1/2 order-1 bg-blue-400"></div>
                    </div>
                    <div className="flex w-full">
                        <div className="my-6 mx-auto flex h-100 justify-center item-center">
                            <div className="flex-grow-1">
                                lorem ipsum dolor sit amet, consectetur adipis
                            </div>
                            <div className="flex-grow-1 bg-blue-400"></div>
                        </div>
                        <div className="flex w-full">
                            <div className="flex-grow-1 bg-blue-400"></div>
                            <div className="flex-grow-1">
                                Lorem ipsum dolor sit amet, consectetur adipi
                            </div>
                        </div>
                    </div>
                </div>
            </SiteLayout>
        </>
    );
}

export default About;
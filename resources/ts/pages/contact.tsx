import { JSX } from 'react';
import SiteLayout from "../layouts/SiteLayout";

function Contact(): JSX.Element {
    return (
       <>
           <SiteLayout>
               <div className="container">
                   <h1>Contact</h1>
               </div>
           </SiteLayout>
       </>
    )
}

export default Contact;
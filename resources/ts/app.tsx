import './../css/app.css';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot, Root } from 'react-dom/client';

createInertiaApp({
    resolve: name => {
        // @ts-ignore
        const pages: Page = import.meta.glob('./pages/**/*.tsx', { eager: true })
        return pages[`./pages/${name.toLowerCase()}.tsx`]
    },

    setup({ el, App, props }): void {
        const root: Root = createRoot(el);
        root.render(<App {...props} />);
    },
})
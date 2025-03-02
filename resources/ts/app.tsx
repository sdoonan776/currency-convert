import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

createInertiaApp({
    resolve: name => {
        // @ts-ignore
        const pages: Page = import.meta.glob('./pages/**/*.tsx', { eager: true })
        return pages[`./pages/${name}.tsx`]
    },

    setup({ el, App, props }): void {
        createRoot(el).render(<App {...props} />)
    },
})
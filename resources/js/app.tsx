import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";

import "../css/app.css";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./pages/**/*.tsx", { eager: true });
        return (pages[`./pages/${name}.tsx`] as any).default;
    },
    setup({ el, App, props }) {
        const root = createRoot(el as HTMLElement);
        root.render(<App {...props} />);
    },
    progress: { color: "#29d" },
});

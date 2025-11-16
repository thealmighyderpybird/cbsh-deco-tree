import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return <div className="m-auto p-10 max-w-196">{ children }</div>
};
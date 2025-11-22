import type { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
    return <div className="flex flex-col items-center">{ children }</div>
};
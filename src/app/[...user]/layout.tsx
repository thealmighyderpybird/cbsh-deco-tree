import type { ReactNode } from "react";

export default async function Layout({ children, params }: { children: ReactNode, params: Promise<{ user: string }> }) {
    const { user } = await params;

    return <div className="m-auto p-10 max-w-196">
        <h2 className="my-20 text-center text-5xl font-bold select-none">{ user }'s Tree</h2>
        { children }
    </div>
};
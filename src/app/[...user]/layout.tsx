import type { CBSHUser } from "~/lib/getSessionInfo";
import CBSHServerURL from "~/CBSHServerURL";
import type { ReactNode } from "react";

interface CBSHUserAPIResponse {
    status: "OK" | "FAILED",
    data: CBSHUser
}

export default async function Layout({ children, params }: { children: ReactNode, params: Promise<{ user: string }> }) {
    const { user } = await params;
    const r = await fetch(CBSHServerURL + "/users/" + user);
    const res = await r.json() as CBSHUserAPIResponse;

    const displayName = (res.data.displayname !== "") ? res.data.displayname : user;

    return <div className="m-auto p-10 max-w-196">
        <h2 className="my-20 text-center text-3xl sm:text-4xl md:text-5xl font-bold select-none">{ displayName }'s Tree</h2>
        { children }
    </div>
};
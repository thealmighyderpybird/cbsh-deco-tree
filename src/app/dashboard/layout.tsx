import { redirect } from "next/navigation";
import getSession from "~/lib/getSession";
import type { ReactNode } from "react";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
    const { uid } = await getSession();
    if (!uid) redirect("https://account.croomssched.tech/auth/login/sso/deco-my-tree");

    return <div className="container mx-auto px-5 py-10 min-h-screen flex items-start justify-center">{ children }</div>;
};
import TreeServerURL from "~/TreeServerURL";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

export default async function Layout({ children, params }: { children: ReactNode, params:  }) {
    const r = await fetch(TreeServerURL + "/" + userInfo.id);
    const { status, data } = await r.json() as { status: "OK" | "FAILED", data: any };

    if (status !== "OK") redirect("./");
    if (data?.code === "ERR_NOT_FOUND")

    return <div className="flex flex-col items-center">{ children }</div>
};
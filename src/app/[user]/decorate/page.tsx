import getSessionInfo from "~/lib/getSessionInfo";
import TreeServerURL from "~/TreeServerURL";
import getUserInfo from "~/lib/getUserInfo";
import getSession from "~/lib/getSession";
import {redirect} from "next/navigation";
import Client from "./client";

export default async function DecoratePage({ params }: { params: Promise<{ user: string }> }) {
    const { user } = await params;
    const userInfo = await getUserInfo(user);
    const { sid } = await getSession();

    const r = await fetch(TreeServerURL + "/" + userInfo.id);
    const { status, data } = await r.json() as { status: "OK" | "FAILED", data: any };

    if (status !== "OK") redirect("..");
    if (data?.code === "ERR_NOT_FOUND") redirect("..")

    const displayName = (userInfo.displayname !== "") ? userInfo.displayname.trim() : String(user).trim();

    return <Client userData={await getSessionInfo(sid)} displayName={displayName} treeId={userInfo.id} />;
}
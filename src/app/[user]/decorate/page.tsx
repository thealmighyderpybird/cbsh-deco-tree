import getSessionInfo from "~/lib/getSessionInfo";
import getUserInfo from "~/lib/getUserInfo";
import getSession from "~/lib/getSession";
import Client from "./client";

export default async function DecoratePage({ params }: { params: Promise<{ user: string }> }) {
    const { user } = await params;
    const userInfo = await getUserInfo(user);
    const { sid } = await getSession();

    const displayName = (userInfo.displayname !== "") ? userInfo.displayname.trim() : String(user).trim();

    return <Client userData={await getSessionInfo(sid)} displayName={displayName} />;
}
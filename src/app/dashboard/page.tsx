import getSessionInfo from "~/lib/getSessionInfo";
import TreeCreationTool from "./TreeCreationTool";
import getTreeInfo from "~/lib/getTreeInfo";
import getSession from "~/lib/getSession";

export default async function DashboardPage() {
    const { uid, sid } = await getSession();
    const user = await getSessionInfo(sid);
    const tree = await getTreeInfo(uid);

    if (!tree?.details) return <TreeCreationTool uid={uid} sid={sid} userInfo={user} />;

    return <>
        {user.displayname}'s Tree
    </>;
};
import getSessionInfo from "~/lib/getSessionInfo";
import getSession from "~/lib/getSession";

export default async function DashboardPage() {
    const { sid } = await getSession();
    const sessionInfo = await getSessionInfo(sid);

    return <>
        {sessionInfo.displayname}'s Tree
    </>;
};
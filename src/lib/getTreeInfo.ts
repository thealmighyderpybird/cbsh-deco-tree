import TreeServerURL from "~/TreeServerURL";

interface TreeAPIResponse {
    status: "OK" | "FAILED",
    data: TreeInfo
}

export type TreeInfo = {
    details: { tree: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7, topper: 0 | 1 | 2 | 3 | 4 },
    ornaments: string[],
    uid: string,
};

const getTreeInfo = async (uid: string) => {
    const r = await fetch(TreeServerURL + "/" + uid, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    const res = await r.json() as TreeAPIResponse;
    return res.data;
};

export default getTreeInfo;
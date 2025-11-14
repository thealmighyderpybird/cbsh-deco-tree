import type { TreeInfo } from "~/lib/getTreeInfo";

export default function Client({ sid, displayName, treeInfo }: { sid: string, displayName: string, treeInfo: TreeInfo }) {
    return <button className="p-3 leading-none rounded-xl bg-orange-400 hover:opacity-90 active:opacity-70 w-fit min-w-32"
                   >Add a message</button>
}
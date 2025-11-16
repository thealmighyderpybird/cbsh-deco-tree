import ChristmasTree from "~/components/ChristmasTree";
import ChristmasTop from "~/components/ChristmasTop";
import getUserInfo from "~/lib/getUserInfo";
import TreeServerURL from "~/TreeServerURL";
import Link from "next/link";

export default async function Page({ params }: { params: Promise<{ user: string }> }) {
    const { user } = await params;
    const userInfo = await getUserInfo(user);

    const displayName = (userInfo.displayname !== "") ? userInfo.displayname.trim() : String(user).trim();

    const r = await fetch(TreeServerURL + "/" + userInfo.id);
    const { status, data } = await r.json() as { status: "OK" | "FAILED", data: any };

    if (status !== "OK") return <>
        <h2 className="mt-15 mb-25 text-center text-4xl md:text-5xl font-bold select-none">{ displayName }'
            { !displayName.endsWith("s") && "s" } Tree</h2>
        <div className="text-center">
            <h2 className="leading-none text-2xl">A server error happened while loading this tree.</h2>
            <p className="leading-none">Please try again at a later time.</p>
        </div>
    </>;

    if (data?.code === "ERR_NOT_FOUND") return <>
        <h2 className="mt-15 mb-25 text-center text-4xl md:text-5xl font-bold select-none">{ displayName }'
            { !displayName.endsWith("s") && "s" } Tree</h2>
        <div className="text-center">
            <h2 className="leading-none text-2xl">This user hasn't created their tree yet!</h2>
            <p className="leading-none mb-5">You can ask them to create their tree so you can share a message.</p>
            <Link className="p-3 leading-none rounded-xl bg-orange-400 hover:opacity-90 active:opacity-70 inline-block"
                  href="/dashboard">Create your own tree</Link>
        </div>
    </>;

    return <>
        <h2 className="mt-15 mb-25 text-center text-4xl md:text-5xl font-bold select-none">{ displayName }'
            { !displayName.endsWith("s") && "s" } Tree</h2>
        <div className="flex flex-col justify-center items-center gap-10">
            <div className="flex justify-center">
                <div className="absolute left-1/2" style={{ transform: "translate(-50%, -75%)" }}>
                    <ChristmasTop type={data.details.topper} scale={1} />
                </div>
                <ChristmasTree type={data.details.tree} scale={1} />
            </div>
            <div className="flex flex-col gap-2">
                <Link className="p-3 leading-none rounded-xl bg-orange-400 hover:opacity-90 active:opacity-70 w-fit min-w-32"
                      href={`/${user}/decorate`}>Decorate this Tree</Link>
                <Link className="underline hover:no-underline" href="/dashboard">Create your own tree</Link>
            </div>
        </div>
    </>;
};
import ChristmasTree from "~/components/ChristmasTree";
import ChristmasTop from "~/components/ChristmasTop";
import TreeServerURL from "~/TreeServerURL";
import Link from "next/link";

export default async function Page({ params }: { params: Promise<{ user: string }> }) {
    const { user } = await params;

    const r = await fetch(TreeServerURL + "/" + user);
    const { status, data } = await r.json() as { status: "OK" | "FAILED", data: any };

    if (status !== "OK") return <div className="text-center">
        <h2 className="leading-none text-2xl">A server error happened while loading this tree.</h2>
        <p className="leading-none">Please try again at a later time.</p>
    </div>;

    if (data?.code === "ERR_NOT_FOUND") return <div className="text-center">
        <h2 className="leading-none text-2xl">This user hasn't created their tree yet!</h2>
        <p className="leading-none mb-5">You can ask them to create their tree so you can share a message.</p>
        <Link className="p-3 leading-none rounded-xl bg-orange-400 hover:opacity-90 active:opacity-70 inline-block"
              href="/dashboard">Create your own tree</Link>
    </div>;

    return <>
        <div className="flex justify-center">
            <div className="absolute left-1/2" style={{ transform: "translate(-50%, -75%)" }}>
                <ChristmasTop type={1} scale={1.25} />
            </div>
            <ChristmasTree type={3} scale={1.25} />
        </div>
    </>
};
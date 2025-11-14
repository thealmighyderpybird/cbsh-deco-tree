import CroomsBellScheduleLogo from "~/components/CBSHLogo";
import ChristmasTree from "~/components/ChristmasTree";
import ChristmasTop from "~/components/ChristmasTop";
import getTreeInfo from "~/lib/getTreeInfo";
import getSession from "~/lib/getSession";
import Link from "next/link";

export default async function HomePage() {
    const treeInfo = await getTreeInfo((await getSession()).uid);

    return <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
            <header className="flex flex-col items-center select-none">
                <CroomsBellScheduleLogo size={48} />
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">Deco My Tree</h1>
            </header>
            <section className="mt-10">
                <div className="absolute left-1/2" style={{ transform: "translate(-50%, -75%)" }}>
                    <ChristmasTop type={treeInfo?.details ? treeInfo.details.topper : 1} />
                </div>
                <ChristmasTree type={treeInfo?.details ? treeInfo.details.tree : 3} />
            </section>
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
                <Link
                    className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
                    href="/dashboard">
                    <h3 className="text-2xl font-bold leading-none">
                        { treeInfo?.details ? "View Your Tree →" : "Create Your Tree →" }</h3>
                    <div className="text-lg leading-5">
                        { treeInfo?.details ?
                            "View your tree and decorations your friends have added." :
                            "Create your tree so others can decorate it and write messages." }
                    </div>
                </Link>
                <Link
                    className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
                    href="https://create.t3.gg/en/introduction"
                    target="_blank"
                >
                    <h3 className="text-2xl font-bold leading-none">View Another Tree →</h3>
                    <div className="text-lg leading-5">
                        View and decorate someone else's tree with a nice message.
                    </div>
                </Link>
            </section>
            <footer className="flex flex-col text-center text-sm select-none sm:flex-row sm:gap-4">
                <Link href="https://croomssched.tech/terms" target="CBSH_TERMS" tabIndex={1}
                      className="underline hover:no-underline">Terms of Service</Link>
                <Link href="https://croomssched.tech/privacy" target="CBSH_PRIVACY" tabIndex={1}
                      className="underline hover:no-underline">Privacy Policy</Link>
                <span>&copy; Crooms Bell Schedule 2025</span>
            </footer>
        </div>
    </main>;
}

import Spinner from "~/components/Spinner";
import LoginTool from "./LoginTool";

export default async function AuthCallback({ searchParams }: { searchParams: Promise<{ ssoId: string }> }) {
    const { ssoId } = await searchParams;

    return <div className="min-h-screen flex flex-col justify-center">
        <div className="flex flex-col items-center px-2 gap-4">
            <Spinner size={100} />
            <div className="text-center select-none">
                <h2 className="text-2xl leading-none">Please wait...</h2>
                <p className="leading-none">Logging you in...</p>
            </div>
            <LoginTool ssoId={ssoId} appId="deco-my-tree" />
        </div>
    </div>
}
import treeImg from "./tree.png";

export default async function Layout({ params }: { params: Promise<{ user: string }> }) {
    const { user } = await params;

    return <div>
        <div>
            <img src={ treeImg.src } alt="Christmas Tree" />
        </div>
    </div>
};
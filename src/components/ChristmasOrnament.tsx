export default async function ChristmasOrnament({ type, scale = 1 }: { type: number, scale?: number }) {
    const tree = await import("./ornaments/" + type + ".png");
    return <img src={tree!.src} alt={"Ornament #" + type} width={70 * scale} height={70 * scale}
                draggable="false" className="select-none" />
};
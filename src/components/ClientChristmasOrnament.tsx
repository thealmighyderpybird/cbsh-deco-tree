import Image from "next/image";

export default function ClientChristmasOrnament({ type, scale = 1, current, onClick = () => null }:
{ type: number, current: number, scale?: number, onClick?: (value: number) => void }) {
    return <Image src={"/ornaments/" + type + ".png"} alt={"Ornament #" + type} width={70 * scale} height={70 * scale}
                  className={"select-none bg-[#3338] rounded-2xl p-3 transition-all block" + isCurrent(current, type) }
                  draggable="false" onClick={() => onClick(type)} style={{ height: 70*scale + "px" }} tabIndex={1}
                  onKeyDown={(e) => {if (e.key === "Enter" || e.key === " ") onClick(type)}} />
};

const isCurrent = (current: number, type: number) =>
    type === current ? " border-2 border-[#f28b15]" : "";
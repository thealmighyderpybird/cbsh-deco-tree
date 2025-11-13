import santaHat from "./top/0.png";
import starTop from "./top/1.png";
import diamond from "./top/2.png";
import planet from "./top/3.png";
import heart from "./top/4.png";

type TopInfo = {
    name: string,
    src: string,
}

export const topperList: TopInfo[] = [
    {
        name: "Santa Hat",
        src: santaHat.src,
    },
    {
        name: "Star",
        src: starTop.src,
    },
    {
        name: "Diamond",
        src: diamond.src,
    },
    {
        name: "Planet",
        src: planet.src,
    },
    {
        name: "Heart",
        src: heart.src,
    }
];

export default function ChristmasTop({ type, scale = 1 }: { type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7, scale?: number }) {
    return <img src={topperList[type]!.src} alt={topperList[type]!.name} width={50 * scale} height={50 * scale}
                draggable="false" className="select-none" />
};
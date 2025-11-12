import redTree from "./tree/0.png";
import yellowTree from "./tree/1.png";
import lightGreenTree from "./tree/2.png";
import greenTree from "./tree/3.png";
import tealTree from "./tree/4.png";
import blueTree from "./tree/5.png";
import purpleTree from "./tree/6.png";
import rainbowTree from "./tree/7.png";
import Image from "next/image";

type TreeInfo = {
    name: string,
    src: string,
}

export const treeList: TreeInfo[] = [
    {
        name: "Red Tree",
        src: redTree.src,
    },
    {
        name: "Yellow Tree",
        src: yellowTree.src,
    },
    {
        name: "Light Green Tree",
        src: lightGreenTree.src,
    },
    {
        name: "Green Tree",
        src: greenTree.src,
    },
    {
        name: "Teal Tree",
        src: tealTree.src,
    },
    {
        name: "Blue Tree",
        src: blueTree.src,
    },
    {
        name: "Purple Tree",
        src: purpleTree.src,
    },
    {
        name: "Rainbow Tree",
        src: rainbowTree.src,
    }
];

export default function ChristmasTree({ type, scale = 1 }: { type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7, scale?: number }) {
    return <Image src={treeList[type]!.src} alt={treeList[type]!.name} width={285 * scale} height={371 * scale}
                  draggable={false} className="select-none" />
};
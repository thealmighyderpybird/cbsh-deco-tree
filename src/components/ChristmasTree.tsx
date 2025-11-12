import redTree from "./tree/0.png";
import yellowTree from "./tree/1.png";
import lightGreenTree from "./tree/2.png";
import greenTree from "./tree/3.png";
import tealTree from "./tree/4.png";
import blueTree from "./tree/5.png";
import purpleTree from "./tree/6.png";
import rainbowTree from "./tree/7.png";

type TreeInfo = {
    name: string,
    src: string,
}

export const treeList: Record<string, TreeInfo> = {
    red: {
        name: "Red Tree",
        src: redTree.src,
    },
    yellow: {
        name: "Yellow Tree",
        src: yellowTree.src,
    },
    lightGreen: {
        name: "Light Green Tree",
        src: lightGreenTree.src,
    },
    green: {
        name: "Green Tree",
        src: greenTree.src,
    },
    teal: {
        name: "Teal Tree",
        src: tealTree.src,
    },
    blue: {
        name: "Blue Tree",
        src: blueTree.src,
    },
    purple: {
        name: "Purple Tree",
        src: purpleTree.src,
    },
    rainbow: {
        name: "Rainbow Tree",
        src: rainbowTree.src,
    }
};

export default function ChristmasTree({ type }: { type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 }) {

};
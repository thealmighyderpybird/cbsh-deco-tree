"use client";

import ChristmasTree from "~/components/ChristmasTree";
import ChristmasTop from "~/components/ChristmasTop";
import type { CBSHUser } from "~/lib/getSessionInfo";
import deleteSession from "~/lib/deleteSession";
import Spinner from "~/components/Spinner";
import MakeTreeTool from "./MakeTreeTool";
import { useState } from "react";

const creativeTreeName = [
    "Crimson Red",
    "Faded Yellow",
    "Light Green",
    "Evergreen",
    "Aqua Teal",
    "Wintry Blue",
    "Royal Purple",
    "Rainbow"
];

const creativeTopName = [
    "Santa Hat",
    "Star",
    "Diamond",
    "Planet",
    "Heart"
];

export default function TreeCreationTool({ sid, uid, userInfo }: { sid: string, uid: string, userInfo: CBSHUser }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [currentTree, setCurrentTree] = useState(3);
    const [currentTop, setCurrentTop] = useState(1);
    const steps = [<div className="flex flex-col items-center justify-center gap-10 my-5 mx-auto max-w-lg">
        <header className="text-center leading-none">
            <span className="text-lg leading-none sm:text-2xl">welcome to</span>
            <h1 className="text-5xl font-extrabold tracking-tight leading-none sm:text-[5rem]">Deco My Tree</h1>
        </header>
        <main>
            <p className="mb-4">Let's get you set up and ready to receive decorations and messages from your friends.</p>
            <p>First, is this the account you want to use for your tree?</p>
        </main>
        <section className="flex flex-row gap-2.5 items-center">
            <img src={`https://api.croomssched.tech/users/profile-picture/${uid}`} draggable="false" role="img"
                 alt={userInfo.username + "'s Profile Picture"} title={userInfo.username + "'s Profile Picture"}
                 className="rounded-full w-auto h-18 block" />
            <div className="flex flex-col justify-center">
                <span className="leading-none font-bold text-2xl">
                    { userInfo?.displayname !== "" ? userInfo.displayname : "@" + userInfo.username }</span>
                <span className="leading-none">{ userInfo?.displayname !== "" && "@" + userInfo.username }</span>
            </div>
        </section>
        <footer className="flex flex-row justify-center gap-1">
            <button className="p-3 leading-none rounded-xl bg-orange-400 hover:opacity-90 active:opacity-70 min-w-18"
                    onClick={() => void deleteSession()}>No</button>
            <button className="p-3 leading-none rounded-xl bg-orange-400 hover:opacity-90 active:opacity-70 min-w-18"
                    onClick={() => setCurrentStep(1)}>Yes</button>
        </footer>
    </div>, <div className="flex flex-col items-center justify-center gap-10 my-5 mx-auto max-w-lg">
        <header className="text-center leading-none">
            <span className="text-lg leading-none sm:text-2xl">welcome to</span>
            <h1 className="text-5xl font-extrabold tracking-tight leading-none sm:text-[5rem]">Deco My Tree</h1>
        </header>
        <main>
            <p className="mb-4">
                Now, let&apos;s customize your tree with its own look and feel.
                Use the arrow buttons below to select the tree you want.
                Please note that once you create your tree, you can&apos;t change this later.
            </p>
        </main>
        <section className="flex flex-col gap-2.5 items-center">
            {/* @ts-expect-error keep number between 0 and 7 */}
            <ChristmasTree type={currentTree} />
            <div className="flex items-center gap-2">
                <svg className="hover:bg-[#fff2] active:bg-[#fff4] rounded-full fill-current w-8 h-8"
                     onClick={() => setCurrentTree(updateTreeState(currentTree, -1))}
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M16.707 22.707a1 1 0 0 0 0-1.414L12.414 17H22a1 1 0 1 0 0-2h-9.586l4.293-4.293a1 1 0 0 0-1.414-1.414l-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414 0M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2S2 8.268 2 16s6.268 14 14 14m12-14c0 6.627-5.373 12-12 12S4 22.627 4 16S9.373 4 16 4s12 5.373 12 12" />
                </svg>
                <span className="text-xl text-center leading-none inline-block min-w-30">
                    { creativeTreeName[currentTree] }</span>
                <svg className="hover:bg-[#fff2] active:bg-[#fff4] rounded-full fill-current w-8 h-8"
                     onClick={() => setCurrentTree(updateTreeState(currentTree, 1))}
                     viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.293 9.293a1 1 0 0 0 0 1.414L19.586 15H10a1 1 0 1 0 0 2h9.586l-4.293 4.293a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 0M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14s14-6.268 14-14S23.732 2 16 2M4 16C4 9.373 9.373 4 16 4s12 5.373 12 12s-5.373 12-12 12S4 22.627 4 16" />
                </svg>
            </div>
        </section>
        <footer className="flex flex-row justify-center gap-1">
            <button className="p-3 leading-none rounded-xl bg-orange-400 hover:opacity-90 active:opacity-70 min-w-18"
                    onClick={() => setCurrentStep(2)}>Next</button>
        </footer>
    </div>, <div className="flex flex-col items-center justify-center gap-10 my-5 mx-auto max-w-lg">
        <header className="text-center leading-none">
            <span className="text-lg leading-none sm:text-2xl">welcome to</span>
            <h1 className="text-5xl font-extrabold tracking-tight leading-none sm:text-[5rem]">Deco My Tree</h1>
        </header>
        <main>
            <p className="mb-4">
                Finally, let&apos;s add something to the top of your tree.
                Use the arrow buttons below to select the topper you want.
                Please note that once you create your tree, you can&apos;t change this later.
            </p>
        </main>
        <section className="flex flex-col gap-2.5 items-center">
            <div className="absolute left-1/2" style={{ transform: "translate(-50%, -75%)" }}>
                {/* @ts-expect-error keep number between 0 and 4 */}
                <ChristmasTop type={currentTop} />
            </div>
            {/* @ts-expect-error keep number between 0 and 7 */}
            <ChristmasTree type={currentTree} />
            <div className="flex items-center gap-2">
                <svg className="hover:bg-[#fff2] active:bg-[#fff4] rounded-full fill-current w-8 h-8"
                     onClick={() => setCurrentTop(updateTopState(currentTop, -1))}
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M16.707 22.707a1 1 0 0 0 0-1.414L12.414 17H22a1 1 0 1 0 0-2h-9.586l4.293-4.293a1 1 0 0 0-1.414-1.414l-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414 0M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2S2 8.268 2 16s6.268 14 14 14m12-14c0 6.627-5.373 12-12 12S4 22.627 4 16S9.373 4 16 4s12 5.373 12 12" />
                </svg>
                <span className="text-xl text-center leading-none inline-block min-w-30">
                    { creativeTopName[currentTop] }</span>
                <svg className="hover:bg-[#fff2] active:bg-[#fff4] rounded-full fill-current w-8 h-8"
                     onClick={() => setCurrentTop(updateTopState(currentTop, 1))}
                     viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.293 9.293a1 1 0 0 0 0 1.414L19.586 15H10a1 1 0 1 0 0 2h9.586l-4.293 4.293a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 0M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14s14-6.268 14-14S23.732 2 16 2M4 16C4 9.373 9.373 4 16 4s12 5.373 12 12s-5.373 12-12 12S4 22.627 4 16" />
                </svg>
            </div>
        </section>
        <footer className="flex flex-row justify-center gap-1">
            <button className="p-3 leading-none rounded-xl bg-orange-400 hover:opacity-90 active:opacity-70 min-w-18"
                    onClick={() => setCurrentStep(1)}>Back</button>
            <button className="p-3 leading-none rounded-xl bg-orange-400 hover:opacity-90 active:opacity-70 min-w-18"
                    onClick={() => setCurrentStep(3)}>Finish</button>
        </footer>
    </div>, <div style={{ height: "calc(100vh - 5rem)" }}>
        <div className="flex flex-col justify-center items-center px-2 gap-4 min-h-full">
            <Spinner size={100} />
            <div className="text-center select-none">
                <h2 className="text-2xl leading-none">Please wait...</h2>
                <p className="leading-none">Creating your tree...</p>
            </div>
        </div>
        <MakeTreeTool sid={sid} treeDetails={{ tree: currentTree, topper: currentTop }} />
    </div>];
    
    return <>{steps[currentStep]}</>;
};

const updateTreeState = (value: number, incrementor: number) => {
    if (value + incrementor > 7) return 0;
    if (value + incrementor < 0) return 7;
    return value + incrementor;
};

const updateTopState = (value: number, incrementor: number) => {
    if (value + incrementor > 4) return 0;
    if (value + incrementor < 0) return 4;
    return value + incrementor;
};
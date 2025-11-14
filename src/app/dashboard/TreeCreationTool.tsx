"use client";

import type { CBSHUser } from "~/lib/getSessionInfo";
import deleteSession from "~/lib/deleteSession";
import { useState } from "react";

export default function TreeCreationTool({ sid, uid, userInfo }: { sid: string, uid: string, userInfo: CBSHUser }) {
    const [currentStep, setCurrentStep] = useState(0)
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
            <p className="mb-4">Now, let&apos;s customize your tree with it&apos;s own look and feel.
                Use the arrow buttons below to select the tree you want.</p>
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
                    onClick={() => setCurrentStep(1)}>Next</button>
        </footer>
    </div>];
    
    return <>{steps[currentStep]}</>;
}
"use client";

import ChristmasOrnament from "~/components/ClientChristmasOrnament";
import type { CBSHUser } from "~/lib/getSessionInfo";
import LiveEdit from "~/components/LiveEdit";
import TreeServerURL from "~/TreeServerURL";
import useAlert from "~/AlertContext";
import { useState } from "react";
import {d} from "tailwindcss/dist/types-WlZgYgM8";

export default function Client({ userData, displayName, treeId }: { userData: CBSHUser, displayName: string, treeId: string }) {
    const ud = userData?.displayname ? userData.displayname.trim() : (userData?.username ? String(userData.username).trim() : "");
    const [ornament, setOrnament] = useState(0);
    const [page, setPage] = useState(0);

    const pages = [
        <OrnamentPage displayName={displayName} ornament={ornament} setPage={setPage} setOrnament={setOrnament} />,
        <MessagePage displayName={displayName} ornament={ornament} userDisplay={ud} treeId={treeId} />
    ];

    return pages[page];
};

const OrnamentPage = ({ displayName, ornament, setPage, setOrnament }:
                      { displayName: string, ornament: number, setPage: (value: number) => void, setOrnament: (value: number) => void }) => {
    return <>
        <h1 className="mt-15 mb-25 text-center text-3xl md:text-4xl font-bold select-none">Decorate { displayName }'
            { !displayName.endsWith("s") && "s" } Tree</h1>
        <div className="rounded-3xl bg-[#3338] px-10 py-7.5 max-w-160 m-auto flex flex-col gap-10 justify-center items-center">
            <h2 className="leading-none text-center text-2xl md:text-3xl font-bold select-none">
                Choose a decoration!</h2>
            <div className="flex flex-row flex-wrap gap-5 m-auto w-fit items-center justify-center">
                <ChristmasOrnament type={0} current={ornament} onClick={(e) => setOrnament(e)} />
                <ChristmasOrnament type={1} current={ornament} onClick={(e) => setOrnament(e)} />
                <ChristmasOrnament type={2} current={ornament} onClick={(e) => setOrnament(e)} />
                <ChristmasOrnament type={3} current={ornament} onClick={(e) => setOrnament(e)} />
                <ChristmasOrnament type={4} current={ornament} onClick={(e) => setOrnament(e)} />
                <ChristmasOrnament type={5} current={ornament} onClick={(e) => setOrnament(e)} />
                <ChristmasOrnament type={6} current={ornament} onClick={(e) => setOrnament(e)} />
                <ChristmasOrnament type={7} current={ornament} onClick={(e) => setOrnament(e)} />
                <ChristmasOrnament type={8} current={ornament} onClick={(e) => setOrnament(e)} />
                <ChristmasOrnament type={9} current={ornament} onClick={(e) => setOrnament(e)} />
                <ChristmasOrnament type={10} current={ornament} onClick={(e) => setOrnament(e)} />
                <ChristmasOrnament type={11} current={ornament} onClick={(e) => setOrnament(e)} />
                <ChristmasOrnament type={12} current={ornament} onClick={(e) => setOrnament(e)} />
                <ChristmasOrnament type={13} current={ornament} onClick={(e) => setOrnament(e)} />
                <ChristmasOrnament type={14} current={ornament} onClick={(e) => setOrnament(e)} />
                <ChristmasOrnament type={15} current={ornament} onClick={(e) => setOrnament(e)} />
                <ChristmasOrnament type={16} current={ornament} onClick={(e) => setOrnament(e)} />
                <ChristmasOrnament type={17} current={ornament} onClick={(e) => setOrnament(e)} />
                <ChristmasOrnament type={18} current={ornament} onClick={(e) => setOrnament(e)} />
                <ChristmasOrnament type={19} current={ornament} onClick={(e) => setOrnament(e)} />
                <ChristmasOrnament type={20} current={ornament} onClick={(e) => setOrnament(e)} />
                <ChristmasOrnament type={21} current={ornament} onClick={(e) => setOrnament(e)} />
                <ChristmasOrnament type={22} current={ornament} onClick={(e) => setOrnament(e)} />
                <ChristmasOrnament type={23} current={ornament} onClick={(e) => setOrnament(e)} />
                <ChristmasOrnament type={24} current={ornament} onClick={(e) => setOrnament(e)} />
                <ChristmasOrnament type={25} current={ornament} onClick={(e) => setOrnament(e)} />
                <ChristmasOrnament type={26} current={ornament} onClick={(e) => setOrnament(e)} />
                <ChristmasOrnament type={27} current={ornament} onClick={(e) => setOrnament(e)} />
            </div>
        </div>
        <button className={"p-3 leading-none rounded-xl bg-orange-400 hover:opacity-90 active:opacity-70 w-fit " +
            "min-w-32 transition-all mt-10"} onClick={() => setPage(1)}>Next</button>
    </>;
};

const MessagePage = ({ displayName, userDisplay, ornament, treeId }:
                     { displayName: string, userDisplay: string, ornament: number, treeId: string }) => {
    const [message, setMessage] = useState("");
    const [name, setName] = useState(userDisplay);
    const { createAlertBalloon } = useAlert();

    return <>
        <h1 className="mt-15 mb-25 text-center text-3xl md:text-4xl font-bold select-none">
            Leave a message for { displayName }</h1>
        <div className="rounded-3xl bg-[#3338] px-10 py-7.5 max-w-160 m-auto flex flex-col gap-5 justify-center items-center w-screen">
            <div className="flex gap-1 w-full items-center">
                <label className="mb-1">Name: </label>
                <input value={name} onChange={e => setName(e.currentTarget.value)} placeholder="Bestie"
                       className={"border-b border-b-neutral-500 focus:border-b-orange-400 outline-none w-full " +
                           "px-2 py-1 bg-[#2225] rounded-lg"} />
            </div>
            <LiveEdit value={message} onChange={e => setMessage(e)} style={{ resize: "none", height: "15rem" }} />
        </div>
        <button className={"p-3 leading-none rounded-xl bg-orange-400 hover:opacity-90 active:opacity-70 w-fit " +
            "min-w-32 transition-all mt-10 disabled:opacity-60"} onClick={() => postOrnament(treeId, ornament, name, message, createAlertBalloon)}
            disabled={name === "" || (message === "" || message === "<br />" || message === "<div></div>")}>Finish</button>
    </>;
};

const postOrnament = async (treeId: string, ornament: number, name: string,
                            message: string, newAlert: (title: string, message: string, type?: 0 | 2 | 1 | -1 | undefined) => void) => {
    try {
        const r = await fetch(TreeServerURL + "/" + treeId, {
            body: JSON.stringify({ ornament, name, message }),
            headers: { "Content-Type": "application/json" },
            method: "POST",
        });

        if (r.status.toString().startsWith("50")) {
            newAlert("A server error occurred",
                (await r.json() as { data: { message: string } }).data.message ?? "An unknown error occurred", 2);
            return;
        }

        const res = await r.json() as { status: "OK" | "FAILED" | "SUCCESS", data: any };

        if (res.status === "FAILED") {
            newAlert("An error occurred",
                res.data.message ?? "An unknown error occurred", 2);
            return;
        }
    } catch (e: Error) {
        newAlert("A client error occurred", e.message ?? e, 2);
    }
};
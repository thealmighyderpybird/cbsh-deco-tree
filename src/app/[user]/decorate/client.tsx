"use client";

import type { CBSHUser } from "~/lib/getSessionInfo";
import LiveEdit from "~/components/LiveEdit";
import { createPortal } from "react-dom";
import { useState } from "react";
import DialogCloseButton from "~/components/DialogCloseButton";

export default function Client({ userData, displayName }: { userData: CBSHUser, displayName: string }) {
    const [isDialogActive, setIsDialogActive] = useState(false);

    const ud = userData?.displayname ? userData.displayname : (userData?.username ? userData.username : "");

    return <div className="flex justify-center">
        <button className="p-3 leading-none rounded-xl bg-orange-400 hover:opacity-90 active:opacity-70 w-fit min-w-32"
               onClick={() => setIsDialogActive(true)}>Add a message</button>
        { isDialogActive &&
            createPortal(<MessageDialog displayName={displayName} setIsActive={setIsDialogActive} userDisplay={ud} />,
                document.getElementById("modal-portal")!) }
    </div>;
};

const MessageDialog = ({ displayName, userDisplay, setIsActive }:
                       { displayName: string, userDisplay: string, setIsActive: (value: boolean) => void }) => {
    const [message, setMessage] = useState("");
    const [name, setName] = useState(userDisplay);
    return <>
        <div className="fixed inset-0 bg-black opacity-40" />
        <div className={"fixed top-1/2 left-1/2 max-w-lg max-h-md bg-gradient-to-r from-[#b50f0fcc] to-[#f28b15cc]"+
                        " p-5 w-full h-fit rounded-2xl flex flex-col items-center gap-4"}
             style={{ transform: "translate(-50%, -50%)", boxShadow: "0 0 1rem black" }}>
            <DialogCloseButton onClick={() => setIsActive(false)} />
            <h2 className="text-2xl leading-none text-center font-bold">Leave a message for { displayName }</h2>
            <div className="flex gap-1 w-full">
                <label>Name: </label>
                <input value={name} onChange={e => setName(e.currentTarget.value)}
                       placeholder="Bestie" className="border-b focus:border-b-2 outline-none w-full" />
            </div>
            <LiveEdit value={message} onChange={e => setMessage(e)} style={{ resize: "none" }} />
        </div>
    </>;
};
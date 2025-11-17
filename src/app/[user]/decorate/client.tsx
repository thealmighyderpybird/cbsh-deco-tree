"use client";

import type { CBSHUser } from "~/lib/getSessionInfo";
import LiveEdit from "~/components/LiveEdit";
import { createPortal } from "react-dom";
import { useState } from "react";
import DialogCloseButton from "~/components/DialogCloseButton";

export default function Client({ userData, displayName }: { userData: CBSHUser, displayName: string }) {
    const ud = userData?.displayname ? userData.displayname.trim() : (userData?.username ? String(userData.username).trim() : "");
    const [page, setPage] = useState(0);

    const pages = [<>
        <h2 className="mt-15 mb-25 text-center text-3xl md:text-4xl font-bold select-none">Decorate { displayName }'
            { !displayName.endsWith("s") && "s" } Tree</h2>
    </>, <MessagePage displayName={displayName} userDisplay={ud} />];

    return pages[page];
};

const OrnamentPage = () => {

};

const MessagePage = ({ displayName, userDisplay }: { displayName: string, userDisplay: string }) => {
    const [message, setMessage] = useState("");
    const [name, setName] = useState(userDisplay);
    return <>
        <div>
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
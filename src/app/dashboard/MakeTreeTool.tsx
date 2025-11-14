"use client";

import TreeServerURL from "~/TreeServerURL";
import useAlert from "~/AlertContext";
import { useEffect } from "react";

export default function MakeTreeTool({ sid, treeDetails }: { sid: string, treeDetails: Object }) {
    const { createAlertBalloon } = useAlert();

    useEffect(() => {
        if (!sid) {
            createAlertBalloon("Something went wrong",
                "A Session ID was not provided. Please make sure you are signed in.", 1);
            return;
        }

        async function doAction() {
            const tree = await createTree(sid, treeDetails, createAlertBalloon);
            if (!tree) return;
            window.location.reload();
        } void doAction();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
};

const createTree = async (sid: string, treeDetails: Object,
                      createAlertBalloon: (title: string, message: string, type?: 0 | 2 | 1 | -1) => void) => {
    const r = await fetch(TreeServerURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": JSON.stringify(sid),
        },
        body: JSON.stringify(treeDetails),
    });
    const res = await r.json();

    if (res.status !== "OK") {createAlertBalloon("Something went wrong", res.data.error, 2); return false;}
    return true;
};
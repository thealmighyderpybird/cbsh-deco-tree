const setSession = async (session: { uid: string, sid: string }) => {
    await fetch("/api/auth", {
        method: "POST",
        body: JSON.stringify(session),
        headers: { "Content-Type": "application/json" },
    });
};

export default setSession;
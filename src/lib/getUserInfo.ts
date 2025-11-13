import type { CBSHUser } from "~/lib/getSessionInfo";
import CBSHServerURL from "~/CBSHServerURL";

interface CBSHUserAPIResponse {
    status: "OK" | "FAILED",
    data: CBSHUser
}

const getUserInfo = async (username: string) => {
    const r = await fetch(CBSHServerURL + "/users/" + username, {
        headers: { "Content-Type": "application/json" },
    });
    const res = await r.json() as CBSHUserAPIResponse;
    return res.data;
};

export default getUserInfo;
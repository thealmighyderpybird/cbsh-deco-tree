"use server";

import { cookies } from "next/headers";

const deleteSession = async () => {
    const cookieStore = await cookies();
    cookieStore.delete("uid");
    cookieStore.delete("sid");
};

export default deleteSession;
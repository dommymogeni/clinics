"use server";

import { signOut } from "@/auth";

const Logout = async () => {
  await signOut();
};

export default Logout;

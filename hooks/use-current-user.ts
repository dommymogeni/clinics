// this hook contains the information about the current user logged in

import { useSession } from "next-auth/react";

export const useCurrentUserSession = () => {
  const { data: session } = useSession();
  return session?.user;
};

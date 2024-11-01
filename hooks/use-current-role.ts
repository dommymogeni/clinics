// this hook contains the information about the current user logged in role

import { useSession } from "next-auth/react";

export const useCurrentUsertRole = () => {
  const { data: session } = useSession();

  return session?.user.role;
};

import { currentUser } from "@/lib/auth";

export default async function Dashboards() {
  const role = await currentUser();
  return (
    <div>
      current role is: {role?.role}
    </div>
  );
}

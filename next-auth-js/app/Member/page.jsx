import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/dist/server/api-utils";

const Member = async () => {
  const session = await getServerSession(options);
  if (!session) {
    // is login (if false) -> logout (if logged) -> comback this page
    redirect("/api/auth/signin?callbackUrl=/Member");
  }
  return (
    <div>
      <h1>Member Server Session</h1>
      <p>{session.user.name}</p>
      <p>{session.user.email}</p>
      <p>{session.user.role}</p>
    </div>
  );
};

export default Member;

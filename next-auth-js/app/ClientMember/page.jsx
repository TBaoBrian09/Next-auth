"use client";

import { useSession } from "next-auth/react";
import { options } from "../api/auth/[...nextauth]/options";

const ClientMember = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      riderect("/api/auth/signin?callbackUrl=/ClientMember");
    },
  });
  // if (!session) {
  //   redirect("/api/auth/signin?callbackUrl=/Member");
  // }
  return (
    <div>
      <p>{session.user.name}</p>
      <p>{session.user.email}</p>
      <p>{session.user.role}</p>
    </div>
  );
};

export default ClientMember;

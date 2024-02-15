"use client";

import { Button } from "antd";
import useStore from "./store";

export default function Home() {
  const { user, fetchLogin } = useStore();

  const handleLogin = () => {
    fetchLogin({
      email: "baont02099@gmail.com",
      password: "123Ntb!",
    });
  };

  const handleLogout = () => {
    fetchLogout({
      
    })
  }

  console.log("user", user);
  return (
    <div>
      {!user ? (
        <Button onClick={handleLogin}>Login</Button>
      ) : (
        <Button onClick={handleLogout}>Logout</Button>
      )}
    </div>
  );
}

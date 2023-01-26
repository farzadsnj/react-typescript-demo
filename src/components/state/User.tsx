import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../UserContext";

type UserProps = {
  name: string;
  email: string;
};

type AuthUser = {
  name: string;
  email: string;
};
export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext?.setUser({
      name: "farzad",
      email: "farzad@gmail.com",
    });
  };
  const handleLogout = () => {
    if (userContext) {
      userContext.setUser(null);
    }
  };
  return (
    <div>
      <button onClick={handleLogin}>login User</button>
      <button onClick={handleLogout}>logout User</button>
      <div>User name is {userContext?.user?.name}</div>
      <div>User email is {userContext?.user?.email}</div>
    </div>
  );
};
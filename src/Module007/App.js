import React, { useEffect, useState } from "react";
import Users from "./components/Users";
import Friends from "./components/Friends";
import Posts from "./components/Posts";

export default function App() {
  return (
    <div>
      <Users />
      <Friends />
      <Posts />
    </div>
  );
}

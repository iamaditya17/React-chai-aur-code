import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { userId } = useParams();
  return (
    <div className="text-3xl text-center px-auto py-5 bg-red-400 text-white">
      User: {userId}
    </div>
  );
}

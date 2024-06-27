import React from "react";
import { useState, useEffect } from "react";

export default function Github() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    // when this component/page is loaded on the browser this hook will trigger
    fetch("https://api.github.com/users/iamaditya17")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // data is a array of data
        setdata(data);
      });
  }, []);

  return (
    <div className="text-3xl text-center px-auto py-5 bg-red-400 text-white">
      Followers: {data.followers}
      <img src={data.avatar_url} alt="#Git profile" />
    </div>
  );
}

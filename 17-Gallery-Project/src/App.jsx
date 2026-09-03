// import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
const App = () => {
  const [userData, setUserData] = useState([]);
  const [idx, setidx] = useState(1);
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${idx}&limit=10`,
    );
    setUserData(response.data);
  };

  useEffect(
    function () {
      getData();
    },
    [idx],
  );

  let printUserData = (
    <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading
    </h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <a href={elem.url}>
          <div key={idx}>
            <div className="h-40 w-44 overflow-hidden bg-white">
              <img
                className="h-full w-full object-cover rounded-xxl"
                src={elem.download_url}
              ></img>
            </div>
            <h1 className="font-bold ">{elem.author}</h1>
          </div>
        </a>
      );
    });
  }
  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      {/* <h1 className="align-center ">Loading</h1> */}
      <div className="flex flex-wrap p-9 gap-6">{printUserData}</div>

      <div className="fixed bottom-0 left-0 w-full flex justify-center gap-6 bg-black py-4">
        <button
          style={{ opacity: idx == 1 ? 0.6 : 1 }}
          onClick={() => {
            if (idx > 1) {
              setidx(idx - 1);
              setUserData([]);
            }
          }}
          className="bg-amber-400 cursor-pointer active:scale-110 text-black rounded px-6 py-2 font-semibold"
        >
          Pre
        </button>
        <h4>Page {idx}</h4>
        <button
          onClick={() => {
            setidx(idx + 1);
            setUserData([]);
          }}
          className="bg-amber-400 cursor-pointer active:scale-110 text-black rounded px-6 py-2 font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;

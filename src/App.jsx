import { useState } from "react";
import Cars from "./components/Cars.jsx";

export default function App() {
  const [cars, setCars] = useState([
    {
      title: "BMW 320i",
      pocoto: 271,
    },
    {
      title: "Audi A3",
      pocoto: 238,
    },
  ]);
  return (
    <div className="flex w-screen h-screen justify-center bg-slate-900 p-6">
      <div className="w-1/3 space-y-4 animate-slide-left">
        <h1 className="font-helvetica font-semibold text-2xl text-slate-300 text-center">
          WIUTRACK
        </h1>
        <Cars title={cars} />
      </div>
    </div>
  );
}

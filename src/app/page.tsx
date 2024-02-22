import Image from "next/image";
import { SpreadsheetInput, ScrollAreaDemo } from "./layout";

export default function Home() {
  return (
    <main className="flex h-screen flex-col px-20 py-10 bg-slate-200 gap-5">
      <h1 className="text-4xl font-bold text-left text-slate-950">
        SynthoCrate
      </h1>
      <div className="flex flex-row gap-2 h-full">
        <div className="flex flex-col gap-2 w-4/12">
          <div className="bg-white p-4 rounded-md h-min">
            <SpreadsheetInput />
          </div>
          <div className="bg-white p-4 rounded-md h-min">
            <ScrollAreaDemo />
          </div>
          <div className="bg-white p-4 rounded-md flex-grow">
            <h4 className="mb-4 text-sm font-medium leading-none">Table</h4>
            {/* contents of table */}
          </div>
        </div>
        <div className="flex flex-column bg-white p-4 rounded-md flex-grow">
          PDF
        </div>
      </div>
    </main>
  );
}

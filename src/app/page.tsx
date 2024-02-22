import Image from "next/image";
import { SpreadsheetInput, ScrollAreaDemo } from "./layout";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-20 py-10 bg-slate-200 gap-10">
      <h1 className="text-5xl font-bold text-left text-slate-950 text-left">
        SynthoCrate
      </h1>
      <div className="flex gap-2 flex-row h-max">
        <div className="flex flex-col gap-2 w-4/12">
          <div className="bg-white p-4 rounded-md h-min">
            {SpreadsheetInput()}
          </div>
          <div className="bg-white p-4 rounded-md h-min">
            {ScrollAreaDemo()}
          </div>
          <div className="bg-white p-4 rounded-md h-full">
            <h4 className="mb-4 text-sm font-medium leading-none h-full">
              Table
            </h4>
          </div>
        </div>
        <div className="flex flex-column">
        </div>
      </div>
    </main>
  );
}

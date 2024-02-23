import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Label } from "@/components/ui/label";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import data from "/home/ayyang/synthocrate-web/data/data.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SynthoCrate",
  description: "Literature screening made easy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export function SpreadsheetInput() {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor="spreadhseet">Excel Spreadsheet (.xlsx)</Label>
      <Input
        id="spreadsheet"
        type="file"
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
      />
    </div>
  );
}

//FILE LIST

// const doiList = Array.from({ length: data.length}).map(
//   (_, i, a) => `v1.2.0-beta.${a.length - i}`
// );

const doiList = data;

export function ScrollAreaDemo() {
  return (
    <ScrollArea
      className="h-72 rounded-md border"
      style={{ maxHeight: "160px" }}
    >
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Files</h4>
        {doiList.map((tag) => (
          <>
            <div key={tag} className="text-sm">
              {tag}
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  );
}

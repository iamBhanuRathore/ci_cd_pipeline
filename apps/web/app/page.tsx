"use client";
import { Button } from "@repo/ui/components/ui/button";

import { myType } from "@repo/common/index";
export default function Home() {
  const obj = {
    name: "bhanu",
    age: 21,
  };
  const isOk = myType.safeParse(obj);
  console.log(isOk);
  return (
  <div className="bg-red-300">This is web application 
    <Button variant="destructive">This is button using tailwind</Button>
  </div>
  );
}

import { Button } from "@repo/ui/shadcn/button";
import styles from "./page.module.css";

export default function Home() {
  console.log("HEll", styles.page);
  return (
    <div className="flex h-full w-full flex-1 bg-red-200">
      <Button>Button from the docs</Button>
    </div>
  );
}

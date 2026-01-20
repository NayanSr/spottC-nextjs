import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>Hellow World</h2>
      <Button className="hidden md:inline">Hallo button</Button>
    </div>
  );
}

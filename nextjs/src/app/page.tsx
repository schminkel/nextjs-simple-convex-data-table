import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="text-2xl font-bold">Welcome to Next.js</h1>
      <Button className="mt-12">Click me</Button>
    </main>
  );
}
